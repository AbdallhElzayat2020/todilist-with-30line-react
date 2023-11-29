import { data } from "../data";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const faceId = Date.now();
    const newUser = { id: faceId, name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName("");
  };
  const handleDelete = (id) => {
    const updatedUser = users.filter((person) => person.id !== id);
    setUsers(updatedUser);
  };
  const deleteAll = () => {
    setUsers([]);
  };
  return (
    <div className="form-components">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      {/* users */}
      <h2 className="text-center">Users Data</h2>
      {users?.map((user) => {
        return (
          <div className="text-center" key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => handleDelete(user.id)} className="btn">
              Remove User
            </button>
          </div>
        );
      })}
      <button
        onClick={deleteAll}
        className="bg-red-500 text-white p-1 mx-auto text-center w-fit flex items-center mt-5 rounded-[5px] "
      >
        DeleteAll
      </button>
    </div>
  );
};
export default Form;
