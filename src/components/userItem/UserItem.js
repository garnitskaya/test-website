import { usePosition } from "./../../hooks/usePosition";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { getDistance } from "./../../utils/getDistance";
import { avatars } from "../../resources/img";

import "./userItem.scss";

const User = ({
    id,
    name,
    city,
    companyName,
    companyBs,
    email,
    website,
    geo,
    widthBlock
}) => {
    const { position, error } = usePosition();

    let type;

    const distance = getDistance(position, geo);
    if (distance < 9000) {
        type = "low";
    } else if (distance >= 9000 && distance <= 12000) {
        type = "normal";
    } else {
        type = "high";
    }

    const newEmail = widthBlock <= 1000 && email.length > 15 ? email.slice(0, 15) + "..." : email;

    return (
        <div className={`user ${widthBlock <= 1000 ? 'user-improved' : ''}`}>
            <Link to={`${id}`} className="user__block">
                <div className="user__photo">
                    <img src={avatars[id - 1]} alt={name} />
                </div>
                <div className="user__items">
                    <div className="user__item-top">{name}</div>
                    <div className="user__item-bottom">{city}</div>
                </div>
            </Link>
            <div className="user__items items">
                <div className="user__item-top">{companyName}</div>
                <div className="user__item-bottom">{companyBs}</div>
            </div>
            <div className="user__items items">
                <a data-description={email} href={`mailto:9972211@gmail.com`} className="user__item-top">
                    {newEmail}
                </a>
                <a href={website} target="_blank" rel="noreferrer" className="user__item-bottom">
                    {website}
                </a>
            </div>
            <Button type={type}>{type}</Button>

            <div className="user__more">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default User;
