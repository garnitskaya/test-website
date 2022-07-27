import HeaderBlock from "../../components/headerBlock/HeaderBlock";
import ActivityCards from "../../components/activityCards/ActivityCards";
import Users from "../../components/users/Users";
import UnresolvedTickets from "../../components/unresolvedTickets/UnresolvedTickets";
import Tasks from "../../components/tasks/Tasks";

import "./usersPage.scss";

const UsersPage = () => {
    return (
        <>
            <HeaderBlock />
            <ActivityCards />
            <Users />
            <div className="wrap">
                <UnresolvedTickets />
                <Tasks />
            </div>
        </>
    );
};

export default UsersPage;
