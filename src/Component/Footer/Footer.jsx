import "./Footer.css";

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer__container container">
                <h1 className="footer title">Mesh</h1>

                <ul className="footer__list">
                    <p style={{color:"red",marginBottom:"1rem"}}>Main</p>
                    <li>
                        <a href="index.html" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/meshgawar24/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                        LinkedIn
                    </a>

                    <a href="https://github.com/meshgawar/" className="footer__social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                        GitHub
                    </a>
                    <a href="https://www.youtube.com/" className="footer__social-link">
                        <i className="bx bxl-youtube "></i>
                        YouTube
                    </a>
                    <a href="https://leetcode.com/u/meshgawar24/" className="footer__social-link" target="_blank">
                        <i className="bxl  bx-leetcode "></i>
                        Leetcode
                    </a>
                </div>

                <span className="footer__copy">&#169; Mesh Gawar. All rights reserved</span>
            </div>
        </section>
    );
}