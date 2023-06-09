export const state = () => ({
  state: {
    project: null,
    en: '',
  }
})

export const mutations = {
  project(state, data) {
    state.project = data
  },
  setEn(state, data) {
    state.en = data
  }
}