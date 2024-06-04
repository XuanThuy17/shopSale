import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./BuyModal.scss";
import axios from "axios";
import { toast } from 'react-toastify';


const AddressModal = (props) => {
  const dataDefault = {
    selectCountry: "",
    selectCity: "",
    selectDistrict: "",
    selectWard: "",
    selectStreet: "",
  };

  const listDefault = [
    {
      id: 1,
      selectCountry: "Vietnam",
      selectCity: "01-Ha Noi",
      selectDistrict: "008-Hoang Mai",
      selectWard: "00340-Yen So",
      selectStreet: "987, Tam Trinh",
    },
    {
      id: 2,
      selectCountry: "Vietnam",
      selectCity: "01-Ha Noi",
      selectDistrict: "018-Gia Lam",
      selectWard: "00580-Kieu Ky",
      selectStreet: "02, Bao Dap",
    },
    {
      id: 3,
      selectCountry: "Vietnam",
      selectCity: "34-Thai Binh",
      selectDistrict: "336-Thai Binh",
      selectWard: "12439-De Tham",
      selectStreet: "168, Hai Ba Trung",
    }
  ];

  const [dataAddress, setDataAddress] = useState(dataDefault);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [listAddress, setListAddress] = useState(listDefault);
  const [choose, setChoose] = useState(listAddress && listAddress[0].id);
  const [showUC, setShowUC] = useState(false);
  const [dataUC,setDataUC] = useState({})

  const handleSelectCountry = (e) => {
    setDataAddress({ ...dataAddress, selectCountry: e.target.value });
  };

  const handleSelectCity = (e) => {
    setDataAddress({ ...dataAddress, selectCity: e.target.value });
  };

  const handleSelectDistrict = (e) => {
    setDataAddress({ ...dataAddress, selectDistrict: e.target.value });
  };

  const handleSelectWard = (e) => {
    setDataAddress({ ...dataAddress, selectWard: e.target.value });
  };

  const handleSelectStreet = (e) => {
    if(dataAddress && dataAddress.selectCountry && dataAddress.selectCity && dataAddress.selectDistrict && dataAddress.selectWard ) {
        setDataAddress({...dataAddress,selectStreet: e.target.value})
    }
    else {
      toast.error("Invalid Country or City/District/Ward!")
    }
  }

  const SplitAddress = (address) => {
    let result = address.split("-");
    return result;
  }

  const getCity = async () => {
    try {
      const result = await axios.get("https://esgoo.net/api-tinhthanh/1/0.htm");
      if (result && result.data) {
        setCity(result.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getDistrict = async (id) => {
    try {
      let d_id = SplitAddress(id);
      const result = await axios.get(
        `https://esgoo.net/api-tinhthanh/2/${d_id[0]}.htm`
      );
      if (result && result.data) {
        setDistrict(result.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getWard = async (id) => {
    try {
      let w_id = SplitAddress(id);
      const result = await axios.get(
        `https://esgoo.net/api-tinhthanh/3/${w_id[0]}.htm`
      );
      if (result && result.data) {
        setWard(result.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (dataAddress && dataAddress.selectCountry) {
      getCity();
    }
    if (dataAddress && dataAddress.selectCity) {
      getDistrict(dataAddress.selectCity);
    }
    if (dataAddress && dataAddress.selectDistrict) {
      getWard(dataAddress.selectDistrict);
    }
  }, [dataAddress]);
  
  useEffect(()=>{
    if(dataUC !== null) {
      setDataAddress(dataUC)
    }
  },[dataUC])

  const handleCloseModal = () => {
    props.handleCloseAddressModal();
  };

  const handleCreate = () => {
    setShowUC(true);
  };

  const handleBack = () => {
    setShowUC(false);
    setDataUC({})
    setDataAddress(dataDefault);
  };

  const handleEdit = (item) => {
    setShowUC(true);
    setDataUC(item)
  };

  const CreateAddress = (type) => {
    if(type === "Update") {
      toast.success("Update success")
      console.log("Submit", dataAddress);
    }
    if(type === "Create") {
      toast.success("Create success")
      console.log("Submit", dataAddress);
    }
    setDataAddress(dataDefault);
    handleBack();
  };

  return (
    <Modal show={props.showAddress} onHide={() => handleCloseModal()} centered>
      <Modal.Header closeButton>
        <div className="d-flex align-items-center justify-content-between">
          {showUC === false && (
            <button onClick={() => handleCreate()}>
              Create
            </button>
          )}
          <h4 style={{ marginLeft: showUC === false ? 100 : 165 }}>
            My address
          </h4>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="list-address">
          {showUC === false ? (
            <>
              {listAddress &&
                listAddress.length > 0 &&
                listAddress.map((item, index) => {
                  let ward = SplitAddress(item.selectWard),
                  district = SplitAddress(item.selectDistrict),
                  city = SplitAddress(item.selectCity);
                  return (
                    <div
                      className="item-address d-flex align-items-center justify-content-between"
                      key={index}
                    >
                      <input
                        type="radio"
                        value={item.id}
                        id={item.id}
                        checked={choose === item.id}
                        onChange={() => setChoose(item.id)}
                      />
                      <p>
                        {item.selectStreet},{ward[1]},{district[1]},{`${city[1]} City`},
                        {item.selectCountry}
                      </p>
                      <button
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    </div>
                  );
                })}
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btn-cancel"
                  onClick={() => handleCloseModal()}
                  style={{ marginRight: 8 }}
                >
                  Cancel
                </button>
                <button className="btn-submit">Submit</button>
              </div>
            </>
          ) : (
            <>
              <div className="select-address">
                <div className="form-groupmt-2">
                  <label for="Country" class="form-label">
                    Country:
                  </label>
                  <select
                    value={dataAddress.selectCountry}
                    onChange={(e) => handleSelectCountry(e)}
                    class="form-select"
                    id="Country"
                  >
                    <option selected>Choose Country</option>
                    <option value="Vietnam">Vietnam</option>
                  </select>
                </div>
                <div className="form-groupmt-2">
                  <label for="City" class="form-label">
                    City:
                  </label>
                  <select
                    value={dataAddress.selectCity}
                    onChange={(e) => handleSelectCity(e)}
                    class="form-select"
                    id="City"
                  >
                    <option selected>Choose City</option>
                    {city &&
                      city.length > 0 &&
                      city.map((item, index) => {
                        return (
                          <option key={index} value={item.id+"-"+item.name_en}>
                            {item.name_en}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mt-2">
                  <label for="District" class="form-label">
                    District:
                  </label>
                  <select
                    value={dataAddress.selectDistrict}
                    onChange={(e) => handleSelectDistrict(e)}
                    class="form-select"
                    id="District"
                  >
                    <option selected>Choose District</option>
                    {district &&
                      district.length > 0 &&
                      district.map((item, index) => {
                        return (
                          <option key={index} value={item.id+"-"+item.name_en}>
                            {item.name_en}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mt-2">
                  <label for="Ward" class="form-label">
                    Ward:
                  </label>
                  <select
                    value={dataAddress.selectWard}
                    onChange={(e) => handleSelectWard(e)}
                    class="form-select"
                    id="Ward"
                  >
                    <option selected>Choose Ward</option>
                    {ward &&
                      ward.length > 0 &&
                      ward.map((item, index) => {
                        return (
                          <option key={index} value={item.id+"-"+item.name_en}>
                            {item.name_en}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mt-2 mb-2">
                  <label for="Street" class="form-label">
                    Street:
                  </label>
                  <input
                    type="text"
                    value={dataAddress.selectStreet}
                    onChange={(e)=>handleSelectStreet(e)}
                    class="form-control"
                    id="Street"
                    placeholder="Street"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btn-cancel"
                  onClick={() => handleBack()}
                  style={{ marginRight: 8 }}
                >
                  Back
                </button>
                <button
                  className="btn-submit"
                  onClick={dataUC ? () => CreateAddress("Update") : () => CreateAddress("Create")}
                >
                  {dataUC ? "Update" : "Create"}
                </button>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddressModal;
