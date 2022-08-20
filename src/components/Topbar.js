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
              <span> Monday - Thursday: 13 - 22</span>
              <span>
                {" "}
                &nbsp;Friday: 13-00 (02)
              </span>
              <span>
                {" "}
                &nbsp;Saturday: 12-00 (02)
              </span>
              <span>
                {" "}
                &nbsp;Sunday: 12-22
              </span>
              <span>
                {" "}
                &nbsp;Kitchen closes at 21.30
              </span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
