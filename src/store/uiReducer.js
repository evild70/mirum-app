import * as t from './actionTypes';

export const uiState = {
    mainNavIsOpen: false
}

export const uiReducer = (state = uiState, action) => {

  switch (action.type) {

    case t.UI_TOGGLE_MAIN_NAV:
      return {
        ...state,
        mainNavIsOpen: !state.mainNavIsOpen
      }

    default:
      return state;

  }
}
