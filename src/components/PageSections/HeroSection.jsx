import Pill from "../Pills/Pills";
import StarRating from "../StarRating/StarRating";

export default function HeroSection({heroTitle, heroDescription, heroYear, heroRating, heroImage, isFeatured = false, heroCategories, children}) {

    return (
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${heroImage})`,
        }}
      >
        <div className="hero-content">
          <div className="hero-pills">
            {isFeatured && (
              <Pill type="red" size="md">
                Featured
              </Pill>
            )}
            {heroCategories}
          </div>
          <h1>{heroTitle}</h1>
          <p>{heroDescription}</p>

          {heroRating || heroYear ? <div className="hero-metadata">
            <span className="hero-year">{heroYear}</span>
            <span>&middot;</span>
            <StarRating rating={heroRating} />
          </div> : '' }
          <div className="hero-children">{children}</div>
        </div>
      </div>
    );
}