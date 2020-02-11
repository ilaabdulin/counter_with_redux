import * as types from "./types";

const initialState = {
  counts: 10
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT:
      return {
        ...state,
        counts: state.counts + 1
      };

    case types.DELETE_COUNT:
      return {
        ...state,
        counts: state.counts - 1
      };

    default:
      return state;
  }
};
