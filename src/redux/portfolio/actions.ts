import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { RootState } from "../store";

export const Adder = (amount: number): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.valueAdder(amount))
}}

export const ModeSwitcher = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.changeMode());
}}

export const LanguageSwitcher = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.changeLanguage());
}}


// SKILLS
export const skillsUpdater = (skill: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.skillsListUpdate(skill))
}}

export const skillSelector = (skill: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.selectedSkill(skill))
}}

export const projectsUpdater = (project: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.projectsListUpdate(project))
}}

export const projectSelector = (project: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.selectedProject(project))
}}

export const backgroundUpdater = (bgitem: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.backgroundListUpdate(bgitem))
}}

export const bgSelector = (bgitem: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.selectedBG(bgitem))
}}

export const authSetter = (isauth: boolean): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {return (dispatch) => {
    return dispatch(reducer.setIsAuth(isauth))
}}