function Footer(){
    return (
        <footer>
            <div className="footer-container">
                <div className="aboutme">
                    <p className="footer-heading">Who we are</p>
                    <p>
                        Greetings and welcome! 
                        I'm thrilled to share a glimpse of who I am 
                        and what drives me.
                    </p>
                    <p>
                        I'm passionate about crafting digital experiences 
                        that blend creativity and functionality. 
                        As a dedicated full-stack developer, 
                        I thrive on bringing ideas to life through elegant code and 
                        intuitive user interfaces.
                    </p>
                    <p>
                        On the front-end, I specialize in turning designs into responsive and 
                        engaging user interfaces. I'm well-versed in HTML, CSS, and JavaScript, 
                        and I keep up with the latest trends to create seamless and enjoyable user experiences. 
                        Whether it's a single-page application or a complex web portal, 
                        I ensure that the user interface remains visually appealing and user-friendly.
                    </p>
                    <p>
                        In the back-end realm, I'm no stranger to databases, server logic, and APIs. 
                        My toolkit includes languages such as JavaScript, Python and frameworks like Node.js and Django. 
                        I enjoy architecting the backbone of applications, optimizing performance, and ensuring data security. 
                        The magic of making data easily accessible and managing the intricate workings of an application's core is what keeps me motivated.
                    </p>

                    <p className="footer-heading">Skills</p>

                    <p>HTML | CSS | JavaScript | Python | Flask | 
                        React | Node.js | Express | Mongodb
                    </p>
                </div>
                <hr/>

                <div className="others">
                    <div className="links">
                        <p className="footer-heading">Useful Links</p>
                        <ul>
                            <li>
                            <a href="/">Home</a>
                            </li>
                            {/* <li><hr/></li> */}
                            <li>
                            <a href="/services">Services</a>
                            </li>
                            {/* <li><hr/></li> */}
                            <li>
                            <a href="/about">About</a>
                            </li>
                            {/* <li><hr/></li> */}
                            <li>
                            <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-details">
                        <p className="footer-heading">Contact</p>
                        <ul>
                            <li><span>Address :</span> Greater Noida, Uttar Pradesh, India</li>
                            
                            <li><span>Phone :</span> 7983748982</li>

                            <li><span>Email :</span> othermail.harshit@gmail.com</li>
                        </ul>

                    </div>
                    
                </div>

            </div>
            <div className="copyright">
                <p>© 2023 InnovateWeb Advisors</p>
            </div>
        </footer>
    )
}

export default Footer