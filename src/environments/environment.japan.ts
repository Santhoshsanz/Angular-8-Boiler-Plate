
import { UrlList } from './urlList';
export const environment = {
    production: true,
    // cLogo: './assets/images/logoClients/logoFull.png',
    cLogo: '',

    url: {
        siteUrl: UrlList.iopJp.url,
        notificationUrl: UrlList.iopJp.notificationUrl,
        oAuth: UrlList.iopJp.oAuth,
        userName: UrlList.iopJp.username,
        password: UrlList.iopJp.password
    }
};