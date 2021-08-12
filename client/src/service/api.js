import axios from "axios";
const url = "http://localhost:8000";

export const authenticatesighnup = async (user) => {
  try {
    return await axios.post(`${url}/sighnup`, user);
  } catch (error) {
    console.log("error while colling sighn up with react",error);
  }
};

export const authenticatelogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("error while colling login api",error);
  }
};


export const payUsingPaytm=async (data)=>{
  try{
    var res= await axios.post(`${url}/payment`, data);
    return res.data;
  } catch(error){
    console.log("error while colling paytm api",error)
  }
} 
