import express from 'express';
import {matchRoutes} from "react-router-config";
import proxy from 'express-http-proxy';
import {render} from './utils';
import {getStore} from '../store';
import routes from "../routes";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/api', proxy('https://t-scmcloud.shucheng-ai.com', {
    proxyReqPathResolver: function (req) {
        return '/api' + req.url;
    }
}));

app.get('*', (req: any, res: any) => {
    const store = getStore(req);
    // 根据路由路径，来往 store 里面加数据
    const matchedRoutes: any[] = matchRoutes(routes, req.path);
    // 让 matchRoutes 里面的组件，对应的 loadData 方法执行一次
    const promises: any[] = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            })
            promises.push(promise);
        }
    })

    Promise.all(promises).then(() => {
        const context: any = {css: []};
        const html = render(store, routes, req, context);

        if (context.action === 'REPLACE') {
            res.redirect(301, context.url);
        } else if (context.NotFound) {
            res.status(404);
            res.send(html);
        } else {
            res.send(html);
        }
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});