import StarRating from "../StarRating/StarRating";

export default function Card({cardPoster, cardTitle, cardYear, cardRating}) {
    
    return (
      <div className="card">
        <img
          src={cardPoster}
          alt={`${cardTitle} Poster`}
          className="card-poster"
        />
        <div className="card-info">
          <h3 className="h6">{cardTitle}</h3>
          <span className="p">{cardYear}</span>
        </div>
        <div className="card-rating-wrapper">
          <StarRating rating={cardRating} />
        </div>
      </div>
    );
}