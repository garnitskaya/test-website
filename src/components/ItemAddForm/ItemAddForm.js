import { useState } from "react";

import "./itemAddForm.scss";

const ItemAddForm = ({ onAdd }) => {
    const [label, setLabel] = useState("");

    const onChangeValue = (e) => {
        setLabel(e.target.value);
    };

    const onSubmitTask = (e) => {
        e.preventDefault();
        if (label.length > 0) {
            onAdd(label);
            setLabel("");
        }
    };

    return (
        <form className="add-form" onSubmit={onSubmitTask}>
            <input
                className="add-form__input"
                type="text"
                placeholder="Create new task"
                value={label}
                onChange={onChangeValue}
            />
            <button className="add-form__btn">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 1V11"
                        stroke="#9FA2B4"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M11 6L1 6"
                        stroke="#9FA2B4"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </form>
    );
};

export default ItemAddForm;
