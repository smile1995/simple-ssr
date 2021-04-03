// @ts-ignore
import React from "react";
import App from './App';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

export default [
    {
        path: '/',
        component: App,
        // @ts-ignore
        loadData: App.loadData,
        routes: [
            {
                path: "/",
                key: 'home',
                component: Home,
                exact: true,
                // @ts-ignore
                loadData: Home.loadData,
            },
            {
                component: NotFound,
            },
        ]
    }
];