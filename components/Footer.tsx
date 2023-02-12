import Styles from '@styles/footer.module.scss'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'




export default function Footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.footerContent}>
          <div className={Styles.footerInner}>
            <img src="/images/logo-white.svg" alt="Funda Paints Logo" className="logo" />
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
          <div className={Styles.footerNav}>
            <label htmlFor="footer-contact">
              <p>Stay up to date on the latest from Fundamental Technology</p>
              <span className={Styles.formInput}>
                <input type="text" id="footer-contact" placeholder="Enter Your Email Address" />
                <button type="submit"> Submit </button>
              </span>
            </label>
            <nav className={Styles.footerNavInner}>
              <dl>
                <dt>Support</dt>
                <dd>Contact Us</dd>
                <dd>FAQ</dd>
                <dd>Consultation</dd>
              </dl>
              <dl>
                <dt>Fundamental Technology</dt>
                <dd>About Us</dd>
                <dd>Our Products</dd>
                <dd>Newsroom</dd>
              </dl>
            </nav>
          </div>
        </div>
        <div className={Styles.footerBottom}>
          <p>Copyright &copy; {new Date().getFullYear()} Funda Technology</p>
          <p>Powered by Funda Technology</p>
        </div>
      </footer>
    </>
  )
}
