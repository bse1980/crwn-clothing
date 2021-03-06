import React from 'react';
import { Link } from 'react-router-dom';

// ReactComponent is special syntax in React for importing SVG
// see https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;