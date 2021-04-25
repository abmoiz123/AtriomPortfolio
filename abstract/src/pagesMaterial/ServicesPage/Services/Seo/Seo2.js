import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Seo2 extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-image: url(${servicebackgroundimage});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 50px 0;
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `

        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Search Engine Optimization" />
                        <Row className="services_row">
                            <Col className="service_img_col" md={6} sm={12} xs={12}>
                                <img className="service_img" src={servicebackgroundimage} alt="Search Engine Optimization" />
                            </Col>
                            <Col className="service_text_col" md={6} sm={12} xs={12}>
                                <p className="service_para">
                                    It is an aggregate of strategies, tactics, and techniques utilized to increase traffic flow to your website. It happens through ranking in search engine results, including Bing, Google, and Yahoo. Therefore, we also offer optimizing services for your website to get organic traffic flow on the search engine results page.
                                <br />
                                We will help you craft content that rank’s high in the search engines. It is not really about stuffing your website with keywords, but instead a better understanding of the content.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Seo2;



// import React from 'react'
// import {
//     Container,
//     Row,
//     Col,
// } from 'react-bootstrap'
// import styled from 'styled-components'
// import servicebackgroundimage from '../../../../../static/polygonz.png'
// import Particles from 'react-particles-js';
// import '../projects/Projects.css'

// class Webdevlopment3 extends React.Component {
//     render() {
//         const Section = styled.section`
//             position: relative;
//             overflow: hidden; 
//             background-color: #013567;
//             .particles {
//                 position: absolute;
//                 width: 100%;
//                 height: 100%;
//             }
//             .heading {
//                 width: 100%;
//             }
//           }
//         `

//         const ServiceContainer = styled.div`
//             padding: 50px 0;
//             @media (max-width:767px) {
//                 padding: 20px 0;
//             }
//         `

//         return (
//             <Section>
//                 <Particles
//                     className="particles"
//                     params={{
//                         "particles": {
//                             "number": {
//                                 "value": 100,
//                                 "density": {
//                                     "enable": true,
//                                     "value_area": 2000
//                                 }
//                             },
//                             "color": {
//                                 // "value": ["#03afaf", "#04e5e5"]
//                                 "value": ["#f6b10a", "#f6b10a"]
//                             },
//                             "shape": {
//                                 "type": "circle",
//                                 "stroke": {
//                                     "width": 0,
//                                     "color": "#fff"
//                                 }
//                             },
//                             "opacity": {
//                                 "value": 0.5,
//                                 "random": false,
//                                 "anim": {
//                                     "enable": true,
//                                     "speed": 0.5,
//                                     "opacity_min": 0.1,
//                                     "sync": false
//                                 }
//                             },
//                             "size": {
//                                 "value": 8.017060304327615,
//                                 "random": true,
//                                 "anim": {
//                                     "enable": true,
//                                     "speed": 12.181158184520175,
//                                     "size_min": 0.1,
//                                     "sync": true
//                                 }
//                             },
//                             "line_linked": {
//                                 "enable": true,
//                                 "distance": 150,
//                                 "color": this.context.theme === "dark" ? "#fff" : "#555",
//                                 // "color": this.context.theme === "dark" ? "#fff" : "#fff",
//                                 "opacity": 0.5,
//                                 "width": 1
//                             },
//                             "move": {
//                                 "enable": true,
//                                 "speed": 1,
//                                 "direction": "none",
//                                 "random": false,
//                                 "straight": false,
//                                 "out_mode": "bounce",
//                                 "bounce": false,
//                                 "attract": {
//                                     "enable": false,
//                                     "rotateX": 600,
//                                     "rotateY": 1200
//                                 }
//                             }
//                         },
//                         "interactivity": {
//                             "detect_on": "canvas",
//                             "events": {
//                                 "onhover": {
//                                     "enable": false,
//                                     "mode": "repulse"
//                                 },
//                                 "onclick": {
//                                     "enable": false,
//                                     "mode": "push"
//                                 },
//                                 "resize": true
//                             },
//                             "modes": {
//                                 "grab": {
//                                     "distance": 400,
//                                     "line_linked": {
//                                         "opacity": 1
//                                     }
//                                 },
//                                 "bubble": {
//                                     "distance": 400,
//                                     "size": 40,
//                                     "duration": 2,
//                                     "opacity": 8,
//                                     "speed": 3
//                                 },
//                                 "repulse": {
//                                     "distance": 200,
//                                     "duration": 0.4
//                                 },
//                                 "push": {
//                                     "particles_nb": 4
//                                 },
//                                 "remove": {
//                                     "particles_nb": 2
//                                 }
//                             }
//                         },
//                         "retina_detect": true
//                     }} />
//                 <ServiceContainer>
//                     <Container>
//                         <Row className="services_define_row">
//                             <Col className="service_define_text_col" md={6} sm={12} xs={12}>
//                                 <h3 className="service_define_heading">Here Web Development Specialists Add Perfection In Your Project</h3>
//                                 <div className="service_separator"></div>
//                                 <p className="service_define_para">When it comes to growing a business in the current era, you must need your own website. If you want to have a successful business, you must need a responsive website immediately. Here at Digital Graphiks, our website development solutions are onboard to attract your desired audience.
//                                 </p>
//                                 <p className="service_define_para">Our web page development specialists aim to develop a customer-centric and tangible website for your business. Balanced information about any product on a web page is what we aim for; hence, it does get a bit challenging, but we overcome it seamlessly.
//                                 </p>
//                             </Col>
//                             <Col className="service_define_img_col" md={6} sm={12} xs={12}>
//                                 <img className="service_define_img" src={servicebackgroundimage} alt="Web-devlopment" />
//                             </Col>
//                         </Row>
//                         <Row className="services_define_row">
//                             <Col className="service_define_text_col" md={6} sm={12} xs={12}>
//                                 <h3 className="service_define_heading">Award Winning Best Web Development Company In Karachi, Pakistan</h3>
//                                 <div className="service_separator"></div>
//                                 <p className="service_define_para">While being one of the top web development companies, we are also well-known because of the outsource web development services. Website experts in our company have vast experience in web languages like C++, Python, PHP, and many more. We work dedicatedly on every project to make sure our client gets his work done quickly and efficiently.
//                                 </p>
//                                 <p className="service_define_para">Indeed, a satisfied client is what our agency wants, and during every web development project, we do face a number of challenges. Our clients consider us as the best website development company because our development team never gives up on any challenge; they accept and win their target seamlessly.
//                                 </p>
//                                 <p className="service_define_para">Throughout a website development journey, our team full of experts ensure that our clients will get frequent updates. By frequent updates means we can make any changes accordingly without delaying further.
//                                 </p>
//                             </Col>
//                             <Col className="service_img_col" md={6} sm={12} xs={12}>
//                                 <h3 className="service_define_heading">You Want an Efficient Landing Page Development; You Got it!</h3>
//                                 <div className="service_separator"></div>
//                                 <p className="service_define_para">Nowadays, every business owner wishes to increase his business and brand to be known around the world. For such achievement, you need a website that is easily accessible and functional on mobile and other devices. We are the experts in bringing the best platform for web development in every project. Even our basic web development procedure aims to bring responsiveness to it.
//                                 </p>
//                                 <p className="service_define_para">Web development online is also our expertise. By delivering an optimal performance with high-quality features that will appear on multiple devices without hanging, we show the world that we are the best responsive web developers of all. Starting our journey from basic web development to a high-performance site is completed when we get our client’s satisfaction.
//                                 </p>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </ServiceContainer>
//             </Section>
//         )
//     }

// }

// export default Webdevlopment3;