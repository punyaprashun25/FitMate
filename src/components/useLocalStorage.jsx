import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [userData, setUserData] = useState(()=>{
    // function that set initail value of the value state.
    // if key is present in the localStorage then initially that value will be stored otherwise default value.
    let currentValue;
    try{
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));

    }catch(error){
        console.log(error);
        currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(userData));
  }, [key, userData]);

  const removeUser = ()=> {
    console.log("remove user chal gya")

    localStorage.removeItem("userData");
  }

  return {userData, setUserData,removeUser};
}

export default useLocalStorage
