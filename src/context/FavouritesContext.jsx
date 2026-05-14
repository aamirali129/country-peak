import {
  createContext,
  useEffect,
  useReducer,
} from "react";

export const FavouritesContext =
  createContext();

const initialState = JSON.parse(
  localStorage.getItem("favourites")
) || [];

function favouritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state, action.payload];

    case "REMOVE_FAVOURITE":
      return state.filter(
        (country) =>
          country.cca3 !== action.payload
      );

    default:
      return state;
  }
}

function FavouritesProvider({ children }) {
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, dispatch }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;