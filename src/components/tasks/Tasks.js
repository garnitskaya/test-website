import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlockCards from "./../../common/blockCards/BlockCards";
import ItemAddForm from "./../ItemAddForm/ItemAddForm";
import ItemTask from "./../itemTask/ItemTask";

import "./tasks.scss";

const Tasks = () => {
    const tasks = [
        { id: 1, name: "Finish ticket update", done: false, urgent: true },
        { id: 2, name: "Create new ticket example", done: false, urgent: false },
        { id: 3, name: "Awaiting Developer Fix", done: true, urgent: false },
    ];
    const [data, setData] = useState(tasks);

    const addItem = (name) => {
        const newItem = {
            name,
            done: false,
            urgent: false,
            id: uuidv4(),
        };
        setData((data) => [...data, newItem]);
    };

    const onToggleProp = (id, prop) => {
        setData((data) =>
            data.map((item) =>
                item.id === id ? { ...item, [prop]: !item[prop] } : item
            )
        );
    };

    const renderItem = data.map((tasks) => (
        <ItemTask
            onToggleProp={(e) =>
                onToggleProp(tasks.id, e.currentTarget.getAttribute("data-toggle"))
            }
            key={tasks.id}
            {...tasks}
        />
    ));

    return (
        <BlockCards title="Tasks" subtitle="Today" btnTitle="View all">
            <ItemAddForm onAdd={addItem} />
            <div className="task_reverse">{renderItem}</div>
        </BlockCards>
    );
};

export default Tasks;
