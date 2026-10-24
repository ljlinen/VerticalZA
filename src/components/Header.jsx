import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (<header><div className="container nav"><a className="logo" href="#home" aria-label="VerticalZA home">VERTICAL<span>ZA</span><span style={{"fontSize": "9px", "display": "block", "letterSpacing": "2.5px", "color": "#757a92"}}>ACCESS & LIFTING</span></a><nav className={menuOpen ? "links open" : "links"} id="navlinks" onClick={(event) => { if (event.target.closest("a")) setMenuOpen(false); }}><a href="#home">Home</a><a href="#fleet">Rental Fleet</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav><a className="btn" href="#contact">GET A QUOTE ↗</a><button className="menu" id="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button></div></header>);
}
