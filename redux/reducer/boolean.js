// ========== Boolean

const initialState = {
  value: null,
};

const booleanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOLEAN': {
      return {
        ...state,
        value: !state.value,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default booleanReducer;
