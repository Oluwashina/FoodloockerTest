import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Formik} from 'formik'
import {registerValidator} from '../../validationSchema/validator'
import WelcomeImg from "../../assets/welcome-img.png";
import Logo from "../../assets/logo.webp";

const Register = () => {

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
              <img src={Logo} alt="oyap logo"  width="100" height="100" />
            </div>


            {/* Form submission */}
          <div className="login-container">
            <h3 className="mt-4 login-head">Sign Up</h3>
              
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={registerValidator}
                initialValues={{fullName: "", country: "", phoneNumber: "",  email: "", password: "", confirm_password: ""}}
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
                          {/* First name */}
                          <div className="form-group mt-3">
                            <label htmlFor="email">Full Name</label>
                            <input
                              className="form-control input-style"
                              placeholder="Full Name"
                              type="text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="fullName"
                              value={values.fullName}
                            />
                            <small style={{ color: "#dc3545" }}>
                                        {touched.fullName && errors.fullName}
                               </small>
                          </div>

                          {/* Email */}
                          <div className="form-group">
                              <label htmlFor="password">Email</label>
                              <input className="form-control input-style"
                              type="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Email" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.email && errors.email}
                              </small>
                            </div>

                             
               

                            {/* Phone Number */}
                            <div className="form-group">
                              <label htmlFor="password">Phone Number</label>
                              <input className="form-control input-style"
                              type="text"
                              id="phoneNumber"
                              value={values.phoneNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="0800 000 0000" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.phoneNumber && errors.phoneNumber}
                              </small>
                            </div>

                            {/* Country */}
                            <div className="form-group">
                              <label htmlFor="password">Country</label>
                              <input className="form-control input-style"
                              type="text"
                              id="country"
                              value={values.country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Country" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.country && errors.country}
                              </small>
                            </div>


                             

                             {/* password */}
                             <div className="form-group">
                              <label htmlFor="password">Password</label>
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

                            
                             {/* Confirm password */}
                             <div className="form-group">
                              <label htmlFor="password">Confirm password</label>
                              <input className="form-control input-style"
                              type="password"
                              id="confirm_password"
                              value={values.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Confirm password" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.confirm_password && errors.confirm_password}
                              </small>
                            </div>
                        
                        
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-oyap btn-block text-uppercase mt-4">Sign Up</button>
                      </Form>
                  )}

              </Formik>


              <div className="text-center mt-5 mb-5">
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
 
export default Register;