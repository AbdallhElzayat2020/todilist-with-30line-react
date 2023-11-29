import { useState } from "react";

const GotchaUseState = () => {
  const [value, setValue] = useState(0);
  const handleClickPlus = () => {
    setValue((curentState) => {
      const newState = curentState + 1;
      return newState;
    });
  };
  //function plus
  // const handleClickPlus = () => {
  //   setValue(value + 1);
  // };
  //function minus
  // const handleClickMinus = () => {
  //   setValue(value - 1);
  // };
  const handleClickMinus = () => {
    setValue((curent) => {
      const newminus = curent - 1;
      return newminus;
    });
  };
  return (
    <div className=" flex text-center items-center justify-center h-screen">
      <div className="">
        <h2>{value}</h2>
        <button className="btn" onClick={handleClickPlus}>
          ClickMe +
        </button>
        <button className="btn mx-5" onClick={handleClickMinus}>
          ClickMe -
        </button>
      </div>
    </div>
  );
};
export default GotchaUseState;
