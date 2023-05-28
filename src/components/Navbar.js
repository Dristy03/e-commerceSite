import Head from "next/head";
import styles from '@/styles/Navbar.module.css'


export default function Navbar() {
  return (
    <> 
         <Head>
        <title>Fashionista</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <nav className={styles.navbar}>
        <div className={styles.navbarcontainer}>
        <div className={styles.logo}>
                {/* <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt=""/> */}
                <h1 className={styles.brand}>Fashionista<span style={{color: "#ff3c78", fontSize: 50}}>.</span></h1>
            </div>
            <input type="checkbox" name="" id="checkbox"/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className={styles.menuitems}>
            <li><img src="/cart.png" alt="" height={25} width={30}/><span className={styles.badgecart}>2</span></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/notification">Notification</a><span className={styles.badge}>0</span></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">SignUp</a></li>
            </ul>
            
        </div>
    </nav>
   
    </>
  )
}
