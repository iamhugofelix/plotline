export default function FullWidthSection ({sectionTitle, children}) {
  return (
    <div className="fw-section">
      <h3 className="section-title">{sectionTitle}</h3>
      <div className="fw-section-scroll-wrapper">
        <div className="fw-cards">
            {children}
        </div>
      </div>
    </div>
  );
}