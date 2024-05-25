import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

function Staking() {

 const [stakeAmount, setStakeAmount] = useState(""); 
 const [referralAddress, setReferralAddress] = useState(""); 
 const [selectedButton, setSelectedButton] = useState(1); 


  
  const handleDaysButton = (buttonId) => {
   setSelectedButton(buttonId); 
  };
  

 const buttons = [
   { label: "30 Days", id: 1 },
   { label: "90 Days", id: 2 },
   { label: "180 Days", id: 3 },
   { label: "365 Days", id: 4 },
 ];

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
                  {buttons.map((button) => (
                    <div
                      className="button-main"
                      style={{ width: "20%" }}
                      key={button.id}
                    >
                      <button
                        onClick={() => handleDaysButton(button.id)}
                        className={
                          selectedButton === button.id
                            ? "header-button"
                            : "button-unactive"
                        }
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        {button.label}
                      </button>
                    </div>
                  ))}
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
                      onChange={(e) => setStakeAmount(e.target.value)}
                      value={stakeAmount}
                      style={{ color: "rgb(255, 255, 255)" }}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="pb-2">Refferal Address</h4>
                  <div className="group-inputs-max">
                    <input
                      type="search"
                      onChange={(e) => setReferralAddress(e.target.value)}
                      placeholder="0x0...."
                      value={referralAddress}
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
