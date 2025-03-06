// import { useQueryClient } from "@tanstack/react-query";
// import { ACL } from "~/controllers/user";
// import { PROFILE_KEY } from "~/store/constants";

// type NeededPermission = string[];

// export default function hastPermissionToView(
//   neededPermissions: NeededPermission | string
// ) {
//   const query = useQueryClient();
//   const d = query.getQueriesData<{ acl: ACL[] }>([PROFILE_KEY]);
//   // FOR NOT REDIRECT AT FIRST
//   if (!d[0] || !d[0][1]?.acl) return false;
//   if (typeof neededPermissions === "string")
//     return !!d[0][1]?.acl.map(({ name }) => name).includes(neededPermissions);

//   return !!neededPermissions.some((p) =>
//     d[0][1]?.acl?.map(({ name }) => name).includes(p)
//   );
// }
