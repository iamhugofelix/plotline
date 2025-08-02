export default function Section({children, sectionTitle, isGrid = true}) {
    
    return (
      <div className={`page-section ${isGrid ? 'grid' : 'flex-row'}`}>
        <h2>{sectionTitle}</h2>
        {children}
      </div>
    );
    
}