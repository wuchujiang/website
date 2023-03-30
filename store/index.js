export const state = () => ({
  state: {
    project: null
  }
})

export const mutations = {
  project(state, data) {
    state.project = data
  }
}