
import { UrlList } from './urlList';
export const environment = {
  production: true,
  // cLogo: './assets/images/logoClients/logoFull.png',
  cLogo: '',

  url: {
    siteUrl: UrlList.prod.url,
    notificationUrl: UrlList.prod.notificationUrl,
    oAuth: UrlList.prod.oAuth,
    userName: UrlList.prod.username,
    password: UrlList.prod.password
  }
};
