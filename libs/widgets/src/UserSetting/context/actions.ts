export function updateFiltersAction(dispatch: any, filters: any) {
  dispatch({ type: 'UPDATE_FILTERS', payload: filters });
}

export function updateSubmitAction(dispatch: any, submit: any) {
  dispatch({ type: 'UPDATE_SUBMIT', payload: submit });
}

export function updatePagination(dispatch: any, pagination: any) {
  dispatch({ type: 'UPDATE_PAGINATION', payload: pagination });
}

export function updateMessageAction(dispatch: any, message: any) {
  dispatch({ type: 'UPDATE_GLOBAL_MESSAGE', payload: message });
}

export function resetErrorMessageAction(dispatch: any) {
  updateMessageAction(dispatch, null);
}

// function handleError(dispatch: any, actionType: any, reason: any, extraPayload: any) {
//   const message = ApiUtil.getErrorMessage(reason);
//   dispatch({ type: actionType, payload: { message, ...extraPayload } });
//   return null;
// }
