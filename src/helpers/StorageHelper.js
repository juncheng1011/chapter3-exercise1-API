import { AsyncStorage } from 'react-native';


/**
 * 
 * {String}name
 * {bool}isLogin
 * {number} accountInfoStatus 0 is none, 1 is verifying, 2 is error, 3 is verified
 */
export const setMySetting = (key, value) => AsyncStorage.setItem(key, value)
export const getMySetting = (key) => AsyncStorage.getItem(key)
