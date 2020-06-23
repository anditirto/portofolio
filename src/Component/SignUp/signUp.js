import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "react-bootstrap";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from 'yup';
import "./signup.css";

export default class SignUp extends React.Component{
    render(){
        const {history} = this.props;
    
    return(
        <Formik
            initialValues={{
                email:'',
                password:''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password:Yup.string()
                    .min(8, 'Password at Least 8 character')
                    .required('Password is Required')
            })}
            onSubmit={fields => {
                alert('Success' + JSON.stringify(fields,null,4));
                //alert('Welcome :' + )
                history.push('./Gallery');
            }}
            render={({errors,status,touched}) => (
                <div className="containerSignIn" >
                    <div className="paper">
                        <Avatar className="avatar">
                            <LockOutlinedIcon />
                        </Avatar>
                        <div className="title">
                            <h1>Sign Up</h1>
                        </div>
                        <Form>
                        
                        <div className="form-group">
                            <Field name="email" placeholder="Email" label="Email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        </div>
                             <div style={{color:"red"}}>
                                <ErrorMessage name="email" style={{color:"red"}} className="invalid-feedback" />
                             </div>
                       
                         <div className="form-group">
                            <Field name="password" placeholder="Password" label="Password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        </div>
                        <div style={{color:"red"}}>
                        <ErrorMessage name="password" className="invalid-feedback" />
                        </div>
                            <div className="form-button">
                                <Button type="submit" variant="primary" className="submitBtn">Submit</Button>
                            </div>
                            <div className="form-button">
                                <Button type="reset" variant="secondary" className="resetBtn">Reset</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        >
        </Formik>
    )
    }
}


