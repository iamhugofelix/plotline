export default function PageSection({children, sectionTitle, horScroll = false}) {

    
    return (
      <div
        className={`page-section`}
        style={horScroll ? { paddingRight: 0 } : {}}
      >
        <div className="title-section">
          <h2>{sectionTitle}</h2>
        </div>
        {children}
      </div>
    );
    
}