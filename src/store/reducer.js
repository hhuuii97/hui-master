const defaultState = {
  dataList: []
};
export default (state = defaultState, action) => {
  if (action.type === "DATA_LIST") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.dataList = action.dataList;
    return newState;
  }
  return state;
};
