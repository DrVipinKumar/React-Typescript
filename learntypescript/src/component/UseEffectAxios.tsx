import React, { useEffect, useState } from "react";
import axios from "axios";
interface userType {
  id: number;
  login: string;
  avatar_url: string;
}
const UseEffectAxios = () => {
  const [users, setUsers] = useState<userType[]>([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className="text-center">
      <h2>User Information</h2>
      <table className="table table-warning">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Photo</th>
          </tr>
        </thead>
        <tbody className="table table-success">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>
                <img
                  src={user.avatar_url}
                  width="100px"
                  height="100px"
                  alt="Pic is not found"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffectAxios;
