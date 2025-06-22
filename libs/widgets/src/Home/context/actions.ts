export function updateMessageAction(dispatch: any, message: any) {
  dispatch({ type: 'UPDATE_GLOBAL_MESSAGE', payload: message });
}

export function updateCurrentStep(dispatch: any, message: any) {
  dispatch({ type: 'UPDATE_STEP', payload: message });
}

export function updateDepositAction(dispatch: any, message: any) {
  dispatch({ type: 'UPDATE_DEPOSITS', payload: message });
}

export function completeDepositSelection(dispatch: any, message: any) {
  dispatch({ type: 'COMPLETE_DEPOSIT_SELECTION', payload: message });
}

export function deleteDepositAction(dispatch: any, message: any) {
  dispatch({ type: 'DELETE_DEPOSIT', payload: message });
}

export function clearDepositAction(dispatch: any) {
  dispatch({ type: 'CLEAR_DEPOSIT', payload: [] });
}

export function resetErrorMessageAction(dispatch: any) {
  updateMessageAction(dispatch, null);
}

export function updateVisitorInfoAction(dispatch: any, visitorInfo: any) {
  dispatch({ type: 'UPDATE_VISITOR_INFO', payload: visitorInfo });
}

export function addBeneficiaryAction(dispatch: any, beneficiary: any) {
  dispatch({ type: 'ADD_BENEFICIARY', payload: beneficiary });
}

export function deleteBeneficiaryAction(dispatch: any, uniqueIdentifier: any) {
  dispatch({ type: 'DELETE_BENEFICIARY', payload: uniqueIdentifier });
}

export function editBeneficiaryAction(dispatch: any, beneficiary: any) {
  dispatch({ type: 'EDIT_BENEFICIARY', payload: beneficiary });
}

export function addProductIdAction(dispatch: any, productId: any) {
  dispatch({ type: 'ADD_PRODUCT_ID', payload: productId });
}

export function addDepositIdAction(dispatch: any, depositId: any) {
  dispatch({ type: 'ADD_DEPOSIT_ID', payload: depositId });
}
