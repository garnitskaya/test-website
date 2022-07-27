import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../../services/serviceData';
import HeaderBlock from './../../components/headerBlock/HeaderBlock';
import ActivityCards from './../../components/activityCards/ActivityCards';
import UserBlock from '../../components/userBlock/UserBlock';

const UserPage = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { getUser } = serviceData();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        setLoading(true);
        getUser(id)
            .then(onDataLoaded)
            .catch(onError)
    }

    const onDataLoaded = (data) => {
        setData(() => data);
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const errorMessage = error ? <div className='title-error'>Error</div> : null;
    const spinner = loading ? <div className='title'>Loading...</div> : null;
    const content = !(loading || error || !data) ? <UserBlock {...data} /> : null;

    return (
        <>
            <HeaderBlock />
            <ActivityCards />
            {errorMessage}
            {spinner}
            {content}
        </>
    );
};

export default UserPage;