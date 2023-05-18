import { types } from "../types/userTypes";

export const userChangeName = (name) => ({
    type: types.CHANGE_NAME,
    payload: name
})

export const userChangeUserName = (userName) => ({
    type: types.CHANGE_USERNAME,
    payload: userName
})

export const userChangePassword = (password) => ({
    type: types.CHANGE_PASSWORD,
    payload: password
})

export const userReset = () => ({
    type: types.RESET
})