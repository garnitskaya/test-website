import "./itemCard.scss";

const ItemCard = ({ name, quantity }) => {
    return (
        <div className="card">
            <div className="card__name">{name}</div>
            <div className="card__quantity">{quantity}</div>
        </div>
    );
};

export default ItemCard;
