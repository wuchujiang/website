export default function ({ store }) {
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
  };
  if (process.server) {
    store.commit('project', project.lifesvip)
  }
}