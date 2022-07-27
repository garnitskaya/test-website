import { useState } from "react";
import "./blockCards.scss";

const BlockCards = ({ title, subtitle, descr, btnTitle, children }) => {
    const [isActive, setIsActive] = useState(false);

    const showAllItems = () => {
        setIsActive((isActive) => !isActive);
    };

    return (
        <div className={`cards-block ${isActive ? "active" : ""}`}>
            <div className="cards-block__header">
                <div>
                    <h3 className="cards-block__title">{title}</h3>
                    <div className="cards-block__subtitle">
                        {subtitle}
                        {descr ? <span>Support</span> : null}
                    </div>
                </div>
                <button className="cards-block__btn" onClick={showAllItems}>
                    {btnTitle}
                </button>
            </div>
            <ul className="cards-block__list">{children}</ul>
        </div>
    );
};

export default BlockCards;
