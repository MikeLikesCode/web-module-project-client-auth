import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriendsList = () => {
    const token = localStorage.getItem("token");

    axiosWithAuth()
      .get("/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      });
  };

  useEffect(() => {
    getFriendsList();
  }, []);

  console.log(friends);

  return (
    <div>
      {friends.map((friend,idx) => (
        <div key={idx}>{friend.name}</div>
      ))}

      <FriendForm />
    </div>
  );
};

export default FriendsList;
