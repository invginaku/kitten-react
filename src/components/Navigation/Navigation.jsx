import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {

    return(
        <>
            <nav className="navigation">
                <ul className='navigation__links'>
                    <li className="navigation__list-item">
                        <NavLink
                            className="navigation__page-link"
                            activeClassName="navigation__page-link_active"
                            to="/"
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className="navigation__list-item">
                        <NavLink
                            className="navigation__page-link"
                            activeClassName="navigation__page-link_active"
                            to="/saved-card"
                        >
                            Сохранённые карточки
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
