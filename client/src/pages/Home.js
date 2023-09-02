import ReactTyped from "react-typed";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { Link } from "@mui/material"
import img1 from "../assets/images/experienced-professionals.png"
import img2 from "../assets/images/tailored-solutions.png"
import img3 from "../assets/images/Client-Centric.png"
import img4 from "../assets/images/Innovation.png"
import img5 from "../assets/images/Results.png"
import img6 from "../assets/images/dat.webp"
// import img7 from "../assets/images/contactus.gif"
import Card from "../components/Card"
import icon1 from "../assets/images/coding.png"
import icon2 from "../assets/images/content-strategy.png"
import icon3 from "../assets/images/solutions.png"
import icon4 from "../assets/images/Custom Development.png"
import icon5 from "../assets/images/web-development.png"
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
                    <div className="home-heading">
                        <h1>Welcome to {" "}
                            <ReactTyped 
                                strings={["InnovateWeb", "Advisors"]} 
                                typeSpeed={100} 
                                loop
                                backSpeed={50}
                            />
                        </h1>
                        <h4>Empowering Your Online Presence</h4>
                    </div>


                    <div className="home-intro">
                        <p>At InnovateWeb Advisors, we're not just another web consultancy. 
                            We are your partners in transforming your digital presence into a 
                            powerful tool that drives success. Our mission is to provide cutting-edge 
                            web solutions tailored to your unique needs, ensuring your business stands 
                            out in the digital landscape.
                        </p>
                    </div>
                    

                    <div className="request-button">
                    <ThemeProvider theme={theme}>
                        <Stack spacing={4} direction="row">
                            <StyledButton variant="outlined" color="primary" onClick={handleClick}>
                                GET IN TOUCH
                            </StyledButton>
                            {/* <StyledButton variant="outlined" color="primary" onClick={handleClick}>
                                REQUEST A QUOTE
                            </StyledButton> */}
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
                            alt="Web Design and Development"
                            heading="Web Design and Development"
                            paragraph=" Our expert team of designers and developers work hand 
                            in hand to create visually stunning and highly functional websites. 
                            We take pride in crafting websites that not only capture attention 
                            but also offer seamless user experiences. From responsive designs to 
                            e-commerce solutions, we've got you covered."/>
                        <Card 
                            image={icon2} 
                            alt="Digital Strategy"
                            heading="Digital Strategy"
                            paragraph=" The online world is ever-evolving, and we're here to guide 
                            you through it. Our strategic approach aligns your business goals with
                             the digital landscape, ensuring that your online presence doesn't just
                              exist, but thrives. We offer comprehensive digital strategy services, 
                              including SEO, content strategy, and social media marketing."/>
                        <Card 
                            image={icon3} 
                            alt="E-commerce Solutions"
                            heading="E-commerce Solutions"
                            paragraph="Ready to take your products online? Our e-commerce expertise 
                            can help you establish a robust online store that caters to your target 
                            audience. From setting up secure payment gateways to optimizing product 
                            listings, we make selling online a breeze."
                        />
                        <Card 
                            image={icon4} 
                            alt="Custom Development"
                            heading="Custom Development"
                            paragraph="Your business is unique, and so should be your website. Our 
                            custom development services give you the freedom to create tailored solutions 
                            that cater to your specific requirements. Whether it's a customer portal, a 
                            booking system, or a niche-specific tool, we bring your ideas to life."
                        />
                        <Card 
                            image={icon5} 
                            alt="Website Audits and Optimization"
                            heading="Website Audits and Optimization"
                            paragraph="Is your existing website not performing as expected? Our team conducts
                             in-depth website audits to identify bottlenecks and opportunities for improvement.
                              We then optimize your site for speed, user experience, and search engine visibility,
                               ensuring it reaches its full potential."
                        />
                        <Card 
                            image={icon6} 
                            alt="Data Analytics and Insights"
                            heading="Data Analytics and Insights"
                            paragraph="Make informed decisions backed by data. Our data analysts provide 
                            in-depth insights that drive business growth, optimize operations, and enhance 
                            customer satisfaction."
                        />
                    </div>
                </div>

{/* third container */}
                
                <div className="third-container-heading">Why Choose InnovateWeb Advisors?</div>
                <div className="third-container">
                    <div className="flex-container">
                        <div className="item1">
                            <img src={img1} className="img1" alt="Business Strategy Consulting"/>
                            <div className="item-content">
                                <h3>Experienced Professionals</h3>
                                <p>Our team comprises seasoned experts in web design, development, digital marketing, 
                                    and more. With years of industry experience, we know what it takes to succeed in the 
                                    online realm.</p>
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
                            <h3>Results-Driven</h3>
                                <p> Your success is our success. We are committed to delivering tangible results that positively impact your business. Whether it's increased website traffic, higher conversion rates, or improved user engagement, we're here to make it happen.</p>
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

                {/* <div className="contactus-gif">
                    <Link onClick={handleClick}>
                    <img src={img7} className="img7" alt="Contact us" />
                    </Link>
                </div> */}


{/* Fourth container */}

                <div className="forth-container">
                    <div className="container-heading">
                        <p>Ready to elevate your online presence?</p>
                    </div>


                    <div className="content">
                        <p>Contact us today for a free consultation. 
                            Let's discuss how <strong>InnovateWeb Advisors</strong> 
                            can take your digital journey to new heights. Together, 
                            let's build a digital presence that leaves a lasting impression.
                        </p>
                    </div>

                    <div className="contact-button">
                        <ThemeProvider theme={theme}>
                            <StyledButton variant="outlined" color="primary" onClick={handleClick}>
                                Contact Us
                            </StyledButton>
                        </ThemeProvider>
                    </div>

                    <div className="content">
                        <p>Remember, the online world is waiting and we're here to make sure you shine in it.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home