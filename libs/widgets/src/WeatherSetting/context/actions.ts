
export function updateSubmitAction(dispatch: any, submit: any) {
  dispatch({ type: 'UPDATE_SUBMIT', payload: submit });
}


export function updateMessageAction(dispatch: any, message: any) {
  dispatch({ type: 'UPDATE_GLOBAL_MESSAGE', payload: message });
}

export function resetErrorMessageAction(dispatch: any) {
  updateMessageAction(dispatch, null);
}


