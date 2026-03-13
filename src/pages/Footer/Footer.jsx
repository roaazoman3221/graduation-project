    import "./Footer.css";
    import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

    const Footer = () => {
    return (
        <footer className="footer">

        <div className="footer-line"></div>

        <div className="footer-container">

            <p className="footer-left">
            © 2026. All Rights Reserved
            </p>

            <p className="footer-center">
            Development by <span>Roaa</span>
            </p>

            <div className="footer-social">

            <a 
                href="https://www.facebook.com/share/1B4fCScqy3/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"    
            >
                <FaFacebookF />
            </a>

            <a 
                href="https://github.com/roaazoman3221"
                target="_blank"
                rel="noopener noreferrer"    
            >
                <FaGithub />
            </a>

            <a 
                href="https://www.linkedin.com/in/roaa-alzuman-236a8b353?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn />
            </a>

            <a 
                href="https://www.instagram.com/roaa_zoman?igsh=NXNwYmloYXY1a21h&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"    
            >
                <FaInstagram />
            </a>

            </div>

        </div>

        </footer>
    );
    };

    export default Footer;