// import React from "react";
// import hastPermissionToView from "../hasPermissionToView";
// import { Navigate } from "react-router-dom";
// import {
//   CAMERA_VIEW_PERMISSION,
//   LIVE_PERMISSION,
//   MEMBER_VIEW_PERMISSION,
//   PERMISSION_VIEW_PERMISSION,
//   REPORT_PERMISSION,
//   USER_VIEW_PERMISSION,
// } from "../acl";
// import { useQuery } from "@tanstack/react-query";
// import { ACL, getProfile } from "~/controllers/user";
// import { PROFILE_KEY } from "~/store/constants";

// export interface ComponentProps {
//   count: number;
//   data: any[];
//   dataIsLoading: boolean;
// }

// const redirectUrls = {
//   [LIVE_PERMISSION]: "/dashboard/liveCamera",
//   [REPORT_PERMISSION]: "/dashboard/home",
//   [CAMERA_VIEW_PERMISSION]: "/dashboard/settings",
//   [MEMBER_VIEW_PERMISSION]: "/dashboard/members",
//   [PERMISSION_VIEW_PERMISSION]: "/dashboard/permissions",
//   [USER_VIEW_PERMISSION]: "/dashboard/admin",
// };
// const findBestRoute = (acls: ACL[]) => {
//   const aclName = acls.find(
//     ({ name }) =>
//       name === LIVE_PERMISSION ||
//       name === REPORT_PERMISSION ||
//       name === CAMERA_VIEW_PERMISSION ||
//       name === MEMBER_VIEW_PERMISSION ||
//       name === USER_VIEW_PERMISSION ||
//       name === PERMISSION_VIEW_PERMISSION
//   );
//   if (!aclName) {
//     return "/profile";
//   }
//   // @ts-ignore
//   return redirectUrls[aclName];
// };
// type Permission = string[];
// const withPermission = (
//   WrappedComponent: React.ElementType,
//   permissions: Permission,
//   redirect_url?: string | undefined
// ) => {
//   const hocComponent = ({ ...props }: any) => {
//     const hasPermission = hastPermissionToView(permissions);
//     if (hasPermission) return <WrappedComponent {...props} />;

//     const { data: profile } = useQuery({
//       queryFn: getProfile,
//       suspense: true,
//       queryKey: [PROFILE_KEY],
//     });
//     const _redirect_url =
//       redirect_url || findBestRoute(profile?.acl || []) || "";
//     return <Navigate to={_redirect_url} />;
//   };

//   hocComponent.propTypes = {};

//   return hocComponent;
// };

// export default withPermission;
