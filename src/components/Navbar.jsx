import React, { useState } from "react";
import DepartmentsDropdownItems from "../components/DepartmentsDropdownItems.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredDept, setHoveredDept] = useState(null);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-bg">
      <div class="container-fluid container">
        <a class="navbar-brand mob-logo" href="#">
          90833 33313 / 90833 33323
        </a>
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <hr />
                <li>
                  <a class="dropdown-item" href="#">
                    Patient Testimonials
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Departments
              </a>
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
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
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
