"use client"; 

import { useState, useEffect } from "react";
import UserList from "./UserList";
import mockUsers from "./mockUsers"; 

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log(mockUsers);
      setUsers(mockUsers);
    }, 500)
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default UserPage;
