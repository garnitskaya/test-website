import classNames from "classnames";
import "./button.scss";

const Button = ({ children, callback, type, dataToggle }) => {
    const btnClass = classNames({
        btn: true,
        btn__yellow: type === "low" || type === "urgent",
        btn__red: type === "high",
        btn__green: type === "normal" || type === "new",
        btn__default: type === "default",
    });

    return (
        <button onClick={callback} className={btnClass} data-toggle={dataToggle}>
            {children}
        </button>
    );
};

export default Button;
