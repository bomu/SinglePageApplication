export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_DATA_FAILED = 'RECEIVE_DATA_FAILED'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const requestData = () => ({
  type: REQUEST_DATA
})
export const receiveDataSuccess = dispInformations => ({
  type: RECEIVE_DATA_SUCCESS,
  dispInformations,
})
export const receiveDataFailed = () => ({
  type: RECEIVE_DATA_FAILED
})
export const openModal = id => ({
  type: OPEN_MODAL,
  id,
})
export const closeModal = () => ({
  type: CLOSE_MODAL,
})