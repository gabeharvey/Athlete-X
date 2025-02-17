import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import '../App.css';

function Bubble() {
return (
    <Sticky className="sticky">
    <Link to="/contact" className="bubble">
        Join <span className="tilt-prism-2">Athlete X Elite</span> Family
    </Link> 
    </Sticky>
);
}

export default Bubble;