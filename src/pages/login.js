import styles from "@/styles/Login.module.css";
import Navbar from "@/components/Navbar";

export default function Login() {
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
              <form method="post" action="Login">
                <div className={styles.userbox}>
                  <input className={styles.sinput} name="email" required="" />
                  <label className={styles.slabel}>Email Address</label>
                </div>
                <div className={styles.userbox}>
                  <label>Password</label>
                  <input
                    className={styles.sinput}
                    type="password"
                    name="password"
                    required=""
                  />
                </div>

                <div style={{textAlign: "center"}}>
                  <input
                    className={styles.anchor}
                    type="submit"
                    value="Login"
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
