import React from 'react'
import { Route, Routes } from "react-router-dom";
import UserDetailPage from '../components/UserDetailPage';

const userRoute = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="user/:id" element={<UserDetailPage />}></Route>
      </Routes>
    </div>
  )
}

export default userRoute
