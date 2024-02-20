import { useState } from "react";
import OtpComp from "./OtpComp";

const PhoneNumberLogin = () => {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtp(true);
  };
  const handleChange = (e) => {
    setPhone(e.target.value);
  };
  const onOtpSubmit = (otp) => {

    console.log(`Login Successful ${otp}`);
    alert(`Login Successful ${otp}`);
  };

  return (
    <div className="text-center">
      {!showOtp ? (
        <form onSubmit={handelSubmit}>
          <p className="my-2">Phone Number Login</p>
          <input
            type="text"
            value={phone}
            onChange={handleChange}
            className="border-2 border-black-100 rounded-lg px-2 mx-2 bg-gray shadow-md"
            placeholder="Enter Phone Number"
          />
          <button
            type="submit"
            className="bg-slate-600 text-slate-50 border-2 border-black rounded-md px-2 shadow-md"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p className="my-2">Enter Otp sent to {phone} </p>
          <OtpComp length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneNumberLogin;
