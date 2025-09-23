import StarRating from "../StarRating/StarRating";

export default function HeroSection({heroTitle, heroDescription, heroRating, heroImage}) {

    return (
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${heroImage})`,
        }}
      >
        <div className="hero-content">
            <h1>{heroTitle}</h1>
            <p>{heroDescription}</p>
            <StarRating rating={heroRating} />
        </div>
      </div>
    );
}