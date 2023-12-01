import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <div className="list-group">
      <Link
        to="/project/home"
        className={`list-group-item ${pathname.includes("home") && `active`} list-group-item-action`}
      >
        Home
      </Link>
      <Link
        to={`/project/admin/users`}
        className={`list-group-item  list-group-item-action ${pathname.includes("users") && `active`}`}
        >
        User Table
        </Link>
      <Link
        to="/project/search"
        className={`list-group-item ${pathname.includes("search") && `active`} list-group-item-action`}
      >
        Search
      </Link>

      <Link
        to="/project/signin"
        className={`list-group-item ${pathname.includes("signin") && `active`} list-group-item-action`}
      >
        SignIn
      </Link>
      <Link
        to="/project/signup"
        className={`list-group-item ${pathname.includes("signup") && `active`} list-group-item-action`}
      >
        Signup 
      </Link>
      <Link
        to="/project/account"
        className={`list-group-item ${pathname.includes("account") && `active`} list-group-item-action`}
      >
        Account
      </Link>
    </div>
  );
}

export default Nav;