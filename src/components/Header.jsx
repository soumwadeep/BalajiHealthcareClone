const Header = () => {
  return (
    <div className="row mt-3">
      <div className="col-sm-6 mb-3">
        <img src="/img/logo.png" alt="logo" className="logo" />
      </div>
      <div className="col-sm-2 mb-3">
        <img src="/img/5years.jpg" alt="logo" className="logo" />
      </div>
      <div className="col-sm-2 mb-3">
        <button className="btn btn-danger">Book A Home Collection</button>
      </div>
      <div className="col-sm-2 mb-3">
        <button className="btn btn-primary">Schedule A Consulation</button>
      </div>
    </div>
  );
};

export default Header;
