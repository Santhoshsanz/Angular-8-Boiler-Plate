
import { UrlList } from './urlList';
export const environment = {
  production: true,
  // cLogo: './assets/images/logoClients/logoFull.png',
  cLogo: '',

  url: {
    siteUrl: UrlList.iopUs.url,
    notificationUrl: UrlList.iopUs.notificationUrl,
    oAuth: UrlList.iopUs.oAuth,
    userName: UrlList.iopUs.username,
    password: UrlList.iopUs.password
  }
};
