import ReactTyped from "react-typed";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Link } from "@mui/material"
import img1 from "../assets/images/Business-stratagy.webp"
import img2 from "../assets/images/digi-trans.webp"
import img3 from "../assets/images/fin-ad.png"
import img4 from "../assets/images/branding.png"
import img5 from "../assets/images/hr.png"
import img6 from "../assets/images/dat.webp"
import img7 from "../assets/images/contactus.gif"
import Card from "../components/Card"
import icon1 from "../assets/images/sales-team.png"
import icon2 from "../assets/images/transformation.png"
import icon3 from "../assets/images/public-relations.png"
import icon4 from "../assets/images/financial-advisor.png"
import icon5 from "../assets/images/consultation.png"
import icon6 from "../assets/images/analysis.png"

function Home() {
    
    const navigate = useNavigate()

    const theme = createTheme({
        palette: {
          primary: {
            main: '#ffffff',
          }
        },
        typography: {
            button: {
              fontSize: '15px',
            },
          },
      });



    const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
        color: theme.palette[color].main,
        border: "1px solid white", 
        boxShadow: "0 0 20px #ffffff"
    },
        border: "1px solid white", 
        boxShadow: "0 0 10px #ffffff"
    }));

    const handleClick = () => {
        navigate("/Contactus")
    }



    return (
        <main className="page-main">
            <div className="Home">
{/* first container */}

                <div className="first-container">
                    <div className="heading">
                        <h1>Welcome to {" "}
                            <ReactTyped 
                                strings={["InnovateWeb", "Advisors"]} 
                                typeSpeed={100} 
                                loop
                                backSpeed={50}
                            />
                        </h1>
                        <h3>Your Partner in Success</h3>
                    </div>


                    <div className="about-home">
                        <p>At InnovateWeb, we are dedicated to helping businesses and individuals thrive in today's dynamic and ever-evolving landscape.
                            Our team of experienced consultants brings a wealth of knowledge and expertise to provide tailored solutions that drive growth, 
                            efficiency, and innovation. With a track record of success across various industries, 
                            we are your trusted partners in achieving your goals.
                        </p>
                    </div>
                    

                    <div className="request-button">
                    <ThemeProvider theme={theme}>
                        <Stack spacing={4} direction="row">
                            <StyledButton variant="outlined" color="primary" onClick={handleClick}>
                                GET IN TOUCH
                            </StyledButton>
                            <StyledButton variant="outlined" color="primary" onClick={handleClick}>
                                REQUEST A QUOTE
                            </StyledButton>
                        </Stack>
                    </ThemeProvider>
                    </div>
                </div>

{/* second container */}

                <div className="second-container" id="second-container">
                    <div className="container-heading">Our Services</div>
                    <div className="card-container">
                        <Card 
                            image={icon1} 
                            alt="Business Strategy Consulting"
                            heading="Business Strategy Consulting"
                            paragraph="Crafting a winning business strategy is the foundation of success. 
                            Our consultants work closely with you to analyze market trends, 
                            competition, and opportunities, helping you define a clear and 
                            actionable strategy that aligns with your objectives."/>
                        <Card 
                            image={icon2} 
                            alt="Digital Transformation"
                            heading="Digital Transformation"
                            paragraph="Embrace the digital age with confidence. 
                            Our experts guide you through the process of digital transformation, 
                            from technology integration to optimizing customer experiences, 
                            ensuring your business remains competitive in the digital landscape.
                            "/>
                        <Card 
                            image={icon3} 
                            alt="Marketing and Branding"
                            heading="Marketing and Branding"
                            paragraph="Stand out in a crowded marketplace. We help you create compelling brand stories, develop effective marketing campaigns, and establish a strong online presence to attract and retain customers."
                        />
                        <Card 
                            image={icon4} 
                            alt="Financial Advisory"
                            heading="Financial Advisory"
                            paragraph="Unlock the full potential of your financial resources. 
                            Our financial consultants offer insights into managing budgets, 
                            making smart investments, and improving overall financial health, 
                             while minimizing risks."
                        />
                        <Card 
                            image={icon5} 
                            alt="Human Resources Consulting"
                            heading="Human Resources Consulting"
                            paragraph="Your people are your greatest asset. Our HR consultants assist you in building a motivated workforce, from talent acquisition and development to performance management and employee engagement strategies."
                        />
                        <Card 
                            image={icon6} 
                            alt="Data Analytics and Insights"
                            heading="Data Analytics and Insights"
                            paragraph="Make informed decisions backed by data. Our data analysts provide in-depth insights that drive business growth, optimize operations, and enhance customer satisfaction."
                        />
                    </div>
                </div>

                <div className="contactus-gif">
                    <Link onClick={handleClick}>
                    <img src={img7} className="img7" alt="Contact us" />
                    </Link>
                </div>

{/* third container */}

                <div className="third-container">
                <div className="container-heading">Why Choose InnovateWeb Advisors?</div>
                    <div className="flex-container">
                        <div className="item1">
                            <img src={img1} className="img1" alt="Business Strategy Consulting"/>
                            <div className="item-content">
                                <h3>Experienced Consultants</h3>
                                <p>Our team consists of industry veterans with a proven track record of delivering results.</p>
                            </div>
                        </div>

                        <div className="item2">
                            <div className="item-content">
                                <h3>Tailored Solutions</h3>
                                <p>We understand that every business is unique. Our solutions are customized to address your specific challenges and opportunities.</p>
                            </div>
                            <img src={img2} className="img2" alt="Digital Transformation" />
                        </div>
                        <div className="item3">
                            <img src={img3} className="img3" alt="Financial Advisory" />
                            <div className="item-content">
                                <h3>Client-Centric Approach</h3>
                                <p>Your success is our top priority. We work collaboratively, keeping you informed and involved throughout the consulting process.
                                </p>
                            </div>
                        </div>
                        <div className="item4">
                            <div className="item-content">
                            <h3>Innovation and Adaptability</h3>
                                <p>The business landscape evolves rapidly. We stay ahead of the curve, offering innovative strategies that adapt to changing market conditions.</p>
                            </div>
                            <img src={img4} className="img4" alt="Marketing and Branding" />
                        </div>
                        <div className="item5">
                            <img src={img5} className="img5" alt="Human Resources Consulting" />
                            <div className="item-content">
                            <h3>Proven Results</h3>
                                <p>Our portfolio is filled with success stories of clients who have achieved significant growth and transformation with our guidance.</p>
                            </div>
                        </div>
                        <div className="item6">
                            <div className="item-content">
                            <h3>Data Analytics and Insights</h3>
                                <p>Make informed decisions backed by data. Our data analysts provide in-depth insights that drive business growth, optimize operations, and enhance customer satisfaction.
                                </p>
                            </div>
                            <img src={img6} className="img6" alt="Business Strategy Consulting" />
                        </div>
                    </div>
                </div>


{/* Fourth container */}

                <div className="forth-container">
                    <div className="container-heading">
                        <p>Get Started on Your Journey to Success</p>
                    </div>


                    <div className="content">
                        <p>
                            Whether you're a startup looking to establish your presence, 
                            an established business aiming for growth, 
                            or an individual seeking personal development, <strong>InnovateWeb Advisors</strong> is here to guide you. 
                            Contact us today for a consultation and take the first step towards unlocking your full potential.
                        </p>
                    </div>

                    <div className="contact-button">
                        <StyledButton variant="contained" color="primary" size="large" onClick={handleClick}>
                                CONTACT US
                        </StyledButton>
                    </div>

                    <div className="content">
                        <p>Transform challenges into opportunities with <strong>InnovateWeb Advisors</strong>. 
                            Your success story begins here.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home