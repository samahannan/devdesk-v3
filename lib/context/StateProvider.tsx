import { Dispatch, createContext, useContext, useReducer } from "react";
import { Status } from "../types";

interface State {
  showNudge: Status | "";
}

type ActionTypes = "SHOW_NUDGE" | "HIDE_NUDGE";
// Define the action types
type Action = { type: ActionTypes; payload: any };

interface StateContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

// Define the initial state
const initialState: State = {
  showNudge: "",
};
// Create a context to hold the state
const StateContext = createContext<StateContextProps>({
  state: initialState,
  dispatch: () => {},
});

// Define the reducer function to handle state transitions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SHOW_NUDGE":
      return { ...state, showNudge: action.payload };
    case "HIDE_NUDGE":
      return { ...state, showNudge: action.payload };
    default:
      return state;
  }
};

// Custom hook to use the state context
export const useGlobalState = () => useContext(StateContext);

// Provider component
export const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
