import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })}
            className="form-control"
          />
          <input value={account.firstName}
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })}
            className="form-control"
          />
          <input value={account.lastName}
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })}
            className="form-control"
          />
          <input value={account.dob}
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })}
            className="form-control"
          />
          <input value={account.email}
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })}
            className="form-control"
          />
          <select onChange={(e) => setAccount({
            ...account,
            role: e.target.value
          })}
            className="form-select"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <div className="btn btn-primary w-100 my-2" onClick={save}>
            Save
          </div>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>

          <button onClick={signout} className="btn btn-danger w-100">
            Signout
          </button>

        </div>
      )}
    </div>
  );
}
export default Account;