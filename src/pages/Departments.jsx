import { Link, useParams } from "react-router-dom";
import MakeAppointment from "../components/MakeAppointment";
import DepartmentContents from "../components/DepartmentContents.json";

const Departments = () => {
  const params = useParams();
  const departmentId = params.id;
  const department = DepartmentContents.find(
    (dept) => dept.id === departmentId
  );
  if (!department) {
    return <div>Department not found.</div>;
  }

  return (
    <main className="addminheight">
      <div className="nav-bg border-top p-1">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li class="breadcrumb-item">
                <Link className="link" to="/departments">
                  Departments
                </Link>
              </li>
              <li class="breadcrumb-item bactive" aria-current="page">
                <Link className="link" to="#">
                  {department.title}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container">
        <img src={department.image} alt={department.title} />
        <div className="row">
          <div className="col-sm-8">
            <div className="content-box border-end">
              <h1 className="violet">{department.title}</h1>
              <p>{department.content}</p>
              <p>{department["test-line"]}</p>
              <div className="points border-bottom">
                <div className="row mob-mode">
                  {department.tests.map((test) => (
                    <div className="col-sm-6" key={test.id}>
                      <p>
                        <img
                          src="/img/right-arrow.png"
                          className="right-icon"
                          alt=""
                        />
                        {test.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="doctor-box">
                <h4>{department.title} Doctors</h4>
                {department.doctors.map((doctor) => (
                  <div class="card mb-3 doctor-card border" key={doctor.name}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src={doctor.image}
                          class="img-fluid rounded-start"
                          alt={doctor.name}
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="violet">{doctor.name}</h5>
                          <p class="card-text">{doctor.qualification}</p>
                          <Link
                            to={doctor["know-more"]}
                            className="btn btn-outline-primary"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <MakeAppointment />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Departments;
