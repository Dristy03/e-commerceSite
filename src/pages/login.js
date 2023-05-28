import styles from "@/styles/Login.module.css";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/userAtom";

export default function Login() {
  const [user,setUser] = useRecoilState(userState)
  const emailRef = useRef()
  const passwordRef = useRef()
  const submitLogin = async (event) => {
    event.preventDefault()
  
    const postData = {
      method : "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email : emailRef.current.value,
          password : passwordRef.current.value
      })
  }
  const res = await fetch('http://localhost:3000/api/login',postData)
  const response = await res.json();
  //console.table(response)
  if(res.status == 200){
    setUser(response)
    
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
              <h2 className={styles.loginboxh2}>Login</h2>
              <br />
              <form method="post"  onSubmit={submitLogin}>
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="email" ref={emailRef} required="" />
                  <label className={styles.slabel}>Email Address</label>
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

                <div style={{textAlign: "center"}}>
                  <input
                    className={styles.anchor}
                    type="submit"
                    value="login"
                  />

                  <p>
                    Are you new here? <a style={{color: "#ff3c78" , textDecoration: "none"}} href="/signup">Signup Now</a>
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
