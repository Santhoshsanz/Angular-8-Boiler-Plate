class SocketClass {
    userName: string;
    password: string;
}
// OPEN VPC CONFIG - OPEN VPC
/* ====================================*/
const openVpc = 'http://192.168.11.146:8080/';
const openVpcSocket: SocketClass = { userName: 'admin', password: 'ad85702' };

// const openVpc = 'http://52.66.18.36/brandenburg-iop-anana-oauth/';

// const openVpc = 'http://ec2-13-127-52-122.ap-south-1.compute.amazonaws.com/brandenburg-iop-anana/';


// DEVELOPMENT CONFIG
/* ====================================*/
const devUrl = 'http://dev-uas.iopbeta.com/brandenburg-iop-anana/';
const devSocket: SocketClass = { userName: 'admin', password: 'admin#@!' };




// IOP BETA UAE CONFIG - PRODUCTION
/* ====================================*/
const iopUaeUrl = 'https://uas.iopbeta.com/brandenburg-iop-anana/';
const iopUaeSocket: SocketClass = { userName: 'admin', password: 'admin#@e' };

// IOP BETA SA CONFIG - PRODUCTION
/* ====================================*/
const iopSaUrl = 'https://uas.iopbeta.com/brandenburg-iop-anana/';
const iopSaSocket: SocketClass = { userName: 'admin', password: 'admin#@e' };


// IOP BETA US CONFIG
/* ====================================*/
const iopUsUrl = 'https://uas.iopbeta.com/brandenburg-iop-anana/';
const iopUsSocket: SocketClass = { userName: 'admin', password: 'admin#@e' };

// IOP BETA US CONFIG
/* ====================================*/

const iopBetaUrl = 'https://uas.iopbeta.com/brandenburg-iop-anana/';
const iopBetaSocket: SocketClass = { userName: 'admin', password: 'admin#@e' };


// JAPAN CONFIG
/* ====================================*/
const iopJpUrl = 'https://uas.iopbeta.com/brandenburg-iop-anana/';
const iopJpSocket: SocketClass = { userName: 'admin', password: 'admin#@e' };

// PRODUCTION CONFIG
/* ====================================*/
const prodUrl = 'https://uas.iopbeta.com/brandenburg-iop-anana/';
const prodSocket: SocketClass = { userName: 'admin', password: 'admin#@e' };






export const UrlList = {
    openVpc: { // Open VPC
        url: openVpc + 'api/v1/',
        //  notificationUrl:devUrl+'iop-websocket'
        notificationUrl: 'wss://dev-wssrabbitmq.iopbeta.com/ws',
        oAuth: openVpc + '/oauth/token',
        username: openVpcSocket.userName,
        password: openVpcSocket.password
    },
    dev: { // Development
        url: devUrl + 'api/v1/',
        notificationUrl: 'ws://development-wssrabbitmq.iopbeta.com/ws',
        oAuth: devUrl + '/oauth/token',
        username: openVpcSocket.userName,
        password: openVpcSocket.password
    },
    prod: { // Production
        url: prodUrl + 'api/v1/',
        notificationUrl: 'wss://beta-wssrabbitmq.iopbeta.com/ws',
        oAuth: prodUrl + '/oauth/token',
        username: prodSocket.userName,
        password: prodSocket.password
    },
    iopBeta: { // Beta
        url: iopBetaUrl + 'api/v1/',
        notificationUrl: 'wss://beta-wssrabbitmq.iopbeta.com/ws',
        oAuth: iopBetaUrl + '/oauth/token',
        username: iopBetaSocket.userName,
        password: iopBetaSocket.password
    },
    iopJp: { // Japan Beta
        url: iopJpUrl + 'api/v1/',
        notificationUrl: 'wss://beta-wssrabbitmq.iopbeta.com/ws',
        oAuth: iopJpUrl + '/oauth/token',
        username: iopJpSocket.userName,
        password: iopJpSocket.password
    },
    iopUae: { // UAE Dubai Beta
        url: iopUaeUrl + 'api/v1/',
        notificationUrl: 'wss://beta-wssrabbitmq.iopbeta.com/ws',
        oAuth: iopUaeUrl + '/oauth/token',
        username: iopUaeSocket.userName,
        password: iopUaeSocket.password
    },
    iopUs: { // US Beta
        url: iopUsUrl + 'api/v1/',
        notificationUrl: 'wss://beta-wssrabbitmq.iopbeta.com/ws',
        oAuth: iopUsUrl + '/oauth/token',
        username: iopUsSocket.userName,
        password: iopUsSocket.password
    },
    iopSa: { // SA Beta
        url: iopSaUrl + 'api/v1/',
        notificationUrl: 'wss://beta-wssrabbitmq.iopbeta.com/ws',
        oAuth: iopSaUrl + '/oauth/token',
        username: iopSaSocket.userName,
        password: iopSaSocket.password
    }
};

