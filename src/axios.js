import axios from "axios";

let instance=axios.create({
     //baseURL:"http://localhost:3001"
     //baseURL:"https://splice-food.herokuapp.com/"
     baseURL:"https://spilcefood-server.onrender.com/"
})

export default instance;