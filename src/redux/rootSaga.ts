import {all, fork, type AllEffect, type ForkEffect} from "redux-saga/effects";
import groupSagas from "./groups/groups.saga";
import usersSagas from "./users/users.saga";

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(groupSagas)]);
  yield all([fork(usersSagas)]);
}
