import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../context/auth";
import { NavLink} from "react-router-dom";
import { CiFaceSmile } from "react-icons/ci";
import Lottie from "lottie-react";
import ContactAnimation from "../../assets/JSON/contactus.json";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  // Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/Login`,{ email, password });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
          //save in the local storage
          localStorage.setItem('auth', JSON.stringify(res.data));
          navigate(location.state || "/home");
        } 
        else {
          toast.error(res.data.message);
        }
    } 
    catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred during registration.');
    }
  };

  return (
    <Layout title="Register">

      <section style={{backgroundColor: "rgb(238, 238, 238)" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">

                  <div className="col-md-6 col-lg-5 d-none d-md-block mt-5">
                    <Lottie animationData={ContactAnimation} />
                  </div>

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}/>
                          <span className="h1 fw-bold mb-0"> <CiFaceSmile/></span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="  Email address"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />

                        </div>

                        <div className="pt-1 mb-4 ">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>

                        <button className="btn btn-secondary bg-primary mb-2" type="button"
                         onClick={() => { navigate('/forgot-password') }}>
                          Forgot password?
                        </button>

                        <p className="mb-4 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <NavLink to="/register" style={{ color: "#393f81" }} >Register</NavLink>
                        </p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <NavLink to="/Policy" className="small text-muted">Privacy policy</NavLink>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  )
}

export default Login