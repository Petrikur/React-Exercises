import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

// https://randomuser.me/api

function App() {
  const [userInfos, setUserInfos] = useState([]);

  const getFullUserName = (userInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first}  ${last}`;
  };

  useEffect(() => {
    const fetchMyAPI = async () => {
      let url = "https://randomuser.me/api/?results=50";
      const response = await fetch(url);
      let data = await response.json();
      setUserInfos(data.results);
    };
    fetchMyAPI();
  }, []);

  return (
    <div>
      <Header />
      {userInfos.map((user, index) => {
        return (
          <div className="user-item" key={index}>
            <span>{getFullUserName(user)}</span>
            <img src={user.picture.medium} alt="alt"></img>
            <div className="user-info">
              <h5>{user.location.city},</h5>
              <h5>{user.location.country}</h5>
              <h5>{user.phone}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
