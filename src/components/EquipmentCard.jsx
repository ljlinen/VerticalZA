export default function EquipmentCard({ item }) {
  return (
    <article className="card">
      <div className="card-visual">
        <span className="tag">{item.label}</span>
        <img className="equipment-img" src={item.imageUrl} alt={item.name} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="card-bottom">
          <span>RENTAL EQUIPMENT</span>
          <a href={item.detailsUrl} target="_blank" rel="noopener noreferrer" aria-label={`See ${item.name} on VerticalZA website`}>VIEW DETAILS ↗</a>
        </div>
      </div>
    </article>
  );
}
