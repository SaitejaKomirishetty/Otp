import "./App.css";
import PhoneNumberLogin from "./components/PhoneNumberLogin";

function App() {
  return (

    
    <div className="flex flex-col justify-center items-center border-2 border-black-100 rounded-lg mx-auto mt-[20vh] max-w-[80vw] shadow-xl p-14 bg-gray-100">
      <h1 className="text-4xl">Login with Phone</h1>
      <PhoneNumberLogin />
    </div>
  );
}

export default App;
