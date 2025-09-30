import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";



export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        Watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

// custom hook
export const useMovieContext = () => {
    return useContext(GlobalContext)
}