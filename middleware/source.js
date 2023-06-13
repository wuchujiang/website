export default function ({ store, req }) {
  const project = {
    lifesvip: {
      name: "高光时刻",
      en: "lifesvip",
      record: "20063673",
    },
    xsvips: {
      name: "橡树创新",
      en: "xsvips",
      record: "20003741",
    },
    xshkvip: {
      name: "橡树黑卡",
      en: "xshkvip",
      record: "18120172",
    },
    oakvip: {
      name: "橡树黑卡",
      en: "oakvip",
      record: "18120172",
    },
    xshk: {
      name: "橡树黑卡",
      en: "xshk",
      record: "18120172",
    },
  };
  if (process.server) {
    store.commit('project', project[req.headers['fc-host'] || ''] || null)
    //store.commit('project', project['xshkvip' || ''] || null)
    store.commit('setEn', req.headers['fc-host'] || null)
  }
}