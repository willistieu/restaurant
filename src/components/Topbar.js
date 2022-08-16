export const Topbar = () => {
  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center">
              <span>0458070840</span>
            </i>
            <br />
            <i className="bi bi-clock d-flex align-items-center ms-4">
              <span> Mon-Thu: 13.00 - 22.00</span>
              <span>
                {" "}
                &nbsp;Fri: 13.00 - 02.00 &nbsp;(kitchen: 13.00 - 21.00)
              </span>
              <span>
                {" "}
                &nbsp;Sat: 12.00 - 02.00 &nbsp;(kitchen: 13.00 - 21.00)
              </span>
              <span>
                {" "}
                &nbsp;Sun: 12.00 - 22.00 &nbsp;(kitchen: 12.00 - 21.00)
              </span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
