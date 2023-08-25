import { useReducer } from 'react'
import type { Dispatch } from 'react'
import type { Sub } from '../types'

const INITIAL_STATE = {
  nick: '',
  months: 0,
  avatar: '',
  description: ''
}

interface FormState {
  inputVlues: Sub
}

type ReducerActions = {
  type: 'change_value'
  payload: {
    inputName: string
    inputValue: string
  }
} | {
  type: 'clear'
}

const reducer = (state: FormState['inputVlues'], action: ReducerActions): FormState['inputVlues'] => {
  switch (action.type) {
    case 'change_value': {
      const { inputName, inputValue } = action.payload

      return {
        ...state,
        [inputName]: inputValue
      }
    }
    case 'clear':
      return INITIAL_STATE
    // default:
    //   return state
  }
}

const useNewSub = (): [Sub, Dispatch<ReducerActions>] => {
  return useReducer(reducer, INITIAL_STATE)
}

export default useNewSub
