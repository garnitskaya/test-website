import { avatars } from "../../resources/img";

import "./userBlock.scss";

const UserBlock = ({
    id,
    name,
    catchPhrase,
    phone,
    website,
    city,
    street,
    suite,
    zipcode,
}) => {
    return (
        <div className="user-block">
            <div className="user-block__wrap">
                <div className="user-block__avatar">
                    <div className="user-block__photo">
                        <div>
                            <img src={avatars[id - 1]} alt="" />
                        </div>
                    </div>
                    <h2 className="user-block__name">{name}</h2>
                    <div className="user-block__catch-phrase">{catchPhrase}</div>
                </div>
                <div className="user-block__descr">
                    <div className="user-block__subtitle">
                        Address
                        <span>
                            {street}, {suite}
                            <br />
                            {city}, {zipcode}
                        </span>
                    </div>
                    <div className="user-block__subtitle">
                        Phone
                        <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                    <div className="user-block__subtitle">
                        Website
                        <a href={website} className="user-block__link">
                            {website}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBlock;
