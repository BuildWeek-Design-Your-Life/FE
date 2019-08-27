import axios from "axios";

export const axiosWithAuth = () => {
<<<<<<< HEAD
    const token = localStorage.getItem('token')
    console.log('token', token)
    return axios.create({
        headers: {
            Token: token
        }
    })
}
=======
  const token = localStorage.getItem("token");
  console.log("token", token);
  return axios.create({
    headers: {
      Token: token
    }
  });
};

>>>>>>> master
