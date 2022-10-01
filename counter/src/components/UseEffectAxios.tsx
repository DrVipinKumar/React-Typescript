import axios from "axios";
import { useEffect, useState } from "react";
interface userTypes {
  id: number;
  avatar_url: string;
  login: string;
}
const userData: userTypes[] = [];
function UseEffectAxios() {
  const [users, setUsers] = useState<userTypes[]>(userData);
  useEffect(() => {
    axios
      .get<userTypes[]>("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Photo</th>
          </tr>
        </thead>
        <tbody className="table table-warning">
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    width="100px"
                    height="100px"
                    alt="Pic not found"
                  ></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UseEffectAxios;
