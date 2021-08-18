import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = () => {
  const [friend, setFriend] = useState({
    id: 0,
    name: "",
    age: 0,
    email: "",
  });

  function handleChange(e) {
    setFriend({
      ...friend,
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
      e.preventDefault();
      axiosWithAuth().post('/friends', friend)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name
          <input
            type="text"
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Age
          <input
            type="text"
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
        </label>

        <label>
          Email 
          <input
            type="text"
            name="email"
            value={friend.email}
            onChange={handleChange}
          />
        </label>
        
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
