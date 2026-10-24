import { useState } from 'react';
import { equipment, filters } from '../data/equipment.js';
import EquipmentCard from './EquipmentCard.jsx';

export default function Fleet() {
  const [active, setActive] = useState("all");
  return (<section className="catalog" id="fleet"><div className="container"><div className="section-head"><div><span className="eyebrow">OUR RENTAL FLEET</span><h2>Equipment for every<br/>kind of challenge.</h2></div><p>Explore our range of access platforms, lifting equipment and machinery. Tell us what you need and we'll help you find a suitable option.</p></div><div className="filters" role="group" aria-label="Filter equipment">{filters.map((filter) => <button key={filter.id} className={active === filter.id ? "filter active" : "filter"} onClick={() => setActive(filter.id)}>{filter.label}</button>)}</div><div className="cards" id="cards">{equipment.filter(item => active === "all" || item.category === active).map(item => <EquipmentCard key={item.name} item={item} />)}</div><p style={{"marginTop": "26px", "fontSize": "12px"}}>Equipment specifications and availability should be confirmed directly with VerticalZA before hire.</p></div></section>);
}
