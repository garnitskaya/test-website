import BlockCards from "../../common/blockCards/BlockCards";

import "./unresolvedTickets.scss";

const UnresolvedTickets = () => {
    const data = [
        { name: "Waiting on Feature Request", quantity: 4238 },
        { name: "Awaiting Customer Response", quantity: 1005 },
        { name: "Awaiting Developer Fix", quantity: 914 },
        { name: "Pending", quantity: 281 },
        { name: "Pending 1", quantity: 282 },
    ];

    const renderItem = data.map(({ name, quantity }) => (
        <li key={name} className="block-cards__item">
            {name}
            <span>{quantity}</span>
        </li>
    ));

    return (
        <BlockCards
            title="Unresolved tickets"
            subtitle="Group:"
            descr="Support"
            btnTitle="View details"
        >
            {renderItem}
        </BlockCards>
    );
};

export default UnresolvedTickets;
