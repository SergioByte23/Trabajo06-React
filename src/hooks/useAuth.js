import axios from "axios"

const useAuth = () => {
  const registerUser =(user)=>{
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/users'
    axios.post(url,user)
    .then(res=>{console.log(res.data)
   
// como accedemos al valor del token con el get
})
    // el token es nombre de la variable
    .catch(err=>console.log(err))
  }
  const loginUser=(credentials)=>{
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios.post(url,credentials)
    .then(res => localStorage.setItem('token',res.data.token))
    
    .catch(err=>console.log(err))
  }
   return {registerUser,loginUser}
}

export default useAuth