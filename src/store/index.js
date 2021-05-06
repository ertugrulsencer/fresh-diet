import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diet_list: false,
    diet_item: false,
  },
  getters: {
    diet_list(state) {
      return state.diet_list;
    },
    diet_item(state) {
      return state.diet_item;
    },
  },
  mutations: {
    dietList(state, list) {
      state.diet_list = list;
    },
    dietItem(state, item) {
      state.diet_item = item;
    },
  },
  actions: {
    dietList({ commit }, payload) {
      setTimeout(() => {
        axios
          .get("https://fresh-diet-default-rtdb.firebaseio.com/diet_list.json")
          .then((res) => {
            commit("dietList", res.data);
            console.log(res.data);
          })
          .catch((err) => {
            commit("dietList", []);
            console.log(err);
          })
          .finally(() => {
            payload ? payload() : false;
          });
      }, 1000);
    },
    dietItem({ commit }, payload) {
      console.log(payload.id);
      setTimeout(() => {
        axios
          .get(
            `https://fresh-diet-default-rtdb.firebaseio.com/diet_list/${
              payload.id - 1
            }.json`
          )
          .then((res) => {
            commit("dietItem", res.data);
            console.log(res.data);
          })
          .catch((err) => {
            commit("dietItem", null);
            console.log(err);
          })
          .finally(() => {
            payload.callback ? payload.callback() : false;
          });
      }, 1000);
    },
  },
});
