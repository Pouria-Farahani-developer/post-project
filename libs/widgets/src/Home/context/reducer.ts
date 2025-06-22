export const initialStateValue = {
  deposits: [],
  message: null,
  depositId: null,
  productId: null,
  visitorInformation: {
    customerType: null,
    customerNumber: null,
    customerName: '',
    uniqueIdentifier: null,
    isConfirmed: false,
    beneficiaryStockPercent: null,
    withdrawal: false,
    sendSms: false,
    customerMobile: null,
    depositCustomerRelationType: null,
    depositOwnerWithCustomerRelationship: null,
  },
  beneficiaries: [],
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_GLOBAL_MESSAGE': {
      state.message = action.payload;
      return;
    }

    case 'UPDATE_VISITOR_INFO': {
      state.visitorInformation = {
        ...state.visitorInformation,
        ...action.payload,
      };
      return;
    }

    case 'ADD_PRODUCT_ID': {
      state.productId = action.payload;
      return;
    }

    case 'ADD_DEPOSIT_ID': {
      state.depositId = action.payload;
      return;
    }
    case 'UPDATE_STEP': {
      state.currentStep = action.payload;
      return;
    }
    default:
      throw new Error(`this action type is not supported => ${action.type}`);
  }
};
