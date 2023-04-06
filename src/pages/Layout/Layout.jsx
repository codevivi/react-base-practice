import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link className="link" to="/react-base-practice/">
                  Apie
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-base-practice/react-base">
                  React Base
                </Link>
              </li>

              <li>
                <Link className="link" to="/react-base-practice/react-base-list">
                  React Base List
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-base-practice/react-list">
                  React List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
