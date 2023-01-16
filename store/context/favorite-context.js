import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addIdContextFn: (id) => {},
  removeIdContextFn: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteContextIds, setFavoriteContextIds] = useState(['']);
  const addIdContextFn = (id) => {
    setFavoriteContextIds((prevState) => [...prevState, id]);
  };
  const removeIdContextFn = (id) => {
    setFavoriteContextIds((prevState) =>
      prevState.filter((thisId) => thisId !== id)
    );
  };

  const ourValue = {
    ids: favoriteContextIds,
    addFavorite: addIdContextFn,
    removeFavorite: removeIdContextFn,
  };

  return (
    <FavoriteContext.Provider value={ourValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
