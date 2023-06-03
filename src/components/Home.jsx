import React from 'react'
import styles from '../styles/home.module.css'
import rewards from '../assets/img/Rewards.png'
import combo from '../assets/img/combo.png'
import boosted from '../assets/img/Boosted.png'
import iphone_web from '../assets/img/iphone_web.png'
import GooglePlayStore from '../assets/img/GooglePlayStore.png'
import AppStore from '../assets/img/AppStore.png'
import logo from '../assets/img/logo.svg'
import dunkinRun from '../assets/img/Dunkin_Run_desktop.png'
import Expresso from '../assets/img/Expresso_Homepage.jpg'
import Croissant from '../assets/img/one_Croissant.png'
import coffee from '../assets/img/Hot_coffee_Homepage.jpg'
import cards from '../assets/img/cards.png'
import googleMap from '../assets/img/Google_map_web.png'
import twitter from '../assets/img/Twitter_new.svg'
import facebook from '../assets/img/Facebook_new.svg'
import pinterest from '../assets/img/Pinterest_new.svg'
import insta from '../assets/img/Instagram_new.svg'
import youtube from '../assets/img/YouTube_new.svg'
import tiktok from '../assets/img/TikTok_new.svg'
import JetBlue from '../assets/img/JetBlue_new.png'
import BR from '../assets/img/BR_Logo_New.png'
import { Link } from 'react-router-dom'



const Home = () => {


  return (
    <div className={styles.container}>

      <div className={styles.joinTeam}>
        <h5 className={styles.header}>Come run with us! Apply to join our exceptional team  <span className={styles.here}> here</span>.</h5>  
      </div>

      <div className={styles.boxContainer1}>
        <h2 className={styles.firstHeader}>DUNKIN<span className={styles.rewards}>’ REWARDS</span> </h2>
        <h1 className={styles.secondHeader}>A NEW WAY TO RUN</h1>
      </div>

      <div className={styles.boxContainer2}>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <img src={rewards} alt="img" className={styles.img}/>
            <h4 className={styles.header}>EARN POINTS ANY WAY YOU PAY</h4>
            <h5 className={styles.description}>Order ahead in the app or scan your Dunkin’ Rewards ID in-store to earn 10 points per $1 spent</h5>
          </div>
          <div className={styles.box}>
            <img src={combo} alt="img" className={styles.img}/>
            <h4 className={styles.header}>TURN POINTS INTO REWARDS</h4>
            <h5 className={styles.description}>Rewards start at just 150 points – only $15 spent!</h5>
          </div>
          <div className={styles.box}>
            <img src={boosted} alt="img" className={styles.img}/>
            <h4 className={styles.header}>UNLOCK BOOSTED STATUS</h4>
            <h5 className={styles.description}>12 visits in a calendar month earns 12 points per dollar!</h5>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.signUp}>SIGN UP</button>
          <button className={styles.learnMore}>LEARN MORE</button>
        </div>
      </div>

      <div className={styles.boxContainer3}>
        <div className={styles.box1}>
          <div className={styles.header1}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <h1 className={styles.doneEasy}>DONE EASY</h1> 
          </div>
          <h4 className={styles.header2}>
            Find a store, place your order and get on your way with the Dunkin’ App
          </h4>
          <ul className={styles.ul}>
            <li className={styles.li}>Order ahead and pay from your phone</li>
            <li className={styles.li}>Join Dunkin’ Rewards and earn points towards free food and beverages</li>
            <li className={styles.li}>Earn exclusive offers and rewards</li>
          </ul>
          <div className={styles.buttons}>
            <img src={AppStore} alt="AppStore" className={styles.button}/>
            <img src={GooglePlayStore} alt="GooglePlayStore" className={styles.button}/>
          </div>
        </div>
        <img src={iphone_web} alt="img" className={styles.box2}/>
      </div>
      
      <div className={styles.boxContainer4}>
        <img src={dunkinRun} alt="img" className={styles.box1}/>
        <div className={styles.box2}>
          <h1 className={styles.header1}>TIME FOR A</h1>
          <h1 className={styles.header2}>DUNKIN<span className={styles.quotationMark}>’ </span> RUN</h1>
          <h4 className={styles.header3}>Great deals on food with a medium or larger coffee</h4>
          <button className={styles.button}>VIEW MENU</button>
          <h6 className={styles.description}>$3 offer available on sausage egg and cheese sandwich only. Excludes specialty donuts and fancies. Price and participation may vary. Limited time offer. Terms apply.</h6>
        </div>
      </div>

      <div className={styles.boxContainer5}>
        <div className={styles.box}>
          <h5 className={styles.header1}>Sipping is Believing</h5>
          <h4 className={styles.header2}>HAND CRAFTED ESPRESSO DRINKS</h4>
          <img src={Expresso} alt="Expresso" className={styles.img}/>
        </div>
        <div className={styles.box}>
          <h5 className={styles.header1}>Freshly Made</h5>
          <h4 className={styles.header2}>ALL-DAY BREAKFAST SANDWICHES</h4>
          <img src={Croissant} alt="Croissant" className={styles.img}/>
        </div>
        <div className={styles.box}>
          <h5 className={styles.header1}>Dunkin’ Classic</h5>
          <h4 className={styles.header2}>HOT COFFEE</h4>
          <img src={coffee} alt="coffee" className={styles.img}/>
        </div>
      </div>

      <div className={styles.boxContainer6}>
        <div className={styles.box1}>
          <h1 className={styles.header}>
            GIVE THE GIFT OF GO
          </h1>
          <h5 className={styles.description}>
            You got the go. We got the keep going. Send a friend a boost on you!
          </h5>
          <button className={styles.button}>
            SEND AN E-GIFT CARD
          </button>
        </div>
        <img src={cards} alt='cards' className={styles.box2}/>
      </div>

      <div className={styles.boxContainer7}>
        <img src={googleMap} alt='googleMap' className={styles.box1}/>
        <div className={styles.box2}>
          <h1 className={styles.header1}>
            COME VISIT
          </h1>
          <h4 className={styles.header2}>
            Find a Dunkin' Near You
          </h4>
          <button className={styles.button}>
            VIEW LOCATIONS 
          </button>
        </div>
      </div>

      <div className={styles.footer}>

        <div className={styles.box1}>
          <div className={styles.smallBox1}>
            <h5 className={styles.header}>QUICK LINKS</h5>
            <div className={styles.links}>
              <h6 className={styles.link}>Press Room</h6>
              <h6 className={styles.link}>Mobile App</h6>
              <h6 className={styles.link}>Corporate</h6>
              <h6 className={styles.link}>Sustainability</h6>
              <h6 className={styles.link}>About Us</h6>
              <h6 className={styles.link}>Franchising</h6>
              <h6 className={styles.link}>Contact Us</h6>
              <h6 className={styles.link}>Site Map</h6>
            </div>
          </div>
          <div className={styles.smallBox2}>
            <h5 className={styles.header2}>
              FOLLOW US
            </h5>
            <div className={styles.icons}>
              <img src={twitter} alt="twitter" className={styles.icon}/>
              <img src={facebook} alt="facebook" className={styles.icon}/>
              <img src={pinterest} alt="pinterest" className={styles.icon}/>
              <img src={insta} alt="insta" className={styles.icon}/>
              <img src={youtube} alt="youtube" className={styles.icon}/>
              <img src={tiktok} alt="tiktok" className={styles.icon}/>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.item1}>
            <div className={styles.line}></div>
            <h5 className={styles.heading}>OUR PARTNERS</h5>
            <div className={styles.line}></div>
          </div>
          <div className={styles.item2}>
            <img src={JetBlue} alt="JetBlue" className={styles.img}/>
            <img src={BR} alt="BR" className={styles.img}/>
          </div>
        </div>

        <div className={styles.box3}>
          <div className={styles.links}>
            <h6 className={styles.link}>Terms of Use</h6>
            <h6 className={styles.link}>Privacy Policy</h6>
            <h6 className={styles.link}>Do Not Sell My Personal Info</h6>
            <h6 className={styles.link}>CA & VA Privacy</h6>
            <h6 className={styles.link}>Your Ad Choices</h6>
            <h6 className={styles.link}>CA Transparency in Supply Chains Act</h6>
            <h6 className={styles.link}>Web Accessibility</h6>
          </div>
          <div className={styles.credit}>
            <h5 className={styles.buskinCredit}>This website is a clone-project of <Link target='_blank' to='https://www.dunkindonuts.com/en' className={styles.dunkinLink}> Dunkin' Donuts</Link></h5>
            <h6 className={styles.salamaCredit}>©2023 developed by <Link target='_blank' to='https://salama-portfolio.web.app/' className={styles.salamaLink}>Mahmoud Salama</Link></h6>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home