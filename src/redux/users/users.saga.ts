import type {Effect, ForkEffect} from "redux-saga/effects";
import type {PayloadAction} from "@reduxjs/toolkit";

import {put, takeEvery, select} from "redux-saga/effects";
import {usersActions} from "./usersSlice";
import {usersSelector} from "./users.selectors";

export function* watchDelete(action: PayloadAction<never>): Generator<Effect, void> {
  try {
    const id = action.payload;
    yield put(usersActions.delete(id));
  } catch (error) {
    yield put(usersActions.deleteError("Something went wrong deleting the user"));
  }
}

export function* watchCreate(action: PayloadAction<never>): Generator<Effect, void> {
  try {
    const {name, age} = action.payload;
    console.log(name);
    //Create an ID for the group based on name;
    const userInfo = {
      ...action.payload,
      id: `${name.toLowerCase().replaceAll(" ", "")}${age}`,
    };

    const {users} = yield select(usersSelector);
    const checkIfUserExists = users.some((user) => user.email === userInfo.email);
    console.log(checkIfUserExists);
    checkIfUserExists
      ? yield put(usersActions.createError("User Already Exists"))
      : yield put(usersActions.create(userInfo));
  } catch (error) {
    console.log(error);
    yield put(usersActions.createError("Something went wrong creating the user"));
  }
}

export function* watchUsersSagas(): Generator<ForkEffect, void> {
  yield takeEvery(usersActions.createRequest, watchCreate);
  yield takeEvery(usersActions.deleteRequest, watchDelete);
}

const usersSagas = watchUsersSagas;

export default usersSagas;
