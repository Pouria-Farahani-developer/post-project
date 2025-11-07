
export const initialStateValue: any = {
  table: {
    submit: {
      weatherLoading:false,
      weatherJson:null
    },
  },
  message: null,
};

export const reducer = (state: any, action: any): any  => {
  switch (action.type) {
    case 'UPDATE_GLOBAL_MESSAGE': {
      state.message = action.payload;
      return;
    }

    case 'UPDATE_SUBMIT': {
      state.table.submit = { ...state.table.submit, ...action.payload };
      return;
    }


    default:
      throw new Error(`this action type is not supported => ${action['type']}`);
  }
};
