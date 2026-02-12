export const SAMPLE_UPDATE = "[user] sample update";

export const SampleUpdate = () => {
  return { type: SAMPLE_UPDATE };
};

const initialState = { id: 0, username: "someguy" }

export const userReducer = (state = initialState , action) => {
  switch (action.type) {
    case SAMPLE_UPDATE:
      return { ...state, username: "updated 🙋‍♂️" };
    default:
      return state;
  }
};


