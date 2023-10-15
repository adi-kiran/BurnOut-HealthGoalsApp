import { useState } from "react";

function useToken() {
  function getToken() {
    const userToken = localStorage.getItem("token");
    // if the item doesn't exist, return null
    if (!userToken) {
      return null;
    }
    return userToken;
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  }

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return {
    saveToken: saveToken,
    getToken: getToken,
    token: token,
    removeToken: removeToken,
  };
}

export default useToken;
