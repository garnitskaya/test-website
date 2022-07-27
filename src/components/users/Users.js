import { useEffect, useRef, useState } from "react";
import serviceData from "../../services/serviceData";
import SortBlock from "../sortBlock/SortBlock";
import UserItem from "../userItem/UserItem";

import "./users.scss";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { getUsers } = serviceData();
    const [widthBlock, setWidthBlock] = useState();
    const ref = useRef(null);

    const resizeHandler = () => {
        const { clientWidth } = ref.current || {};
        setWidthBlock(clientWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [widthBlock]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        setLoading(true);
        getUsers().then(onListLoaded).catch(onError);
    };

    const onListLoaded = (data) => {
        setUsers(data);
        setLoading(false);
    };

    const onError = () => {
        setLoading(false);
        setError(true);
    };

    const categories = ["User details", "Company name", "Email", "Distance"];
    const renderItem = users.map((user) => <UserItem key={user.id} {...user} widthBlock={widthBlock} />);

    return (
        <div ref={ref} className="users">
            <SortBlock />

            {loading && <div className="title">Loading...</div>}
            {error && <div className="title-error">Error</div>}

            <ul className={`users__category ${widthBlock <= 1000 ? 'users__category-improved' : ''}`}>
                {categories.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>

            <div className="users__block">{renderItem}</div>
        </div>
    );
};

export default Users;
