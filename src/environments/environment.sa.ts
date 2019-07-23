
import { UrlList } from './urlList';
export const environment = {
    production: true,
    // cLogo: './assets/images/logoClients/logoFull.png',
    cLogo: '',

    url: {
        siteUrl: UrlList.iopSa.url,
        notificationUrl: UrlList.iopSa.notificationUrl,
        oAuth: UrlList.iopSa.oAuth,
        userName: UrlList.iopSa.username,
        password: UrlList.iopSa.password
    }
};