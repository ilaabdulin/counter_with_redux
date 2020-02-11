import * as types from "./types";

export const addCount= () => {
  return ({
    type: types.ADD_COUNT
  });
}


export const deleteCount = () => ({
  type: types.DELETE_COUNT
});
