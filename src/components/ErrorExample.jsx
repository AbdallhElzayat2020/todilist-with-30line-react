import { useState } from "react";
import { data } from "../data";
const ErrorExample = () => {
  const [peoples, setPeoples] = useState(data);
  const removeItem = (id) => {
    const newPeople = peoples.filter((prople) => prople.id !== id);
    setPeoples(newPeople);
  };
  const ClearAllItmes = () => {
    setPeoples([]);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        {peoples.map((people) => {
          const { id, name } = people;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button
                onClick={() => removeItem(id)}
                className="bg-red-500 text-white p-2 rounded-lg"
                type="button"
              >
                Remove
              </button>
            </div>
          );
        })}
        <button onClick={ClearAllItmes} className="btn mt-5">
          ClearAll
        </button>
      </div>
    </div>
  );
};
export default ErrorExample;
