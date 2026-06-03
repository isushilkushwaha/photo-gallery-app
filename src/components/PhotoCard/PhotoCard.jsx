const PhotoCard = ({
  photo,
  isFavourite,
  toggleFavourite,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="h-64 w-full object-cover"
      />

      <div className="flex items-center justify-between p-4">
        <p className="font-medium">
          {photo.author}
        </p>

        <button
          onClick={() =>
            toggleFavourite(photo.id)
          }
          className="text-2xl"
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;