import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(()=>{
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
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage
