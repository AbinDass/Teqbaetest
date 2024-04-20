import React from "react";
import userData from "../userData.json";
import { Link, useParams } from "react-router-dom";

const UserDetailPage = () => {
    const { id } = useParams();
    const user = userData.find((user) => user.id === parseInt(id));
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold mb-8">User Detail</h1>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">{user?.name}</h2>
                    <p className="text-gray-700 mb-2">Email: {user?.email}</p>
                    <p className="text-gray-700 mb-4">Mobile: {user?.mobile}</p>
                    <Link to="/" className="text-blue-500 hover:underline">
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetailPage;
