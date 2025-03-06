import axios, { AxiosError } from "axios";
// import { toast } from "react-toastify";
// import { MdOutlineInsertChartOutlined, MdOutlineGroups } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";
// import { BsCamera } from "react-icons/bs";
// import { HiOutlineDocumentText } from "react-icons/hi";
// import { BiRfid } from "react-icons/bi";
import { useAuthStore } from ".";
import moment from "moment-jalaali";

export const TOKEN_KEY = "TOKEN_KEY";
export const PROFILE_KEY = "PROFILE_KEY";
export const IS_LOGGED_IN = "IS_LOGGED_IN";

moment.loadPersian({ dialect: "persian-modern" });

export const LANGUAGE_KEY = "LANGUAGE";
// Query Keys
export const REPORTS_PLATE_LOGS_KEY = "REPORTS_PLATE_LOGS";
export const REPORTS_DASHBOARD_KEY = "REPORTS_DASHBOARD";
export const CAMERAS_LIST_KEY = "CAMERAS_LIST";
export const USER_CAMERAS_LIST_KEY = "USER_CAMERAS_LIST";
export const CHART_DASHBOARD_KEY = "CHART_DASHBOARD";
export const MEMBERS_KEY = "MEMBERS";
export const MEMBER_ITEM_KEY = "MEMBERS_ITEM";
export const USERS_KEY = "USERS";
export const PERMISSIONS_KEY = "PERMISSIONS";
export const ADVANCED_SETTING_KEY = "ADVANCED_SETTING";
export const SETTING_KEY_KEY = "SETTING_KEY";
export const WEBSITE_URL = "https://next-y2dycl.chbk.run";
export const ONE_MINITUE_MS = 1000 * 60;
import i18n from "~/i18n/config";
import momentEn from "moment";
import getCurrentHostName from "~/utils/getCurrentHostName";

export const momentJalali = i18n.language === "en" ? momentEn : moment;

// export const MAIN_NAVIGATIONS = [
//   {
//     path: "/dashboard/home",
//     title: i18n.t("main_navigation.dashboard"), // Use the translation key here
//     icon: CategoryDashboardIcon,
//     prms: [REPORT_PERMISSION],
//   },
//   {
//     path: "/dashboard/liveCamera",
//     title: i18n.t("main_navigation.liveCamera"),
//     icon: CameraIcon,
//     prms: [LIVE_PERMISSION],
//   },
//   {
//     path: "/dashboard/reports",
//     title: i18n.t("main_navigation.reports"),
//     icon: ChartIcon,
//     prms: [REPORT_PERMISSION],
//   },
//   {
//     path: "/dashboard/members",
//     title: i18n.t("main_navigation.members"),
//     icon: UsersIcon,
//     prms: [MEMBER_VIEW_PERMISSION],
//   },
//   {
//     path: "/dashboard/permissions",
//     title: i18n.t("main_navigation.permissions"),
//     icon: PaperIcon,
//     prms: [PERMISSION_VIEW_PERMISSION],
//   },
//   {
//     path: "/dashboard/rfid",
//     title: i18n.t("main_navigation.rfid"),
//     icon: BiRfid,
//     prms: [],
//   },
//   {
//     path: "/dashboard/settings",
//     title: i18n.t("main_navigation.settings"),
//     icon: SettingIcon,
//     prms: [CAMERA_VIEW_PERMISSION],
//   },
  
// ];


// export const API_BASE_URL = "/v2";
// export const API_BASE_URL = "http://192.168.1.126:5000/v2";
// export const API_BASE_URL = `http://${getCurrentHostName()}:5000/v2`;
export const API_BASE_URL = "http://188.136.191.200:5000/v2";
// export const API_BASE_URL = "http://188.136.191.200:5003/v2";

// export const API_BASE_URL = ":5000/v2";
// repeatedMelliCode;
// repeatedPlate;
// export const SOCKET_BASE_URL = "ws://188.136.191.200:5001";
export const WEB_SOCKET_BASE_URL = `ws://${getCurrentHostName()}:9003`;
// export const WEB_SOCKET_BASE_URL = `ws://188.136.191.200:9003`;
// export const SOCKET_BASE_URL = "ws://192.168.1.126:5001";
// export const CDN_BASE_URL = 'http://192.168.1.107:3001/cdn/v1'
// export const CDN_BASE_URL = "https://nodejs-9ekc63.chbk.run";
// export const CDN_BASE_URL = "/v2";
export const CDN_BASE_URL = `http://${getCurrentHostName()}` + ":5000/v2";
// defail
export const myAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
myAxios.interceptors.response.use(
  (e) => e,
  (e: AxiosError) => {
    if (e.response?.status === 401 || e.response?.status === 403) {
      //   toast.error("شما دسترسی لازم برای این عملیات را ندارید");
    } else if (e.response?.status === 500) {
      //   toast.error("خطایی در سرور رخ داده است");
    }

    return e;
  }
);

export const authorizedAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${useAuthStore.getState()[TOKEN_KEY]}`,
  },
});
authorizedAxios.interceptors.response.use(
  (e) => e,
  (e: AxiosError) => {
    // alert("asd");
    // console.log(e);
    if (e.response?.status === 401 || e.response?.status === 403) {
      useAuthStore.getState().logout();
      window.location.href = "/";
      //   toast.error("شما دسترسی لازم برای این عملیات را ندارید");
    } else if (e.response?.status === 500) {
      //   toast.error("خطایی در سرور رخ داده است");
    }

    return e;
  }
);

export const uploadAxios = axios.create({
  baseURL: CDN_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const MOMENT_DATE_FORMAT = "jYYYY/jM/jD";
export const MOMENT_DATE_TIME_FORMAT = "HH:mm - jYYYY/jM/jD";



export const valueColors: { [key: string]: string } = { dark: '#fff', light: '#000' };
export const titleColors: { [key: string]: string } = { dark: '#929292', light: '#424242' };
export const axisLineLineStyleColors: { [key: string]: string } = { dark: '#282828', light: '#eeeeee' };
export const axisLineLineStyleColors2: { [key: string]: string } = { dark: '#000', light: '#fff' };
export const progressColors: { [key: string]: string } = { dark: '#727272', light: '#a4a4a4' };


export const THEME = "THEME";

export const WEBSITE_SETTINGS_KEYS = {
  shippingPrice: "shippingPrice",
  privacy: "privacy",
  terms: "terms",
};

export const PRESURE = {
  MIN: 0,
  MAX: 10,
  default: 5
}