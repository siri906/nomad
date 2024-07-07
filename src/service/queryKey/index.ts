const disneyInfoKeys = {
  listInfo: ["listInfoKey"],
  detailInfo: ["detailInfoKey"],

  listInfoList: (id: number) => [...disneyInfoKeys.listInfo, id],
  detailInfoList: (id: number) => [...disneyInfoKeys.detailInfo, id],
};

export default disneyInfoKeys;
