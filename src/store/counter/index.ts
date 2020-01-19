import { Getters, Mutations, Actions } from "../types";
import {
  IState,
  IGetters,
  IMutations,
  IActions,
  IRootState,
  IRootGetters
} from "./types";

const state: IState = {
  count: 0
};

const getters: Getters<IState, IGetters> = {
  double(state, getters) {
    console.log(getters.expo2);
    return state.count * 2;
  },
  expo2(state) {
    return state.count ** 2;
  },
  expo(state) {
    return amount => state.count ** amount;
  }
};

const mutations: Mutations<IState, IMutations> = {
  setCount(state, payload) {
    state.count = payload.amount;
  },
  multi(state, payload) {
    state.count = state.count * payload;
  },
  increment(state) {
    state.count++;
  }
};

const actions: Actions<
  IState,
  IActions,
  IGetters,
  IMutations,
  IRootState,
  IRootGetters
> = {
  asyncSetCount(ctx, payload) {
    ctx.commit("setCount", { amount: payload.amount });
  },
  asyncMulti(ctx, payload) {
    ctx.commit("multi", payload);
  },
  asyncIncrement(ctx) {
    ctx.commit("increment");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
