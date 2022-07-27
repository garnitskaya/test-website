import "./customCheckbox.scss";

const CustomCheckbox = ({ children, done, onChange, dataToggle }) => {
    return (
        <div className="checkbox">
            <label className="checkbox__item">
                <input
                    value={done}
                    type="checkbox"
                    checked={done}
                    onChange={onChange}
                    data-toggle={dataToggle}
                />
                <span></span>
                {children}
            </label>
        </div>
    );
};

export default CustomCheckbox;
