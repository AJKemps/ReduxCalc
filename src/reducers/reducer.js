// cases
const PRESS_NUM = 'PRESS_NUM';
const PRESS_EQ = 'PRESS_EQ';
const PRESS_CL = 'PRESS_CL';
const PRESS_OP = 'PRESS_OP';

// actions
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});
export const pressEquals = () => ({
  type: PRESS_EQ,
});

export const pressClear = () => ({
  type: PRESS_CL,
});

export const pressOp = (op) => ({
  type: PRESS_OP,
  payload: op,
});

// initial state object
const initialState = { stack: ['0'], op: null, replace: false };

// reducer
export const reducer = (state = initialState, { type, payload }) => {
  // grab last item in the stack
  let last = state.stack.length - 1;
  switch (type) {
    // case for when numbers are pressed
    case PRESS_NUM:
      if (state.stack[last] === '0') {
        return { ...state, stack: [...state.stack, payload] };
      } else if (state.replace === true) {
        return {
          ...state,
          replace: false,
          stack: [...state.stack, payload],
        };
      } else {
        return {
          ...state,
          stack: [...state.stack, state.stack[last] + payload],
        };
      }
    // case for when the equals sign is pressed
    case PRESS_EQ:
      // calculate result
      let result = eval(
        `${state.stack[last - 1]}${state.op}${state.stack[last]}`
      );
      return { ...state, stack: [...state.stack, result], replace: true };
    // case for when the clear sign is pressed
    case PRESS_CL:
      if (state.stack[last] === '0') {
        return { stack: [...state.stack, '0'], op: null };
      } else {
        return { ...state, stack: [...state.stack, '0'] };
      }

    // case for when an operator sign is pressed
    case PRESS_OP:
      return {
        ...state,
        op: payload,
        replace: true,
      };
    // default state returned in case no cases are met
    default:
      return state;
  }
};
