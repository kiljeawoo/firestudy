import React ,{useState} from 'react';
import {authService} from "../fbase";


const Auth = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [newAccount,setNewAccount] = useState('true');
    const [error,setError] = useState("");
    const onChange = (event) =>{
        const{
            target: {name, value},
        }= event;
        if(name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    }
    const onSubmit = async (event) => {
        //사이트 새로고침과 같은 기본행위가 일어나지 않도록 제약
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                const data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            } else {
                const data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        }catch(error){
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev)=> !prev);
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type={"text"} placeholder={"Email"}
                       required={true} value={email} onChange={onChange}/>
                <input name="password" type={"password"} placeholder={"Password"}
                       required={true} value={password} onChange={onChange}/>
                <input type={"submit"} value={newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In":"CreateAccount"}</span>
            <div>
                <button>Continue with Google</button>
                <button>Continue with GitHub</button>
            </div>
        </div>
    );
}

export default Auth;