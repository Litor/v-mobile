import api from '../api'
import * as types from './types'

export const changeStyleMode = ({ dispatch }) => {
  dispatch(types.CHANGE_STYLE_MODE)
}

//getApps
export const getApps = ({ dispatch }) => {
  api.getApps().then(response => {
    if (!response.ok) {
      return dispatch(types.FAILURE_GET_APPS)
    }
    dispatch(types.SUCCESS_GET_APPS, { apps: response.data.data })
  }, response => {
    dispatch(types.FAILURE_GET_APPS)
  })
}