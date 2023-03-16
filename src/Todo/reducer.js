import { SET_JOB, ADD_JOB, EDIT_JOB, REMOVE_JOB, REMOVE_ALL_JOB } from "./contants.js";

export const initState = {
  job: "",
  jobs: JSON.parse(localStorage.getItem("jobs")) ?? [],
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case REMOVE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: [...newJobs],
      };
      break;
    case EDIT_JOB:
      const newJobs1 = [...state.jobs];
      newJobs1.splice(action.key, 1, action.payload);
      newState = {
        ...state,
        jobs: [...newJobs1],
      };
      break;
    case REMOVE_ALL_JOB:
      let newJobs2 = [...state.jobs];
      newJobs2 = [];
      newState = {
        ...state,
        jobs: [...newJobs2],
      };
      break;
    default:
      throw new Error("Invalid action.");
  }
  localStorage.setItem("jobs", JSON.stringify(newState.jobs));
  return newState;
};

export default reducer;
