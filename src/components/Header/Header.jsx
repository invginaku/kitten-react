import { Link } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation.jsx';

import logo from '../../images/logo.png';

function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} className="header__logo" alt="логотип киса" />
            </Link>
            <Navigation />
        </header>
    );
}

export default Header;
