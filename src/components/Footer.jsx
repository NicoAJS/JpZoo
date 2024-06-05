import face from "../assets/face.png";
import insta from "../assets/insta.png";
import website from "../assets/website.png";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="soMe">
                    <a href="https://www.instagram.com/jyllandsparkzoo/"><img src={face} alt="Facebook" /></a>
                    <a href="https://www.facebook.com/JyllandsParkZoo/?locale=da_DK"><img src={insta} alt="Instagram" /></a>
                    <a href="https://jyllandsparkzoo.dk/da"><img src={website} alt="Jyllands Park Zoo Hjemmeside" /></a>
                </div>
                <img className="footerLogo" src={logo} alt="Logo" />
            </div>
        </>
    );
}
