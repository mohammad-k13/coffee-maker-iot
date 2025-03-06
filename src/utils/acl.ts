import i18next from "~/i18n/config"

export const LIVE_PERMISSION= "LIVE"
export const REPORT_PERMISSION= "REPORT"
export const OPEN_GATE_PERMISSION= "OPEN_GATE"
export const ADVANCED_SETTINGS_PERMISSION= "ADVANCED_SETTINGS"
export const UNLOAD_PERMISSION= "UNLOAD"
export const MAINTENANCE_PERMISSION= "MAINTENANCE"
export const DELETE_TRANSMISSION_PERMISSION= "DELETE_TRANSMISSION"
export const EDIT_TRANSMISSION_PERMISSION= "EDIT_TRANSMISSION"
export const LIMITED_EDIT_TRANSMISSION_PERMISSION= "LIMITED_EDIT_TRANSMISSION"
export const VERIFY_TRANSMISSION_PERMISSION= "VERIFY_TRANSMISSION"
export const PLATE_FACE_PERMISSION= "PLATE_FACE"
export const MEMBER_VIEW_PERMISSION= "MEMBER_VIEW"
export const MEMBER_EDIT_PERMISSION= "MEMBER_EDIT"
export const MEMBER_ADD_PERMISSION= "MEMBER_ADD"
export const MEMBER_DELETE_PERMISSION= "MEMBER_DELETE"
export const PERMISSION_VIEW_PERMISSION= "PERMISSION_VIEW"
export const PERMISSION_EDIT_PERMISSION= "PERMISSION_EDIT"
export const PERMISSION_ADD_PERMISSION= "PERMISSION_ADD"
export const PERMISSION_DELETE_PERMISSION= "PERMISSION_DELETE"
export const CAMERA_VIEW_PERMISSION= "CAMERA_VIEW"
export const CAMERA_EDIT_PERMISSION= "CAMERA_EDIT"
export const CAMERA_ADD_PERMISSION= "CAMERA_ADD"
export const CAMERA_DELETE_PERMISSION= "CAMERA_DELETE"
export const GROUP_VIEW_PERMISSION= "GROUP_VIEW"
export const GROUP_EDIT_PERMISSION= "GROUP_EDIT"
export const GROUP_ADD_PERMISSION= "GROUP_ADD"
export const GROUP_DELETE_PERMISSION= "GROUP_DELETE"
export const USER_VIEW_PERMISSION= "USER_VIEW"
export const USER_EDIT_PERMISSION= "USER_EDIT"
export const USER_ADD_PERMISSION= "USER_ADD"
export const USER_DELETE_PERMISSION= "USER_DELETE"

export const ACL = [
    { name: "LIVE_PERMISSION", id: 11, desc: i18next.t("acl.live") },
    { name: "REPORT_PERMISSION", id: 21, desc: i18next.t("acl.report") },
    { name: "OPEN_GATE_PERMISSION", id: 81, desc: i18next.t("acl.open_gate") },
    { name: "ADVANCED_SETTINGS_PERMISSION", id: 91, desc: i18next.t("acl.advanced_settings") },
    { name: "UNLOAD_PERMISSION", id: 92, desc: i18next.t("acl.unload") },
    { name: "MAINTENANCE_PERMISSION", id: 93, desc: i18next.t("acl.maintenance") },
    { name: "DELETE_TRANSMISSION_PERMISSION", id: 94, desc: i18next.t("acl.delete_transmission") },
    { name: "EDIT_TRANSMISSION_PERMISSION", id: 95, desc: i18next.t("acl.edit_transmission") },
    { name: "LIMITED_EDIT_TRANSMISSION_PERMISSION", id: 96, desc: i18next.t("acl.limited_edit_transmission") },
    { name: "VERIFY_TRANSMISSION_PERMISSION", id: 97, desc: i18next.t("acl.verify_transmission") },
    { name: "PLATE_FACE_PERMISSION", id: 98, desc: i18next.t("acl.plate_face") },
    { name: "MEMBER_VIEW_PERMISSION", id: 31, desc: i18next.t("acl.member_view") },
    { name: "MEMBER_EDIT_PERMISSION", id: 32, desc: i18next.t("acl.member_edit") },
    { name: "MEMBER_ADD_PERMISSION", id: 33, desc: i18next.t("acl.member_add") },
    { name: "MEMBER_DELETE_PERMISSION", id: 34, desc: i18next.t("acl.member_delete") },
    { name: "PERMISSION_VIEW_PERMISSION", id: 41, desc: i18next.t("acl.permission_view") },
    { name: "PERMISSION_EDIT_PERMISSION", id: 42, desc: i18next.t("acl.permission_edit") },
    { name: "PERMISSION_ADD_PERMISSION", id: 43, desc: i18next.t("acl.permission_add") },
    { name: "PERMISSION_DELETE_PERMISSION", id: 44, desc: i18next.t("acl.permission_delete") },
    { name: "CAMERA_VIEW_PERMISSION", id: 51, desc: i18next.t("acl.camera_view") },
    { name: "CAMERA_EDIT_PERMISSION", id: 52, desc: i18next.t("acl.camera_edit") },
    { name: "CAMERA_ADD_PERMISSION", id: 53, desc: i18next.t("acl.camera_add") },
    { name: "CAMERA_DELETE_PERMISSION", id: 54, desc: i18next.t("acl.camera_delete") },
    { name: "GROUP_VIEW_PERMISSION", id: 61, desc: i18next.t("acl.group_view") },
    { name: "GROUP_EDIT_PERMISSION", id: 62, desc: i18next.t("acl.group_edit") },
    { name: "GROUP_ADD_PERMISSION", id: 63, desc: i18next.t("acl.group_add") },
    { name: "GROUP_DELETE_PERMISSION", id: 64, desc: i18next.t("acl.group_delete") },
    { name: "USER_VIEW_PERMISSION", id: 71, desc: i18next.t("acl.user_view") },
    { name: "USER_EDIT_PERMISSION", id: 72, desc: i18next.t("acl.user_edit") },
    { name: "USER_ADD_PERMISSION", id: 73, desc: i18next.t("acl.user_add") },
    { name: "USER_DELETE_PERMISSION", id: 74, desc: i18next.t("acl.user_delete") },
  ];
  


// function generateACL(baseName:string, baseId:number, baseDesc:string) {
//     const acl = [
//         {
//             name: `${baseName}_VIEW`,
//             id: baseId + 1,
//             desc: `مشاهده ${baseDesc} ها`
//         },
//         {
//             name: `${baseName}_EDIT`,
//             id: baseId + 2,
//             desc: `ویرایش ${baseDesc}`
//         },
//         {
//             name: `${baseName}_ADD`,
//             id: baseId + 3,
//             desc: `افزودن ${baseDesc}`
//         },
//         {
//             name: `${baseName}_DELETE`,
//             id: baseId + 4,
//             desc: `حذف ${baseDesc}`
//         }
//     ];
//     return acl;
// }


