import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import '../App.css';

function Bubble() {
return (
    <Sticky className="sticky">
    <Link to="/contact" className="bubble">
    I'm interested!
    </Link> 
    </Sticky>
);
}

export default Bubble;