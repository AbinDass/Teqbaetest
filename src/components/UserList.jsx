import React from "react";
import { Link } from "react-router-dom";
import { useQueryContext } from "../context/searchContext";
const UserList = ({ users }) => {
    const { itemId, setItemId } = useQueryContext();

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-8">User List</h1>
            <div>
                {users.map((user) => (
                    <Link
                        key={user.id}
                        to={`/user/${user.id}`}
                        className="block no-underline"
                        onClick={() => setItemId(user.id)}
                    >
                        {users.length!==0 ?<div
                            key={user.id}
                            className={
                                user.id === itemId
                                    ? "bg-blue-400 rounded-lg p-4 mb-6 hover:bg-blue-100 cursor-pointer"
                                    : "bg-gray-100 rounded-lg p-4 mb-6 hover:bg-blue-100 cursor-pointer"
                            }
                        >
                            <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
                            <p className="text-gray-700 mb-2">Email: {user?.email}</p>
                            <p className="text-gray-700">Mobile: {user?.mobile}</p>
                        </div>:<div className="max-w-lg mx-auto"><p className="text-red-600 capitalise">no user found !</p></div>}
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default UserList;
