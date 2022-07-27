import LoginBlock from "./../loginBlock/LoginBlock";
import Notifications from "./../notifications/Notifications";
import SearchPanel from "../searchPanel/SearchPanel";

import "./headerBlock.scss";

const HeaderBlock = () => {
    return (
        <div className="header">
            <h1 className="header__title">Users</h1>
            <SearchPanel />
            <Notifications />
            <div className="divider"></div>
            <LoginBlock />
        </div>
    );
};

export default HeaderBlock;
