import { useState } from "react";
import "./searchPanel.scss";

const SearchPanel = () => {
    const [value, setValue] = useState("");
    const [isActive, setIsActive] = useState(false);

    const onActiveSearchPanel = () => {
        setIsActive(true);
    };

    const onBlurSearchPanel = () => {
        value.length > 0 ? setIsActive(true) : setIsActive(false);
    };

    const onUpdateSearch = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="search-panel">
            <input
                value={value}
                onBlur={onBlurSearchPanel}
                onChange={onUpdateSearch}
                className={`search-panel__input ${isActive ? "active" : ""}`}
                type="text"
            />
            <svg
                onClick={onActiveSearchPanel}
                className="search-panel__icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" strokeWidth="1.5" />
                <path
                    d="M11 11L15 15"
                    stroke="#C5C7CD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default SearchPanel;
