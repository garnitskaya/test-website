import { NavLink } from "react-router-dom";

import "./navBarItem.scss";

const NavBarItem = ({ name, Icon, divider, slug }) => {
    return (
        <>
            {divider && <div className="divider" />}
            <li className="item">
                <NavLink
                    to={slug}
                    className={(navData) =>
                        navData.isActive ? "item__link active" : "item__link"
                    }
                >
                    <Icon />
                    {name}
                </NavLink>
            </li>
        </>
    );
};

export default NavBarItem;
