import { useState } from "react";
const UsestateObject = () => {
  const [persone, setPersone] = useState({
    name: "Abdullh",
    age: 2,
    hobby: "Programming",
  });
  // const [name, setName] = useState("Abdullh");
  // const [age, setAge] = useState(20);
  // const [hobby, setHobby] = useState("Programming");
  const displayPersone = () => {
    setPersone({
      name: "john",
      age: 21,
      hobby: "coding Fullstack",
    });
  };
  return (
    <div className=" flex items-center justify-center h-screen">
      <div>
        <h3>{persone.name}</h3>
        <h3>{persone.age}</h3>
        <h3>Enjoy To:{persone.hobby}</h3>
        <button className="btn" onClick={displayPersone}>
          ShowJhon
        </button>
      </div>
    </div>
  );
};
export default UsestateObject;
