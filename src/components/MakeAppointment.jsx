const MakeAppointment = () => {
  return (
    <div>
      <form className="text-center appointmentform">
        <h4 className="addvioletbg">MAKE AN APPOINTMENT</h4>
        <div className="mb-3">
          {/* <label class="form-label">Pick A Date</label> */}
          <input type="date" class="form-control" placeholder="Pick A Date" />
        </div>
        <button type="submit" class="btn btn-danger">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};

export default MakeAppointment;
