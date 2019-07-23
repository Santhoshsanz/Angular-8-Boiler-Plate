declare module UserModule {

    export interface AllowPermission {
        id: number;
        name: string;
        status: boolean;
    }

    export interface Component {
        id: number;
        name: string;
        allowPermissions: AllowPermission[];
    }

    export interface Module {
        id: number;
        name: string;
        components: Component[];
    }

    export interface Preference {
        id: number;
        name: string;
        isEnable: boolean;
        roleId: number;
    }

    export interface RoleInfo {
        id: number;
        name: string;
        nameAlias: string;
        isActive: boolean;
        modules: Module[];
        preferences: Preference[];
    }

    export interface Address {
        address1: string;
        address2: string;
        city: string;
        street: string;
        state: string;
        country: string;
        pinCode: number;
        pin?: any;
        latitude?: any;
        longitude?: any;
        phoneNo: string;
    }

    export interface User {
        email: string;
        userId: string;
        firstName: string;
        middleName?: any;
        nameAlias: string;
        lastName: string;
        password?: any;
        timeZone: string;
        role: string;
        department?: any;
        phoneNo: string;
        createdDate: number;
        lastLogin: number;
        lastLogout: number;
        status: number;
        loggedin: number;
        homePageURL?: any;
        lastUpdated: number;
        clientID?: any;
        clientFilter?: any;
        facilityFilter?: any;
        guiFilter?: any;
        zoneFilter?: any;
        activityFilter?: any;
        assignedClients: any[];
        imgType: string;
        image: string;
        mobPlatform?: any;
        snsPlatformEndPoint: string;
        deviceToken?: any;
        language: string;
        roleId: number;
        address: Address[];
        themeId: string;
        isEmailEnabled: boolean;
        isSNSEnabled: boolean;
        isSMSEnabled: boolean;
        userGroupFlag?: any;
        userGroupId?: any;
        bOneclientId?: any;
    }

    export interface UserModel {
        roleInfo: RoleInfo;
        message: string;
        user: User;
        status: string;
    }
    export interface Login {
        email: string;
        password: string;
    }

}

