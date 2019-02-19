import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1;
    },
    DECREMENT(state) {
      state.count -= 1;
    },
    RESET(state) {
      state.count = 0;
    }
  }

  // actions: {
  //   increment({ commit }) {
  //     commit("INCREMENT");
  //   }
  // }
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
