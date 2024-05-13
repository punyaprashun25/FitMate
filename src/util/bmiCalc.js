const calculateBmi = (heightValue, weightValue) => {
    if (heightValue &&heightValue>0 && weightValue &&weightValue>0) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      return bmi;
    } else {
      return null;
    }
  };

export default calculateBmi;