
import React from 'react';

import CustomFormInput from '../customFormInput/customFormInput.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:''
            
        }
    }
    handleSubmit =async (e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState((state,props)=>({
                email:'',
                password:''
            }))
        }catch(error){

        }
       
    }
    handleChange=(e)=>{
        const {name,value}=e.target;  
        this.setState((state,props)=>({
            [name]:value
        }))
    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">Already have an Account?</h2>
                <span className="title">Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <CustomFormInput type="email" name="email" handleChange={this.handleChange} value={this.state.email} label="email" />
                <CustomFormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password} label="password" />
                <div className="buttons">
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSign>SIGN IN WITH GOOGLE</CustomButton>
                </div>
                </form>
               
            </div>
        )
    }
}

export default SignIn;