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
                <Link className="link" to="/">
                  Apie
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-base">
                  React Base
                </Link>
              </li>

              <li>
                <Link className="link" to="/react-base-list">
                  React Base List
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-list">
                  React List
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-state">
                  React State
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-state2">
                  React State #2
                </Link>
              </li>
              <li>
                <Link className="link" to="/react-state3">
                  My Little Farm
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
