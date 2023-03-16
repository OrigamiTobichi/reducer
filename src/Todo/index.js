import logger from "./logger";
/*
    1.init state
    2.actions
    3.useReducer => define function nhận 2 đối số (state, ) note: chưa được gọi lần mounted
    4.dipatch(actions)
*/
import { useReducer, useRef } from "react";
//1.initState, dispatch
import reducer, { initState } from "./reducer";

//2.actions
import { setJob, addJob, editJob, removeJob, removeAllJob } from "./actions.js";

//4.
function Reducer() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const inputRef = useRef();

  const { job, jobs } = state;
  const handleAddJob = () => {
    job && dispatch(addJob(job));
    job && dispatch(setJob(""));
    inputRef.current.focus();
  };

  const handleEditJob = (index) => {
    job && dispatch(editJob(job, index));
    job && dispatch(setJob(""));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllJob(jobs));
  };

  return (
    <div className="container">
      <h1>TO DO</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter to do..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button style={{ marginLeft: 10 }} onClick={handleAddJob}>
        Add
      </button>
      <button style={{ marginLeft: 10 }} onClick={handleRemoveAll}>
        Remove All
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(removeJob(index))}>&times;</span>
            <button
              style={{ marginLeft: 20 }}
              onClick={() => {
                handleEditJob(index);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reducer;
