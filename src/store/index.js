import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: "",
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload.value;
    },
  },
  actions: {},
  modules: {},
});
