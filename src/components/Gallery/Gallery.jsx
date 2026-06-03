import {
  useReducer,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

import useFetchPhotos from "../../hooks/useFetchPhotos";

import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import GalleryGrid from "./GalleryGrid";

import {
  favouritesReducer,
} from "../../reducers/favouritesReducer";

import {
  getFavourites,
  saveFavourites,
} from "../../utils/localStorage";

const Gallery = () => {
  const {
    photos,
    loading,
    error,
  } = useFetchPhotos();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [favourites, dispatch] =
    useReducer(
      favouritesReducer,
      [],
      getFavourites
    );

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleSearch =
    useCallback((e) => {
      setSearchTerm(e.target.value);
    }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );
  }, [photos, searchTerm]);

  const toggleFavourite = (id) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: id,
    });
  };

  if (loading) return <Spinner />;

  if (error)
    return (
      <ErrorMessage message={error} />
    );



  return (
    <div className="space-y-6">
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />

      <GalleryGrid
        photos={filteredPhotos}
        favourites={favourites}
        toggleFavourite={
          toggleFavourite
        }
      />
    </div>
  );
};

export default Gallery;