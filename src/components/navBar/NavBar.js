import { useState } from "react";
import Logo from "./../logo/Logo";
import Icon from "../../resources/icon";
import Link from "../navBarItem/NavBarItem";
import Hamburger from "./../hamburger/Hamburger";

import "./navBar.scss";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onToggleMenu = () => {
        setOpenMenu((openMenu) => !openMenu);
    };

    const onCloseMenu = () => {
        setOpenMenu(false);
    };

    const links = [
        { name: "Overview", Icon: Icon.Overview, slug: "overview" },
        { name: "Users", Icon: Icon.Users, slug: "users" },
        { name: "Ideas", Icon: Icon.Ideas, slug: "ideas" },
        { name: "Contacts", Icon: Icon.Contacts, slug: "contacts" },
        { name: "Agents", Icon: Icon.Agents, slug: "agents" },
        { name: "Articles", Icon: Icon.Articles, slug: "articles" },
        { name: "Settings", Icon: Icon.Settings, divider: true, slug: "settings" },
        { name: "Subscription", Icon: Icon.Subscription, slug: "subscription" },
    ];

    const renderItem = links.map((link) => <Link key={link.name} {...link} />);

    return (
        <nav className={`nav-bar ${openMenu ? "active" : ""}`}>
            <Logo />
            <ul
                className={`nav-bar__list ${openMenu ? "active" : ""}`}
                onClick={onCloseMenu}
            >
                {renderItem}
            </ul>
            <Hamburger onOpenMenu={onToggleMenu} openMenu={openMenu} />
        </nav>
    );
};

export default NavBar;
