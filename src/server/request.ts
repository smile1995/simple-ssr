import axios from "axios";
import config from '../config';

const createInstance = (req: any) => axios.create({
    baseURL: 'https://t-scmcloud.shucheng-ai.com',
    headers: {
        cookie: req.get('cookie') || ''
    },
    params: {
        secret: config.secret
    },
})

export default createInstance;