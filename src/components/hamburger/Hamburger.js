import "./hamburger.scss";

const Hamburger = ({ openMenu, onOpenMenu }) => {
    return (
        <div
            className={`hamburger ${openMenu ? "hamburger__active" : ""}`}
            onClick={onOpenMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;
