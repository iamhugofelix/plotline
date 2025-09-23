import StarRating from "../StarRating/StarRating";

export default function GenreCard({
  genreImage,
  genreName,
}) {
  return (
    <div
      className="genre-card"
      style={{ backgroundImage: `url(${genreImage})` }}
    >
      <div className="genre-card-content">
        <h3 className="h3">{genreName}</h3>
      </div>
    </div>
  );
}
