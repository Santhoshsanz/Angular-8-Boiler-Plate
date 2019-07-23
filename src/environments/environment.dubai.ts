
import { UrlList } from './urlList';
export const environment = {
    production: true,
    // cLogo: './assets/images/logoClients/logoFull.png',
    cLogo: '',

    url: {
        siteUrl: UrlList.iopUae.url,
        notificationUrl: UrlList.iopUae.notificationUrl,
        oAuth: UrlList.iopUae.oAuth,
        userName: UrlList.iopUae.username,
        password: UrlList.iopUae.password
    }
};