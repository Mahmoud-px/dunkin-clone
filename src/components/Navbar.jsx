import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../assets/img/logo.svg'



const Navbar = () => {

  const [list, setList] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer1}>
        <div className={styles.buttonGroup}>
          <button className={styles.form} onClick={() => setList(prev => !prev)}>Careers <KeyboardArrowDownIcon className={styles.arrow} style={list ? {transform: 'rotate(180deg)',transition: '.5s ease-in-out'} : {}}/> </button>
          {list ? <div className={`${styles.buttonList}`} onClick={() => setList(prev => !prev)}>
            <button className={styles.buttonItem}>Working At Dunkin'</button>
            <button className={styles.buttonItem}>Apply Now</button>
            <button className={styles.buttonItem}>Corporate Opportunities</button>
          </div> : ''}
        </div>
        <button className={styles.signUp}>SIGN UP</button>
        <button className={styles.signIn}>SIGN IN</button>
      </div>
      <div className={styles.boxContainer2}>
        <h5 className={styles.listItem}>MENU</h5>
        <h5 className={styles.listItem}>LOCATIONS</h5>
        <h5 className={styles.listItem}>DELIVERY</h5>
        <img src={logo} alt='logo' className={styles.mainItem}></img>
        <h5 className={styles.listItem}>DUNKIN' REWARDS</h5>
        <h5 className={styles.listItem}>DUNKIN' CARD</h5>
        <h5 className={styles.listItem}>SHOP</h5>
      </div>
    </div>
    
  )
}

export default Navbar