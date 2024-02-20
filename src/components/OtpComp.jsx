import { useEffect, useRef } from "react";
import { useState } from "react";

const OtpComp = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inpRef = useRef([]);
  console.log(inpRef);

  useEffect(() => {
    if (inpRef.current[0]) {
      inpRef.current[0].focus();
    }
  }, []);

  const handelSubmit = () => {
    const combineOtp = otp.join("");
    if (combineOtp.length == length) {
      onOtpSubmit(combineOtp);
    }
  }
  const handelChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    

    //move to the next field
    if (value && index < length - 1) {
      inpRef.current[index + 1].focus();
    }
  };
  const handelClick = (index) => {
      inpRef.current[index].setSelectionRange(0,1)

      if(index > 0 && !otp[index-1]){
        alert("chusko malla")
        inpRef.current[otp.indexOf("")].focus();
      }
  };
  const handelKeyDown = (index, e) => {
    //const value = e.target.value;
    console.log("test",index,e.target.value,e.key);
    if (e.key == "Backspace" && !otp[index] && index > 0) {
      inpRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        {otp.map((value, index) => {
          return (
            <input
              ref={(input) => (inpRef.current[index] = input)}
              key={index}
              type="text"
              value={value}
              onChange={(e) => {
                handelChange(index, e);
              }}
              onClick={() => {
                handelClick(index);
              }}
              onKeyDown={(e) => {
                handelKeyDown(index, e);
              }}
              className="border-gray-500 rounded-md border-2 m-2 max-w-10 aspect-square text-center text-lg"
            />
          );
        })}
      </div>
      <button
        onClick={handelSubmit}
        className=" bg-slate-600 text-slate-50 border-2 min-h-10 border-black rounded-md px-2 shadow-md"
      >
        Submit OTP
      </button>
    </div>
  );
};

export default OtpComp;
