const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <div>
                        <a href="https://github.com/NavyaSaxena29"><img src="assets/github.svg" alt="github"
                                                                        className="w-8 h-8"/></a>
                    </div>
                </div>
                <div className="social-icon">
                    <div>
                        <a href="https://www.linkedin.com/in/navyasaxena29/"><img src="assets/linkedin.png"
                                                                                  alt="linkedin"
                                                                                  className="w h"/></a>
                    </div>
                </div>
            </div>

            <p className="text-white-500">© 2025 Navya Saxena. All rights reserved.</p>
        </footer>
    );
};

export default Footer;