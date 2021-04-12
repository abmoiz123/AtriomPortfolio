import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import Particles from 'react-particles-js';
import clientsimg from './ClientsImages'
import './Clients.css'
class ClientsPage extends React.Component {

    constructor() {
        super()
        this.state = {
            clients: [
                {
                    id: 1,
                    clientlogo: clientsimg.client01,
                    clientproject: "Vape",
                    link: "https://a2zutility.com/",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 2,
                    clientlogo: clientsimg.client02,
                    clientproject: "xport buy",
                    link: "https://xportbuy.com/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 3,
                    clientlogo: clientsimg.client03,
                    clientproject: "Commerce startups",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 4,
                    clientlogo: clientsimg.client04,
                    clientproject: "lamaisah",
                    link: "/Clients",
                    fadein: 'fadeInRight'
                },
                {
                    id: 5,
                    clientlogo: clientsimg.client05,
                    clientproject: "Rolling creek",
                    link: "https://rollingcreekcarwashandlubecenter.com/",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 6,
                    clientlogo: clientsimg.client06,
                    clientproject: "Ak Cell",
                    link: "http://akcelltrader.com/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 7,
                    clientlogo: clientsimg.client07,
                    clientproject: "World travel 4u",
                    link: "https://worldtravel4u.net/",
                    fadein: 'fadeInUp'
                },
                {
                    id: 8,
                    clientlogo: clientsimg.client08,
                    clientproject: "voxly decor",
                    link: "https://voxlydecor.co.uk/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 9,
                    clientlogo: clientsimg.client09,
                    clientproject: "Big Mape Apparel",
                    link: "https://bigmapeapparel.com/",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 10,
                    clientlogo: clientsimg.client10,
                    clientproject: "smarter kN tools",
                    link: "/Clients",
                    fadein: 'fadeInDown'
                },
                {
                    id: 11,
                    clientlogo: clientsimg.client11,
                    clientproject: "New gen",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 12,
                    clientlogo: clientsimg.client12,
                    clientproject: "Make up sea",
                    link: "/Clients",
                    fadein: 'fadeInRight'
                },
                {
                    id: 13,
                    clientlogo: clientsimg.client13,
                    clientproject: "TJ miller",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 14,
                    clientlogo: clientsimg.client14,
                    clientproject: "Zaiqa delivery",
                    link: "https://zaiqadelivery.com/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 15,
                    clientlogo: clientsimg.client15,
                    clientproject: "smarty decor",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 16,
                    clientlogo: clientsimg.client16,
                    clientproject: "district properties",
                    link: "http://www.districtproperties.co.uk/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 17,
                    clientlogo: clientsimg.client17,
                    clientproject: "petsy mart",
                    link: "https://petsymart.com/",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 18,
                    clientlogo: clientsimg.client18,
                    clientproject: "Rawls",
                    link: "/Clients",
                    fadein: 'fadeInDown'
                },
                {
                    id: 19,
                    clientlogo: clientsimg.client19,
                    clientproject: "the beauty stocks",
                    link: "https://thebeautystocks.com/",
                    fadein: 'fadeInUp'
                },
                {
                    id: 20,
                    clientlogo: clientsimg.client20,
                    clientproject: "gadgetry town",
                    link: "https://gadgetrytown.com/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 21,
                    clientlogo: clientsimg.client21,
                    clientproject: "leather outlet",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 22,
                    clientlogo: clientsimg.client22,
                    clientproject: "nestorenile",
                    link: "/Clients",
                    fadein: 'fadeInDown'
                },
                {
                    id: 23,
                    clientlogo: clientsimg.client23,
                    clientproject: "SP emporium",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 24,
                    clientlogo: clientsimg.client24,
                    clientproject: "big map clothing",
                    link: "https://bigmapclothing.com.pk",
                    fadein: 'fadeInRight'
                },
                {
                    id: 25,
                    clientlogo: clientsimg.client25,
                    clientproject: "petsy bugs",
                    link: "https://petsybugs.com/",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 26,
                    clientlogo: clientsimg.client26,
                    clientproject: "zac traders",
                    link: "https://zactraderltd.com/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 27,
                    clientlogo: clientsimg.client27,
                    clientproject: "sparkhill freight",
                    link: "http://sparkhillfreight.co.uk/",
                    fadein: 'fadeInUp'
                },
                {
                    id: 28,
                    clientlogo: clientsimg.client28,
                    clientproject: "arina decor",
                    link: "/Clients",
                    fadein: 'fadeInRight'
                },
                {
                    id: 29,
                    clientlogo: clientsimg.client29,
                    clientproject: "luxi goods",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 30,
                    clientlogo: clientsimg.client30,
                    clientproject: "magnifique moi",
                    link: "/Clients",
                    fadein: 'fadeInDown'
                },
                {
                    id: 31,
                    clientlogo: clientsimg.client31,
                    clientproject: "waha industries",
                    link: "https://wahaind.co.uk/",
                    fadein: 'fadeInUp'
                },
                {
                    id: 32,
                    clientlogo: clientsimg.client32,
                    clientproject: "A2z utility",
                    link: "https://a2zutility.com/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 33,
                    clientlogo: clientsimg.client33,
                    clientproject: "emergent youth employment",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 34,
                    clientlogo: clientsimg.client34,
                    clientproject: "ASJ",
                    link: "http://asj-accountants.co.uk/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 35,
                    clientlogo: clientsimg.client35,
                    clientproject: "vape source",
                    link: "https://vapesource.uk/",
                    fadein: 'fadeInUp'
                },
                {
                    id: 36,
                    clientlogo: clientsimg.client36,
                    clientproject: "perfect sleep",
                    link: "http://perfectsleeps.co.uk/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 37,
                    clientlogo: clientsimg.client37,
                    clientproject: "aliya agha",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 38,
                    clientlogo: clientsimg.client38,
                    clientproject: "oosm deals",
                    link: "/Clients",
                    fadein: 'fadeInDown'
                },
                {
                    id: 39,
                    clientlogo: clientsimg.client39,
                    clientproject: "vapeazy",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 40,
                    clientlogo: clientsimg.client40,
                    clientproject: "mush editions",
                    link: "https://www.musheditions.com/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 41,
                    clientlogo: clientsimg.client41,
                    clientproject: "al tareq rehabilitation",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 42,
                    clientlogo: clientsimg.client42,
                    clientproject: "the factory stock",
                    link: "https://thefactorystock.com/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 43,
                    clientlogo: clientsimg.client43,
                    clientproject: "danish brothers",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 44,
                    clientlogo: clientsimg.client44,
                    clientproject: "Tolwat Ford",
                    link: "https://www.tolwatford.com/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 45,
                    clientlogo: clientsimg.client45,
                    clientproject: "pyramid granite ltd",
                    link: "https://pyramidgranite.co.uk/",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 46,
                    clientlogo: clientsimg.client46,
                    clientproject: "the brand station",
                    link: "https://thebrandstation.pk/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 47,
                    clientlogo: clientsimg.client47,
                    clientproject: "RCLS",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 48,
                    clientlogo: clientsimg.client48,
                    clientproject: "CFMBS",
                    link: "/Clients",
                    fadein: 'fadeInRight'
                },
                {
                    id: 49,
                    clientlogo: clientsimg.client49,
                    clientproject: "drive loop",
                    link: "/Clients",
                    fadein: 'fadeInUp'
                },
                {
                    id: 50,
                    clientlogo: clientsimg.client50,
                    clientproject: "ESales forum",
                    link: "https://esalesforum.com/",
                    fadein: 'fadeInRight'
                },
                {
                    id: 51,
                    clientlogo: clientsimg.client51,
                    clientproject: "quzi",
                    link: "/Clients",
                    fadein: 'fadeInLeft'
                },
                {
                    id: 52,
                    clientlogo: clientsimg.client52,
                    clientproject: "zubair coals",
                    link: "https://www.zubaircoals.com/",
                    fadein: 'fadeInDown'
                },
                {
                    id: 53,
                    clientlogo: clientsimg.client53,
                    clientproject: "golden vape",
                    link: "https://goldenvape.co.uk/",
                    fadein: 'fadeInUp'
                },
                {
                    id: 54,
                    clientlogo: clientsimg.client54,
                    clientproject: "forbitalia",
                    link: "/Clients",
                    fadein: 'fadeInRight'
                },
            ],
        }
    }
    render() {
        const Section = styled.section`
                position: relative;
                overflow: hidden; 
                background-color: #013567;
                .particles {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                // @media (max-width:767px) {   
                //   .particles {
                //     display: none;
                //   }
                // }
              }
            `
        const ClientsElement = styled.div`
            text-align: center;
            padding: 30px;
            border-radius: 20px;
            transition: .2s;
            // height: 100%;
            &:hover {
                background-color: #013567;
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
            @media (max-width:767px) {
                padding: 10px;
                background-color: #013567;
                box-shadow: 0 15px 25px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
        `
        let clients = this.state.clients
        return (
            <Section>
                <Particles
                    className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 100,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "color": {
                                "value": ["#f6b10a", "#f6b10a"]
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#fff"
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": true,
                                    "speed": 0.5,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 8.017060304327615,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 12.181158184520175,
                                    "size_min": 0.1,
                                    "sync": true
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": this.context.theme === "dark" ? "#fff" : "#555",
                                "opacity": 0.5,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "bounce",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }} />
                <Container>
                    <AnimatedHeading text="Our Trusted Clients" />
                    <Row>
                        {clients.map((v, i) => {
                            return (
                                <Col className="service_col" lg={3} md={3} sm={6} xs={6} key={i}>
                                    <AnimationContainer animation={v.fadein} delay={1200}>
                                        <ClientsElement>
                                            <div className="clients_logo_div">
                                                <img src={v.clientlogo} className="clients_logo" />
                                            </div>
                                            <div className="clients_project_div">
                                                <a className="clients_project" href={v.link} target="_blank" rel="noopener noreferrer">{v.clientproject}</a>
                                            </div>
                                        </ClientsElement>
                                    </AnimationContainer>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Section>
        )
    }
}
export default ClientsPage;