import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

export default function NavBar() {
    return (
        <nav
            className="fixed top-0 flex w-screen flex-row items-center justify-between px-5 py-3 shadow-md shadow-neutral-900"
            style={{ backgroundColor: '#3d3c40' }}
        >
            <Link to="/">
                <img
                    src={logo}
                    alt="popcorn-logo"
                    id="logo-nav"
                    className="h-8"
                />
            </Link>
            <Link to="/">
                <span className="text-red-600">Popcorn</span>{' '}
                <span className="text-yellow-500">quizz</span> generator
            </Link>
        </nav>
    );
}
