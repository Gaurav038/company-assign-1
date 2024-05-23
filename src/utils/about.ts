import { AboutDatas } from "@/constant/aboutData";


export const getInfoByoptionsId = (id: any) => {
    for (const data of AboutDatas.options) {
      if (data.id == id) {
        return data.info;
      }
    }
    return null;
  };
  
  export const checkInfoData = (infoData: any, secondSelect: any) => {
    for (const item of infoData) {
      if (item.id == secondSelect) {
        return true;
      }
    }
    return false;
  };