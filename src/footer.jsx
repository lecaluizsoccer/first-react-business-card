import linkedln from './images/linkedln.png'
import tiktok from "./images/tiktok.png";
import twiter from "./images/twiter.png";
import instagram from "./images/instagram.png";


export default function Footer() {
  return (
    <footer className="footer">
      <img src={linkedln} alt="Linkedln" />
      <img src={tiktok} alt="TikTok" />
      <img src={twiter} alt="Twitter" />
      <img src={instagram} alt="Instagram" />
    </footer>
  );
}
