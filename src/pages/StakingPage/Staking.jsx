import Navbar from "../../components/Navbar/Navbar";

function Staking() {
  return (
    <div className="staking">
      <Navbar />
      <div>
        <div className="Toastify"></div>
        <div className="inner-staking">
          <div className="container">
            <div className="staking-card">
              <div className="centered-container">
                <h2>Stake</h2>
              </div>
              <div className="inner-staking-card">
                <div className="tabs-button d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between mt-5">
                  <div className="button-main" style={{ width: "20%" }}>
                    <button
                      className="header-button"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      30 Days
                    </button>
                  </div>
                  <div className="button-main" style={{ width: "20%" }}>
                    <button
                      className="button-unactive"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      90 Days
                    </button>
                  </div>
                  <div className="button-main" style={{ width: "20%" }}>
                    <button
                      className="button-unactive"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      180 Days
                    </button>
                  </div>
                  <div className="button-main" style={{ width: "20%" }}>
                    <button
                      className="button-unactive"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      365 Days
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3>Wallet Balance</h3>
                    <h3> 0 </h3>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="pb-2">Enter Stake Amount</h4>
                  <div className="group-inputs-max">
                    <input
                      type="search"
                      placeholder="CPT Stake Amount"
                      value=""
                      style={{ color: "rgb(255, 255, 255)" }}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="pb-2">Refferal Address</h4>
                  <div className="group-inputs-max">
                    <input
                      type="search"
                      placeholder="0x0...."
                      value=""
                      style={{ color: "rgb(255, 255, 255)" }}
                    />
                  </div>
                </div>
                <div className="pt-4 d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between">
                  <div>
                    <h4>APR Rates </h4>
                    <p>0%</p>
                  </div>
                  <div>
                    <h4>Reward Balance</h4>
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 d-flex align-items-center justify-content-between">
                <button
                  className="header-button"
                  style={{ width: "45%", justifyContent: "center" }}
                >
                  Approve
                </button>
                <button
                  className="button-unactive"
                  style={{ width: "45%", justifyContent: "center" }}
                >
                  Stake
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staking;
