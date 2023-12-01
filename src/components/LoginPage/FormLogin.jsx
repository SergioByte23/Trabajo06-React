import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"

const FormLogin = () => {
    const{register,handleSubmit,reset}=useForm()
    const {loginUser}=useAuth()
    const submit =(data) =>{
    loginUser(data);
    }
    return (
        <form className="register" onSubmit={handleSubmit(submit)}>
            <label className="register__label">
                <span className="register__span">Email</span>
                <input {...register('email')} type="email" />
            </label>
            <label className="register__label">
                <span className="register__span">Password</span>
                <input {...register('password')} type="password" />
            </label>
            <button>Login</button>
        </form>
    )
}

export default FormLogin