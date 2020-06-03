import React,{Component} from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import FormButton from '../form-button/form-button.component'
import {signIn} from '../../firebase/firebase.utils';


class SignIn extends Component {
 constructor(){
     super();
     this.state={
         email:"",
         password:""
     }
 }  

  handleSubmit = (event) =>{
      event.preventDefault();
      this.setState({email:"",password:""});
  }
 
  handleChange= (event) => {
      const {name,value}=event.target;
      this.setState({[name]:value})
  }

 render(){
     return(
         <div className="sign-in">
                 <h2>I ALREADY HAVE AN ACCOUNT</h2>
                 <span>Sign in with your Email and password</span>
                 <form onSubmit={this.handleSubmit}>
                     <FormInput 
                            name="email" 
                            value={this.state.email} 
                            id="email" 
                            handleChange={this.handleChange} 
                            type="email"  
                            required
                            label="Email"
                            />
                     <FormInput name="password" 
                                value={this.state.password} 
                                handleChange={this.handleChange}  
                                id="password" 
                                type="password"  
                                required
                                label="Password"
                                />
                        <div className="buttons">
                            <FormButton name="submit" value="submit" id="submit" type="submit" >Sign in</FormButton>
                            <FormButton onClick={signIn} isGoogleSignIn >Sign in with google</FormButton>
                        </div>
                    
                 </form>
         </div>
     );
 }

}

export default SignIn;
