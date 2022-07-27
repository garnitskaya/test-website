import CustomCheckbox from "../../common/customCheckbox/CustomCheckbox";
import Button from "./../button/Button";

import "./itemTask.scss";

const ItemTask = ({ name, urgent, done, onToggleProp }) => {
    const typeBtn = done ? "default" : urgent ? "urgent" : "new";

    return (
        <div className="task">
            <CustomCheckbox dataToggle="done" done={done} onChange={onToggleProp}>
                {name}
            </CustomCheckbox>
            <Button dataToggle="urgent" callback={onToggleProp} type={typeBtn}>
                {typeBtn}
            </Button>
        </div>
    );
};

export default ItemTask;
