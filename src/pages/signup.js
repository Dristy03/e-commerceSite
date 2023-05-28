import styles from "@/styles/Login.module.css";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { useRouter } from 'next/router';

import { useRecoilState } from "recoil";
import { userState } from "@/atoms/userAtom";

export default function Signup() {
  const router = useRouter();
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [user,setUser] = useRecoilState(userState)

  const submitRegistration = async ( event) =>{
      event.preventDefault()
      let email =  emailRef.current.value
      let username = usernameRef.current.value
      let password =  passwordRef.current.value
      let password_conf =  passwordConfirmRef.current.value

      if(password !== password_conf){
        console.log("password does not match")
        return
      }
      const postData = {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email : emailRef.current.value,
            username: usernameRef.current.value,
            password : passwordRef.current.value
        })
      }
      const res = await fetch('http://localhost:3000/api/signup',postData)
      const response = await res.json();
      console.log(response)
      if (res.status == 200) {
        setUser(response['user'])
        router.push('/home') 
      } 
      
  }

  return (
    <>
      <Navbar />
      <section id="home">
        <div className={styles.home_page}>
          <div className={styles.home_img}>
            <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
          </div>
          <div className={styles.home_txt}>
            <div className={styles.loginbox}>
              <h2 className={styles.loginboxh2}>Sign Up</h2>
              <br />
              <form method="post" onSubmit={submitRegistration}>
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="email" required="" ref={emailRef}/>
                  <label className={styles.slabel}>Email Address</label>
                </div>
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="username" required="" ref={usernameRef}/>
                  <label className={styles.slabel}>Username</label>
                </div>
                <div className={styles.userbox}>
                  <label>Password</label>
                  <input
                    className={styles.sinput}
                    type="password"
                    name="password"
                    required=""
                    ref={passwordRef}
                  />
                </div>
                <div className={styles.userbox}>
                  <label>Confirm Password</label>
                  <input
                    className={styles.sinput}
                    type="password"
                    name="password"
                    required=""
                    ref={passwordConfirmRef}
                  />
                </div>

                <div style={{textAlign: "center"}}>
                  <input
                    className={styles.anchor}
                    type="submit"
                    value="Signup"
                  />

                  <p>
                    Already a member? <a style={{color: "#ff3c78", textDecoration: "none"}} href="/login">Login Now</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
