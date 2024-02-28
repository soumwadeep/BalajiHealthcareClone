import React, { useState } from "react";
import DepartmentsDropdownItems from "../components/DepartmentsDropdownItems.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredDept, setHoveredDept] = useState(null);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-bg">
      <div class="container-fluid container">
        <Link class="navbar-brand mob-logo" to="#">
          90833 33313 / 90833 33323
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="#">
                    About Us
                  </Link>
                </li>
                <hr />
                <li>
                  <Link class="dropdown-item" to="#">
                    Patient Testimonials
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Departments
              </Link>
              <ul className="dropdown-menu dept-menu">
                <p>Balaji Healthcare Departments</p>
                <div className="row">
                  {DepartmentsDropdownItems.map((dept) => (
                    <div className="col-sm-3" key={dept.id}>
                      <Link
                        className="nav-link"
                        to={dept.url}
                        onMouseEnter={() => setHoveredDept(dept)}
                        onMouseLeave={() => setHoveredDept(null)}
                      >
                        {dept.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
