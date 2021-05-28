import React, {useRef} from 'react';
import {Link} from 'react-router-dom'
import {Form, Formik} from 'formik'
import {forgotPasswordValidator} from '../../validationSchema/validator'
import WelcomeImg from "../../assets/welcome-img.png";
import Logo from "../../assets/logo.webp";


const ForgotPassword = () => {

    const ref = useRef()

     // Forgot password submit button
  const handleSubmit = async (values, setSubmitting) =>{
      console.log(values)

      // await forgot(values)
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
          <div className="login-container mb-4">
            <h3 className="mt-5 login-head">Forgot Password?</h3>
              
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={forgotPasswordValidator}
                initialValues={{ email: "",}}
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
                      <Form ref={ref} onSubmit={handleSubmit}>
                          
                             {/* Email */}
                             <div className="form-group mt-4">
                              <label htmlFor="password">Email Address</label>
                              <input className="form-control input-style"
                              type="emai
                              l"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Please type in your email-address" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.email && errors.email}
                              </small>
                            </div>
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Submit</button>
                      </Form>
                  )}

              </Formik>


              <div className="text-center mt-5">
                Already have an account? <Link to="/login" style={{textDecoration: 'none', color: '#7BC30A'}}>
                   Sign In
                </Link>
                
              </div>
           
          </div>

        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>

    </>
 );
}
 
export default ForgotPassword;