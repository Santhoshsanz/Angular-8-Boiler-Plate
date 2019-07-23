import { environment } from '../environments/environment';
// 10.190.106.205
export const apiData: any = {
    'version': 'V S12.11.4',
    'url': environment.url.siteUrl,
    'loginUrl': environment.url.siteUrl,
    'serverUrl': environment.url.notificationUrl,
    'client': 'client/',
    'zone': 'zone/',
    'sensor': 'sensor/',
    'facility': 'facility/',
    'gateway': 'gateway/',
    'gatewayIP': 'gateway/ip/',
    'exportPath': 'bulk/upload/devices',
    'user': 'user/',
    'oldUser': 'user/',
    'login': 'user/login',
    'logout': 'user/logout/',
    'topic': 'machine.data',
    'fieldTech': 'user/role/fieldtech',
    'activity': 'activity/',
    'top10': 'report/clients/days/top10',
    'month12': 'report/clients/month',
    'hourly': 'report/facility/hour',
    'local': 'http://10.190.104.198:8080/api/v1/',
    // 'assignFieldTech': '/resource/assign',
    'assignFieldTech': 'fieldtech/assign/activity',
    'assignedAcitiviy': 'user/assigned/activity/',
    'sensorActivity': 'report/sensor/day',
    'flyCountGraphData': 'report/pesttype/fly/graph',
    'flyCountData': 'report/pesttype/fly',
    'fieldtechActivity': '/activity',
    'facilityMonth12': 'report/facility/month',
    'sensorNotification': '/sensorstatus/notification/',
    'eventActivity': 'events/activity/',
    'assignResource': 'resource/assign',
    'indicatorData': 'report/indicator/hour',
    'sensorActivityData': 'report/piechart',
    'drillDownDay': 'report/drilldown/day',
    'drillDownHour': 'report/drilldown/hour',
    'directionalChart': 'report/pesttype/crawl',
    'crawlPests': 'pesttype/crawl',
    'flyPests': 'pesttype/fly',
    'allPests': 'pesttype',
    'reportsDayWise': 'report/table/daywisecount',
    'perform': 'activity/perform',
    'rodentReport': 'report/rodent/mouse',
    'flyCountJ': 'daily/fly/count',
    'flyGlueBoardExpiration': 'fly/glueboard/expiration',
    'criticalBreach': 'fly/critical/limit/breach',
    'loginForgot': 'forgot/password',
    'loginResetPassword': '',
    'serviceAnalytics': 'report/service/analytics',
    'flyCompareData': 'fly/compare/report',
    'sensorMetaData': 'device/',
    'allInstallActivity': 'activity/install/',
    'performInstall': 'activity/perform/install/',
    'assignInstallActivity': 'fieldtech/assign/activity/install/',
    'allSensorMetaData': 'devices/',
    'sensorAssign': 'activity/create',
    'sensorMaintainance': 'sensor/maintenance',
    'webLogin': '/?isWebLoggedIn=true',
    'oAuth': 'oauth/token',
    'socketuser': environment.url.userName,
    'socketPassword': environment.url.password,
    'UASTokenUrl': environment.url.oAuth,
    'glueBoardIndividual': 'fly/sensor/glueboard/count',
    'tempHum': 'sensor/temp/humidity',
    'crawlSensors': 'sensortype?sensorType=sigfox&&pestType=crawl',
    'crawlSensorsFiltered': 'sensortype?sensorType=sigfox&&pestType=crawl&typeFilter=true',
    'flySensors': 'sensortype?sensorType=null&&pestType=fly',
    'onlyFlySensors': 'sensortype?sensorType=sigfox&pestType=fly&exceptType=fly optical',
    'onlySpectraSensors': 'sensortype?sensorType=sigfox&&pestType=fly&&type=fly optical',
    'sensitSensors': 'sensortype?sensorType=sigfox&&pestType=na&&type=sensit',
    'airQuality': 'sensortype?sensorType=sigfox&&pestType=na&&type=air quality',
    'wifi': 'sensortype?sensorType=wifi&&pestType=na&&type=aqi',
    'roleList': 'role',
    'moduleList': 'module',
    'enableDisbaleRole': 'enableordisable/role',
    'enableDisbaleUser': 'mysql/enableordisable/user',
    'heatMapPestActivity': 'report/pestactivities/hourwisecount',
    'aqiCustomHours': 'report/aqi/event/lasthour',
    'editSensor': '/sensor/reinstall/',
    'unInstallSensor': '/sensor/uninstall',
    'bulk': 'bulk/upload/devices',
    'oviSensor': 'fly/devices/latlong/details',
    'mosquitoCount': 'fly/deviceId/',
    'mosquitoCountReset': 'fly/reset/deviceId/',
    'spectraCount': 'list/fly/deviceId/',
    'crawlPestex': 'report/pestactivities/day/hourwisecount',
    'multipleHourwise': 'report/pestactivities/sensorwise/hourlycount',
    'multipleHourwiseIndividual': '/report/pestactivities/sensorwise/event',
    'zoneImage': 'zone/image',
    'sensorList': 'sensor/list',
    'zoneMapping': 'sensor/zone/mapping',
    'reInstall': '/sensor/reinstall',
    'flyopticalReport': 'flyoptical/report',
    'oviReport': 'ovi/report'
};
export const pestTypeName: any = [
    'rat',
    'mouse',
    'cockroach',
    'adult bed bug',
    'instar bed bug',
    'house fly',
    'bottle fly',
    'fly trap',
    'sensit',
    'rodent killer',
    'rodent bait box',
    'mouse trap'];
export const crawlPest: any = [
    'rat',
    'mouse',
    'cockroach',
    'adult bed bug',
    'instar bed bug',
    'rodent killer',
    'rodent bait box',
    'mouse trap'];
export const flyPest: any = ['house fly', 'bottle fly', 'fly trap'];

// 'url': 'http://10.190.106.93:8080/api/v1/',
// 'url':'http://ec2-13-126-250-246.ap-south-1.compute.amazonaws.com/brandenburg-iop-anana/api/v1/',
export const images: any = [
    './assets/images/bugs-pests/icon-rat.svg',
    './assets/images/bugs-pests/icon-bottle-fly.svg',
    './assets/images/bugs-pests/icon-mouse.svg',
    './assets/images/bugs-pests/icon-housefly.svg',
    './assets/images/bugs-pests/icon-instar-beg-bug.svg',
];
export const pestType: any = {
    'Rodent':
        {
            'img': './assets/images/bugs-pests/icon-rat.svg',
            'type': 'crawl'
        },
    'Mouse':
        {
            'img': './assets/images/bugs-pests/icon-mouse.svg',
            'type': 'crawl'
        },
    'Cockroach':
        {
            'img': './assets/images/bugs-pests/icon-cockroach.svg',
            'type': 'crawl'
        },
    'AdultBedBug':
        {
            'img': './assets/images/bugs-pests/icon-adult-bed-bug.svg',
            'type': 'crawl'
        },
    'InstarBedBug':
        {
            'img': './assets/images/bugs-pests/icon-instar-beg-bug.svg',
            'type': 'crawl'
        },
    'HouseFly':
        {
            'img': './assets/images/bugs-pests/icon-housefly.svg',
            'type': 'fly'
        },
    'BottleFly':
        {
            'img': './assets/images/bugs-pests/icon-bottle-fly.svg',
            'type': 'fly'
        },
    'Rat':
        {
            'img': './assets/images/bugs-pests/icon-rat.svg', 'type':
                'crawl'
        },
    'RodentKiller':
        {
            'img': './assets/images/bugs-pests/mouseZapper.png', 'type':
                'crawl'
        },
    'RodentBaitBox':
        {
            'img': './assets/images/bugs-pests/icon-rat.svg', 'type':
                'crawl'
        },
    'MouseTrap':
        {
            'img': './assets/images/bugs-pests/icon-rat.svg', 'type':
                'crawl'
        }
};

export const map: any = {
    'active': './assets/images/Icons/Location-red.svg',
    'inActive': './assets/images/Icons/Location-green.svg'
};
export const activityStatus: any = {
    'Open': 'Open',
    'Closed': 'Closed',
    'Assigned': 'Assigned',
    'Service': 'Service Procedure',
    'Action': 'Further Action Required',
    'Start': 'Started Procedure'
};
// 'brandenburg':'./assets/images/brandenburgLogo.png'
// 'dubai':'./assets/images/Dubai_Municipality_Logo.png'


// Brandenburg
// export const logo='./assets/images/brandenburgLogo.png';

// Dubai
export const logo = './assets/images/b-logo.png';

export const cLogo = environment.cLogo;
// export const cLogo= './assets/images/SpragueNewLogo.png';

// export const iopLogo = './assets/images/email/iop-logo.png';

export const iopLogo = './assets/images/IOPLogo-reverse.gif';
export const iopLogoLight = './assets/images/email/iop-logo.png';

export const circleLogo = './assets/images/email/blogoCircle.png';

export const Logo = {
    'whiteBrandenburg-Logo': './assets/images/CompanyLogo/brandenburgLight-v1.png',
    'blueBrandenburg-Logo': './assets/images/CompanyLogo/brandenburgBlue-v1.png',
    'whiteCalmic-Logo': './assets/images/CompanyLogo/calmicLight-v1.png',
    'calmic-Logo': './assets/images/CompanyLogo/calmic-v1.png',
    'darkIop-Logo': './assets/images/CompanyLogo/iopDark-v1.png',
    'lightIop-Logo': './assets/images/CompanyLogo/iopWhite-v1.png'
};


export const languages = [{
    name: 'English',
    alias: 'en-US'
}, {
    name: 'Japan',
    alias: 'ja-JP'

}];

 // 'url': 'http://10.190.106.85:8080/api/v1/',
// 'url':'http://ec2-13-126-250-246.ap-south-1.compute.amazonaws.com/brandenburg-iop-anana/api/v1/',
 // 'url': 'http://ec2-13-127-189-59.ap-south-1.compute.amazonaws.com/brandenburg-iop/api/v1/',
 // 'url': 'http://ec2-13-126-80-132.ap-south-1.compute.amazonaws.com:8080//api/v1/',
 // 'url':'http://ec2-13-127-52-122.ap-south-1.compute.amazonaws.com/brandenburg-iop-anana/api/v1/',

 // 'serverUrl': 'http://ec2-13-127-52-122.ap-south-1.compute.amazonaws.com/brandenburg-iop-anana/iop-websocket',
    // 'serverUrl': 'http://ec2-13-126-80-132.ap-south-1.compute.amazonaws.com:8080/iop-websocket',
    // 'serverUrl': 'http://ec2-13-127-189-59.ap-south-1.compute.amazonaws.com/brandenburg-iop/iop-websocket',
    // 'serverUrl': 'http://ec2-13-126-250-246.ap-south-1.compute.amazonaws.com/brandenburg-iop-anana/iop-websocket',

