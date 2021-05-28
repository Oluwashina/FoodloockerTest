import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Formik} from 'formik'
import {loginValidator} from '../../validationSchema/validator'
import WelcomeImg from "../../assets/welcome-img.png";
import Logo from "../../assets/logo.webp";
import './login.css'

const Login = () => {

    // submit login button
  const handleSubmit = async (values) => {
    const credentials = 
    {
      ...values,
     }

     console.log(credentials)
    //  await login(credentials);
  }

    return ( 
        <>
        <div className="row no-gutters">
        <div className="col-lg-4">
          {/* Logo */}
            <div className="text-center mt-4">
              <img src={Logo} alt="oyap logo" width="100" height="100" />
            </div>

            {/* Form submission */}
          <div className="login-container">
            <h3 className="mt-4 login-head">Login</h3>
                

              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={loginValidator}
                initialValues={{email: "", password: ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>
                          {/* email */}
                          <div className="form-group mt-3">
                            <label htmlFor="email">Enter your email address</label>
                            <input
                              className="form-control input-style"
                              placeholder="sample@example.com"
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="email"
                              value={values.email}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.email && errors.email}
                               </small>
                          </div>
                             
               
                            {/* password */}
                            <div className="form-group">
                              <label htmlFor="password">Enter your password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Password" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.password && errors.password}
                              </small>
                            </div>
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Login</button>
                      </Form>
                  )}

              </Formik>


              <div className="text-center mt-4">
                <Link to="/forgotpassword" style={{textDecoration: 'none', color: '#323335'}}>
                  Forgot password?
                </Link>
                
              </div>
           
            <hr style={{borderTop: '1px solid rgba(123, 195, 10, 0.5)'}} />

            <Link to="/signup" className="btn btn-outline-oyap btn-block text-uppercase mt-4">
              Sign Up
            </Link>
          </div>

        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>
        </>
     );
}
 
export default Login;