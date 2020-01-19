export interface IState {
  count: number;
}

export interface IRootState {
  counter: IState;
}

export interface IGetters {
  double: number;
  expo2: number;
  expo: (amount: number) => number;
}

export interface IRootGetters {
  "counter/double": IGetters["double"];
  "counter/expo2": IGetters["expo2"];
  "counter/expo": IGetters["expo"];
}

export interface IMutations {
  setCount: { amount: number };
  multi: number;
  increment: void;
}

export interface IActions {
  asyncSetCount: { amount: number };
  asyncMulti: number;
  asyncIncrement: void;
}
