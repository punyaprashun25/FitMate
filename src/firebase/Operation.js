import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const deleteTask = async (db, collectionName, userId, taskId) => {
    try {
        const userRef = doc(db, collectionName, userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        if (userData) {
            await updateDoc(userRef, { ...userData, dailyTasks: userData.dailyTasks.filter((item)=>item.id !== taskId) });
        }
        else {
            console.log("error in fetching user data!");
        }
    } catch (error) {
        toast.error(error.message,{
            position: "top-center"
        })
    }
    
}
const addTask = async (db, collectionName, userId, newTask) => {
    try {
        const userRef = doc(db, collectionName, userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        if (userData) {
            await updateDoc(userRef, { ...userData, dailyTasks: [...userData.dailyTasks, newTask] });
        }
        else {
            console.log("error in fetching user data!");
        }
    } catch (error) {
        console.log(error);
    }
}

const setIsCompleteTask = async(db, collectionName, userId, taskId, taskStatus)=>{
    try {
        const userRef = doc(db, collectionName, userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        if (userData) {
            const dailyTasks = userData.dailyTasks;
            for(let i = 0; i<dailyTasks.length; i++){
                if(dailyTasks[i].id===taskId){
                    dailyTasks[i] = {...dailyTasks[i],isComplete: taskStatus};
                }
            }
            await updateDoc(userRef, { ...userData, dailyTasks: dailyTasks});
        }
        else {
            console.log("error in fetching user data!");
        }
    } catch (error) {
        console.log(error);
    }
}

export { deleteTask, addTask, setIsCompleteTask };