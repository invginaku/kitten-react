import './Header.css';

import logo from '../../images/logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="логотип киса" />
        </header>
    );
}

export default Header;