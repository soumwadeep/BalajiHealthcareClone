import { useParams } from "react-router-dom";

const Departments = () => {
  const params = useParams();
  const Id = params.id;
  return (
    <div>
      <h1>Departments</h1>
    </div>
  );
};

export default Departments;
