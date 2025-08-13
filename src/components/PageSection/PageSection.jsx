import Button from "../Buttons/Buttons";

export default function PageSection({children, sectionTitle, buttonLink, buttonLabel, isGrid = true}) {
    
    return (
      <div className="page-section">
        <div className="title-section">
          <h2>{sectionTitle}</h2>
        </div>
        <div className="section-content">{children}</div>
      </div>
    );
    
}