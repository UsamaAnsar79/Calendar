import { Outlet, NavLink } from "react-router-dom";

const CalendarLayout = () => {
  return (
    <>
      <div className="links-main-div">
        <nav className="links-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "calendar-link active" : "calendar-link"
                }
              >
                month
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/week"
                className={({ isActive }) =>
                  isActive ? "calendar-link active" : "calendar-link"
                }
              >
                week
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/day"
                className={({ isActive }) =>
                  isActive ? "calendar-link active" : "calendar-link"
                }
              >
                day
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/agenda"
                className={({ isActive }) =>
                  isActive ? "calendar-link active" : "calendar-link"
                }
              >
                agenda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/monthview"
                className={({ isActive }) =>
                  isActive ? "calendar-link active" : "calendar-link"
                }
              >
                month-view
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default CalendarLayout;