import PhotoCard from "../PhotoCard/PhotoCard";

const GalleryGrid = ({
  photos,
  favourites,
  toggleFavourite,
}) => {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
    "
    >
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(
            photo.id
          )}
          toggleFavourite={
            toggleFavourite
          }
        />
      ))}
    </div>
  );
};

export default GalleryGrid;