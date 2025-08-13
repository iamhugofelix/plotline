import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";


export default function StarRating ({rating}) {

    console.log(rating);
    const roundRating = Math.round(rating) / 2 
    const stars = []

    for (let i = 1; i < 5; i++) {
      if (roundRating >= i) {
        stars.push(<FaStar />);
      } else if ((roundRating >= i - 0.5)) {
        stars.push(<FaStarHalf />);
      } 
    }
    
    return (
      <div className="star-rating">
        <div className="stars">{stars}</div>
        <span className="rating small">{roundRating}</span>
      </div>
    );
}
