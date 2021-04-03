import React, {useEffect} from 'react';
import {renderRoutes} from 'react-router-config';
import {Helmet} from "react-helmet";
import {useLocation} from "react-router";
import Header from './components/Header';
import {actions} from './components/Header/store';

const Index: React.FC<any> = (props: { route: { routes: any }, staticContext: any }) => {
    // 注意自定义 Hooks 要用 use 开头
    const useScrollToTop = () => {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };

    useScrollToTop();// 每次路由发生改变，回到首页
    return (
        <div>
            <Helmet>
                <title>SIMPLE SSR</title>
            </Helmet>
            <Header {...props} staticContext={props.staticContext}/>
            {renderRoutes(props.route.routes)}
        </div>
    );
}

// 服务器渲染之前，把这个路由需要的数据提前加载好
// @ts-ignore
Index.loadData = (store: any) => {
    return store.dispatch(actions.getHeaderInfo());
}

export default Index;