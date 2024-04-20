import { useEffect, useState } from "react";

import Search from "./Search";
import UserList from "./UserList";
import userData from "../userData.json";
import { useQueryContext } from "../context/searchContext";

function Home() {
    const [users, setUsers] = useState([]);
    const { query } = useQueryContext();
    const keys = ["name", "email", "mobile"];
    useEffect(() => {
        setUsers(userData);
    }, []);

    const search = (users) => {
        // item.name.toLowerCase().includes(query)||item.email.toLowerCase().includes(query)||item.mobile.toLowerCase().includes(query)
        const regex = new RegExp(query, "i"); // 'i' flag for case-insensitive matching
        return users.filter((item) => keys.some((key) => regex.test(item[key])));
    };
    return (
        <div className="App">
            <Search />
            <UserList users={search(users)} />
        </div>
    );
}

export default Home;
