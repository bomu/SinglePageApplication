import { combineReducers } from 'redux'
import { 
  REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED,
  OPEN_MODAL, CLOSE_MODAL,
} from './actions'

const initialState = {
  informations: {
    isFetching: false,
    isShow: false,
    dispInformations: [
      {
        id: '',
        image_thumbnail: '',
        image_main: '',
        title: '',
        body: '',
        published_at: '',
      }
    ],
    selectInformation: [
      {
        id: '',
        image_thumbnail: '',
        image_main: '',
        title: '',
        body: '',
        published_at: '',
      }
    ]
  }
}

const informationsReducer = (state = initialState.informations, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_DATA_SUCCESS:
      action.dispInformations.map((elem, index) => {
        elem['id'] = index
      })
      return {
        ...state,
        isFetching: false,
        dispInformations: action.dispInformations,
      }
    case RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false
      }
    case OPEN_MODAL:
      const selState = state.dispInformations.filter(t => t.id === action.id)
      return Object.assign({},
        ...state,
        state,
        {
          isShow: true,
          selectInformation: selState,
        }
      )
    case CLOSE_MODAL:
      return {
        ...state,
        isShow: false
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  informations: informationsReducer
})

export default rootReducer