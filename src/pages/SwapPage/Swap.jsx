import {  useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

function Swap() {
  const [swapToggle, setSwapToggle] = useState(false);
  const [cripBotToken, setCriptBotToken] = useState(0);
  const [weth, setWeth] = useState(0);
  const [cripBotTokenCalculatedValue, setCripBotTokenCalculatedValue] =
    useState(0);
  const [wethCalculatedValue, setWethCalculatedValue] = useState(0);

  const handleInputSwap = (e) => {
    if (swapToggle) {
      setCriptBotToken(Number(e.target.value));
    } else {
      setWeth(Number(e.target.value));
    }
  };

  useEffect(() => {
    if (swapToggle) {
      if (cripBotToken == 0) {
        setCripBotTokenCalculatedValue(0);
      } else if (cripBotToken > 0) {
        setCripBotTokenCalculatedValue(cripBotToken + 1);
      }
    } else {
      if (weth == 0) {
        setWethCalculatedValue(0);
      } else if (weth > 0) {
        setWethCalculatedValue(cripBotToken + 2);
      }
    }
  }, [
    cripBotToken,
    weth,
    swapToggle,
    setCripBotTokenCalculatedValue,
    setWethCalculatedValue,
  ]);

  return (
    <div>
      <div className="main-swap">
        <Navbar />
        <div>
          {" "}
          <div className="container"></div>
          <div className="inner-staking">
            <div className="container">
              <div></div>
              <div className="staking-card">
                <h2 className="pb-4">Swap</h2>
                <div className="inner-staking-card">
                  <div style={{ position: "relative" }}>
                    <div className="swap-input d-flex flex-wrap flex-md-nowrap align-items-end justify-content-between">
                      <div>
                        <label className="pb-1" htmlFor="">
                          You Pay
                        </label>
                        <br />
                        <input
                          type="text"
                          onChange={handleInputSwap}
                          value={swapToggle ? cripBotToken : weth}
                        />
                        <h6>{swapToggle ? "WETH" : "CripBot token"}</h6>
                      </div>
                      <button className="header-button">
                        {swapToggle ? "WETH" : "CripBot token"}
                      </button>
                    </div>
                    <div
                      onClick={() => setSwapToggle(!swapToggle)}
                      className="swap-icon"
                      style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateY(-50%)",
                        top: "50%",
                      }}
                    >
                      <svg
                        width="42"
                        height="43"
                        viewBox="0 0 42 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.23529"
                          y="1.73529"
                          width="39.5294"
                          height="39.5294"
                          rx="19.7647"
                          fill="#241839"
                        ></rect>
                        <rect
                          x="1.23529"
                          y="1.73529"
                          width="39.5294"
                          height="39.5294"
                          rx="19.7647"
                          stroke="#E0E0E0"
                          strokeWidth="2.47059"
                        ></rect>
                        <path
                          d="M28.4095 22.7363L20.9977 30.1481L13.5859 22.7363"
                          stroke="white"
                          strokeWidth="2.47059"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20.9961 12.2363L20.9961 24.5893"
                          stroke="white"
                          strokeWidth="2.47059"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="swap-input d-flex flex-wrap flex-md-nowrap align-items-end justify-content-between mt-4">
                      <div>
                        <label className="pb-1" htmlFor="">
                          You Get
                        </label>
                        <br />
                        <input
                          type="text"
                          readOnly
                          value={
                            swapToggle
                              ? cripBotTokenCalculatedValue
                              : wethCalculatedValue
                          }
                        />
                        <h6>{swapToggle ? "CripBot token" : "WETH"}</h6>
                      </div>
                      <button className="header-button">
                        {swapToggle ? "CripBot token" : "WETH"}
                      </button>
                    </div>
                  </div>
                  <button
                    className="header-button mt-4"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Swap{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
