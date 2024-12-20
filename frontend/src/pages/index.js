import apiCalls from "../api";
import { useState } from "react";

const Page = () => {
  const [mfList, setMfList] = useState([]);
  const availableMFFamilies = [
    "BirlaSunLifeMutualFund_MF",
    "HDFCMutualFund_MF",
    "ICICIPrudentialMutualFund_MF",
    "SBIMutualFund_MF",
    "TATAMutualFund_MF",
    "BANDHANMUTUALFUND_MF",
    "DSP_MF",
    "KOTAKMAHINDRAMF",
    "FRANKLINTEMPLETON",
    "HSBCMUTUALFUND_MF",
    "360_ONE_MUTUALFUND_MF",
    "NAVIMUTUALFUND_MF",
    "SHRIRAMMUTUALFUND_MF",
    "PPFAS_MF",
    "MAHINDRA MANULIFE MUTUAL FUND_MF",
    "UNIONMUTUALFUND_MF",
    "WHITEOAKCAPITALMUTUALFUND_MF",
    "HELIOSMUTUALFUND_MF",
    "ZERODHAMUTUALFUND_MF",
  ];
  const handleMFFamilyChange = async (value) => {
    if (value.length > 0) {
      try {
        const res = await apiCalls.getMFDetails({ AMC_Code: value });
        setMfList(res.data);
        if (res.status === 429) {
          alert("too many requests");
          console.log("too many requests");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setMfList([]);
    }
  };
  return (
    <div class="container">
      <main>
        <div class="row g-5">
          <div class="col-md-5 mx-auto col-lg-4 order-md-last">
            <h4 class="mb-3">Select Mutual fund family</h4>
            <div class="w-100">
              <label for="country" class="form-label">
                Country
              </label>
              <select
                onChange={(e) => handleMFFamilyChange(e.target.value)}
                class="form-select"
                id="country"
                required=""
              >
                <option value="" selected disabled>
                  Select MF Family
                </option>
                {availableMFFamilies.map((family) => (
                  <option value={family}>{family}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="col-md-5 mx-auto col-lg-4 order-md-last">
            {mfList?.length > 0 &&
              mfList.map((item) => <p><button>Buy</button> - {item.Scheme_Name}</p>)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
