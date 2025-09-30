import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";


const getLocalStorage = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const initialState = {
  watchlist: getLocalStorage("watchlist"),
  watched: getLocalStorage("watched"),
};


export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
useEffect(() => {
  localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  localStorage.setItem("watched", JSON.stringify(state.watched));
}, [state]);
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