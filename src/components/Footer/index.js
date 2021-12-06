import "./index.css";

function Footer() {
    return (
        <div className="footer">
            <hr/>
            <div>
                <div>
                    <img src="https://dieselpunkcore.com/wp-content/uploads/2014/06/logo-placeholder.png" alt="" width={'50px'} height={'50px'}/>
                    <p>© 2021 SonNK, Inc.</p>
                </div>
                <span className="footerLink">
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Security</a>
                    <a href="">Docs</a>
                    <a href="">Training</a>
                    <a href="">Blog</a>
                    <a href="">About</a>
                </span>
            </div>
        </div>
    );
}

export default Footer;