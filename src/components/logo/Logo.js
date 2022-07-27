import logo from "../../resources/icon/logo.svg";

import "./logo.scss";

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__icon" src={logo} alt="logo" />
            <span className="logo__text">Dashboard </span>
        </div>
    );
};

export default Logo;
