import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Counter from "./counter";

export default new Vuex.Store({
  modules: { Counter }
});
