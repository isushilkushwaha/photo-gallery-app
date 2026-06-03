import { LOCAL_STORAGE_KEY } from "./constants";

export const saveFavourites = (data) => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(data)
  );
};

export const getFavourites = () => {
  const data = localStorage.getItem(
    LOCAL_STORAGE_KEY
  );

  return data ? JSON.parse(data) : [];
};