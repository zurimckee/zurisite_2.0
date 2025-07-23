//import LandingDrag from '../components/LandingDrag';
import Footer from  '../components/Footer';
import type { JSX } from 'react';

const Contact = (): JSX.Element => {
    return(
         <h1 className="blog-h1"> 
            hit me up!
            <hr/>
            <div className="contact-container">
                <p>
                    <a href="https://github.com/zurimckee" target="_blank">
                        <i className="fa-brands fa-github"></i> 
                    </a>
                    <a href="www.linkedin.com/in/zuri-mckee-113374281" target="_blank"> 
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://letterboxd.com/zurikeemc/" target="_blank">
                        <i className="fa-solid fa-clapperboard"></i>
                    </a>
                    <a href="https://www.pinterest.com/zurikeemc/" target="_blank">
                        <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="https://open.spotify.com/user/awesomekid117?si=40be587d263d423f" target="_blank">
                        <i className="fa-brands fa-spotify"></i>
                    </a>
                </p>
            </div>
        <br/>
            <Footer/>
                email me for important stuff
                    <br/>
                <address>@zurimckee95@gmail.com</address>
            </h1>
    )
};

export default Contact;