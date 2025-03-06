export default function getCameraUrlData(url:string) {
    return  JSON.parse(
        url.split(",dm_camera_config=")[1] || ""
      );

    }