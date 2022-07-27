const serviceData = () => {
    const apiBase = "https://jsonplaceholder.typicode.com/users";

    const getResourse = async (
        url,
        method = "GET",
        body = null,
        headers = { "Content-Type": "application/json" }
    ) => {
        const res = await fetch(url, { method, body, headers });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }
        return await res.json();
    };

    const getUsers = async () => {
        const res = await getResourse(apiBase);
        return await res.map(transformData);
    };

    const getUser = async (id) => {
        const res = await getResourse(`${apiBase}/${id}`);
        return await transformData(res);
    };

    const transformData = (user) => {
        return {
            id: user.id,
            name: user.name,
            companyName: user.company.name,
            companyBs: user.company.bs,
            catchPhrase: user.company.catchPhrase,
            email: user.email,
            website: user.website,
            city: user.address.city,
            street: user.address.street,
            suite: user.address.suite,
            zipcode: user.address.zipcode,
            geo: {
                latitude: user.address.geo.lat,
                longitude: user.address.geo.lng,
            },
            phone: user.phone,
        };
    };

    return { getUsers, getUser };
};

export default serviceData;
