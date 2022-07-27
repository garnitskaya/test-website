import React from "react";
import ItemCard from "../itemCard/ItemCard";

import "./activityCards.scss";

const ActivityCards = ({
    activeUsers = 60,
    onlineUsers = 16,
    filteredUsers = 43,
    bannedUsers = 64,
}) => {
    const cards = [
        { name: "Active", quantity: activeUsers },
        { name: "Online", quantity: onlineUsers },
        { name: "Filtered", quantity: filteredUsers },
        { name: "Banned", quantity: bannedUsers },
    ];

    const renderItem = cards.map((card) => (
        <ItemCard key={card.name} {...card} />
    ));

    return <div className="cards">{renderItem}</div>;
};

export default ActivityCards;
