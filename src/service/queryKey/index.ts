const disneyInfoKeys = {
  listInfo: ["listInfoKey"],
  detailInfo: ["detailInfoKey"],

  listInfoList: () => [...disneyInfoKeys.listInfo],
  detailInfoList: (id: number) => [...disneyInfoKeys.detailInfo, id],
};

export default disneyInfoKeys;
