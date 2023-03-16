import { SET_JOB, ADD_JOB, EDIT_JOB, REMOVE_JOB, REMOVE_ALL_JOB } from "./contants.js";

export function setJob(payload) {
  return {
    payload,
    type: SET_JOB,
  };
}
export function addJob(payload) {
  return {
    payload,
    type: ADD_JOB,
  };
}

export function removeJob(payload) {
  return {
    payload,
    type: REMOVE_JOB,
  };
}

export function editJob(payload, index) {
  return {
    key: index,
    payload,
    type: EDIT_JOB,
  };
}
export function removeAllJob(payload) {
  return {
    payload,
    type: REMOVE_ALL_JOB,
  };
}
