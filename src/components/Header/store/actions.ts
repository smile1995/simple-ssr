import {AxiosInstance} from "axios";
import {CHANGE_LOGIN} from "./constants";

export const getHeaderInfo = () => {
    return (dispatch: any, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/isLogin.json').then(res => {
            dispatch({
                type: CHANGE_LOGIN,
                login: res.data.data.login
            })
        });
    }
}

export const login = () => {
    return (dispatch: any, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/login.json').then(res => {
            dispatch({
                type: CHANGE_LOGIN,
                login: res.data.data.login
            })
        });
    }
}

export const logout = () => {
    return (dispatch: any, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/logout.json').then(res => {
            dispatch({
                type: CHANGE_LOGIN,
                login: res.data.data.login
            })
        });
    }
}