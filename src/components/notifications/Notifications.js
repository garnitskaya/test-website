import { useState } from "react";
import "./notifications.scss";

const Notifications = () => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className={`notifications ${isActive ? "active" : ""}`}>
            <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.99999 16C8.10374 16 8.99905 15.1047 8.99905 14H5.00093C5.00093 15.1047 5.89624 16 6.99999 16ZM13.7309 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.99937 1.65125V1C7.99937 0.447812 7.55187 0 6.99999 0C6.44812 0 6.00062 0.447812 6.00062 1V1.65125C3.70499 2.12812 2.00249 4.07188 2.00249 6.5C2.00249 9.69687 0.872804 10.6728 0.269054 11.3216C0.0815536 11.5231 -0.00157141 11.7641 -8.9117e-06 12C0.00342859 12.5125 0.405616 13 1.00312 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9184 11.5228 13.7309 11.3216Z"
                    fill="#C5C7CD"
                />
            </svg>
        </div>
    );
};

export default Notifications;
