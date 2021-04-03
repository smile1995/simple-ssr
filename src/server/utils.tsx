// @ts-ignore
import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {Helmet} from "react-helmet";

export const render = (store: any, routes: any, req: any, context: any) => {
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ));

    const helmet = Helmet.renderStatic();

    const cssStr = context.css.length ? context.css.join('\n') : '';

    return (`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        ${helmet.title.toString()}
        <meta name="description" content="SIMPLE SSR"/>
    </head>
    <style>${cssStr}</style>
    <body>
        <div id="root">${content}</div>
        <script type="text/javascript">
            window.context = {
                state: ${JSON.stringify(store.getState())},
            };
        </script>
        <script type="text/javascript" src="/index.js"></script>
    </body>
</html>
        `);
}