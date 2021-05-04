import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diet_list: [],
  },
  getters: {
    diet_list(state) {
      return state.diet_list;
    },
  },
  mutations: {
    dietList(state, list) {
      state.diet_list = list;
    },
  },
  actions: {
    dietList({ commit }) {
      axios
        .get("https://fresh-diet-default-rtdb.firebaseio.com/diet_list.json")
        .then((res) => {
          commit("dietList", res.data);
          console.log(res.data);
        })
        .catch((err) => {
          commit("dietList", []);
          console.log(err);
        });
    },
  },
  modules: {},
});
