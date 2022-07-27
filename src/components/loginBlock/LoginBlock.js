import avatar from "../../resources/img/avatar.png";

import "./loginBlock.scss";

const LoginBlock = ({ name = "Jones Ferdinand" }) => {
    return (
        <div className="login-block">
            <span className="login-block__name">{name}</span>
            <div className="login-block__img">
                <div>
                    <img src={avatar} alt="name" />
                </div>
            </div>
        </div>
    );
};

export default LoginBlock;
