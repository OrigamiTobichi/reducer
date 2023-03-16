export default function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("prev-state :", prevState);
    console.log("action: ", action);
    const newState = reducer(prevState, action);
    console.log("new-state :", newState);
    console.groupEnd();

    return newState;
  };
}
