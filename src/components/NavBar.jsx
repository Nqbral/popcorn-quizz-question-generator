import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-between p-2 align-middle shadow-md">
            <Link to="/">
                <img src={logo} alt="popcorn-logo" id="logo-nav" />
            </Link>
            <Link to="/">
                <span className="accent-color">Popcorn</span>{' '}
                <span className="primary-color">quizz</span>
            </Link>
        </nav>
    );
}
