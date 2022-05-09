import { ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'
import TextSlider from '../component/imgSlider'
import Navbar from '../component/navbar'
import '../css/page.css'
import { realtimeDB } from './firebaseConfig'

const Main = () => {

    const [scrolled, setScrolled] = useState('light')

    const [contactData, setContactData] = useState({
        name: '',
        lastName: '',
        subject: '',
        message: ''
    })
    const [contactStatus, setContactStatus] = useState(false)

    const {text} = useTypewriter({
        words: ["Hey, I am JUNAID.","I am from India.","I am a web developer.","Experienced in FrontEnd and BackEnd development"],
        loop: 0,
        cursor: true,
        cursorStyle: '_',
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
      })
    

    window.onscroll = () => {
        if (window.scrollY < 400) {
            setScrolled('light')
        } else {
            setScrolled('dark')
        }
    }

    const handelContactData = (e) => {
        let name = e.target.name
        let value = e.target.value
        setContactData({ ...contactData , [name] : value })
    }

    const saveMessage = (e) => {
        e.preventDefault()
        setContactStatus(true)
        set(ref(realtimeDB, 'contact/' + contactData.name+" "+contactData.lastName),{
            firstName: contactData.name,
            lastName: contactData.lastName,
            subject: contactData.subject,
            message: contactData.message
        }).then(() => {
            setContactStatus(false)
        }).catch(e => {
            alert(e)
            setContactStatus(false)
        })
    }

  return (
    <>
        <Navbar mode={scrolled} />

        {/* main landing page starts */}

        <div className="mainPg">
            <div className="introContainer">
                <div className="typewritter">
                    <span id='writter'>
                        {text}
                    </span>
                </div>
                <div className="socials">
                    <div className="facebook">
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="instagram">
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className="twitter">
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="github">
                        <i className="fa fa-github"></i>
                    </div>
                </div>
                <a href="#about" className="scrollDown">
                    <i className="fa fa-angle-double-down"></i>
                </a>
            </div>
        </div>

        {/* main landing page ends */}

        {/* about section and service starts */}

        <div id='about'>
            <div className="headingCont">
                <h1>About me!</h1>
            </div>
            <div className="aboutInfoContainer">
                <div className="AboutImgContainer">
                    <img src={require('../images/about.jpg')} alt="" />
                </div>
                <div className="AboutData">
                    <h3>I'M 18 YEARS OLD DESIGNER AND FOCUSED ON BRAND IDENTITY!</h3>
                    <p>I'm a web developer who specialises in backend development for websites and android development. JavaScript and one of its frameworks, React JS, are two of my favourite languages that I use frequently, and I prefer React Native for Android and iOS development. I have 2 years of frontend and backend programming experience. With embedded own systems programming, I've produced several gorgeous, responsive, and completely functional websites. Without using any third-party sites or apps, I also accept freelancing orders directly. Those who are interested can contact me through the contact area.</p>
                    <div className="table">
                        <div className="side1">
                            <div className="aboutSkills">
                                <h3>web design</h3>
                            </div>
                            <div className="aboutSkills">
                                <h3>ios design</h3>
                            </div>
                            <div className="aboutSkills">
                                <h3>user experience</h3>
                            </div>
                            <div className="aboutSkills">
                                <h3>back-end development</h3>
                            </div>
                        </div>
                        <div className="side2">
                            <div className="aboutSkills">
                                <h3>graphics & design</h3>
                            </div>
                            <div className="aboutSkills">
                                <h3>Front-end development</h3>
                            </div>
                            <div className="aboutSkills">
                                <h3>branding</h3>
                            </div>
                            <div className="aboutSkills">
                                <h3>responsive</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatIOfferContainer" id='service'>
                <div className="headingCont">
                    <h1>what i offer?</h1>
                </div>
                <div className="offerContainerMain">
                    <div className="offerContainer">
                        <div className="iconSide">
                            <div>
                                <i className="fa fa-building"></i>
                            </div>
                        </div>
                        <div className="textSide">
                            <h3>BRANDING & IDENTITY</h3>
                            <p><strong>Verix</strong> is our brand name, and we specialise in web development as well as Android app development, including front-end and back-end work. Our brand works up with a partner brand called <a href="http://zestlark.ml" target="_blank" rel="noopener noreferrer">ZESTLARK</a>..</p>
                        </div>
                    </div>
                    <div className="offerContainer">
                        <div className="iconSide">
                            <div>
                                <i className="fa fa-keyboard-o"></i>
                            </div>
                        </div>
                        <div className="textSide">
                            <h3>WEB DESIGN & DEVELOPMENT</h3>
                            <p>We have extensive expertise creating creative, responsive, and fully functional websites and apps. When it comes to ui/ux designs, <a href="http://zestlark.ml" target="_blank" rel="noopener noreferrer"><strong>zestlark</strong></a> is largely in charge of working with the attractiveness of your product.</p>
                        </div>
                    </div>
                    <div className="offerContainer">
                        <div className="iconSide">
                            <div>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                        <div className="textSide">
                            <h3>Responsive</h3>
                            <p>When it comes to your websites or apps, responsiveness is crucial. We design fully responsive websites and apps with the goal of making them look well on a variety of devices of various sizes.</p>
                        </div>
                    </div>
                    <div className="offerContainer">
                        <div className="iconSide">
                            <div>
                                <i className="fa fa-hard-of-hearing"></i>
                            </div>
                        </div>
                        <div className="textSide">
                            <h3>24 HOUR FRIENDLY SUPPORT</h3>
                            <p>Our clients can reach us 24 hours a day, seven days a week. We have fully functional bots for client support, and if the bots are unable to resolve your issue, you can pass it to us, and we will be delighted to assist you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* about section and service ends */}

        {/* work section starts */}

        <div className="workMainContainer" id='assets'>
            <div className="headingCont work">
                <h1>assets</h1>
            </div>
            <div className="imageContainer">
                <div className="images">
                    <img src={require('../images/1.jpg')} alt=""/>
                </div>
                <div className="images">
                    <img src={require('../images/2.jpg')} alt=""/>
                </div>
                <div className="images">
                    <img src={require('../images/3.jpg')} alt=""/>
                </div>
                <div className="images">
                    <img src={require('../images/4.jpg')} alt=""/>
                </div>
                <div className="images">
                    <img src={require('../images/5.jpg')} alt=""/>
                </div>
                <div className="images">
                    <img src={require('../images/6.jpg')} alt="" />
                </div>
            </div>
            <div className="textSlider" id='thoughts'>
                <div className="headingCont">
                    <h1>Thoughts for day</h1>
                </div>
                <TextSlider />
            </div>
        </div>

        {/* work section ends */}

        {/* contact section starts */}

        <div className="contactSection" id='contact'>
            <div className="headingCont">
                <h1>contact us</h1>
            </div>
            <form action="" className="contact" onSubmit={(e) => saveMessage(e)}>
                <div className="center">
                    <div className="twoInputs">
                        <input type="text" name='name' placeholder='Name' value={contactData.name} required onChange={(e) => handelContactData(e)} />
                        <input type="text" name='lastName' placeholder='Last Name' value={contactData.lastName} required onChange={(e) => handelContactData(e)} />
                    </div>
                    <input type="text" name='subject' placeholder='Subject' value={contactData.subject} required onChange={(e) => handelContactData(e)} />
                    <textarea name="message" placeholder='Message' id="" rows="5" value={contactData.message} required onChange={(e) => handelContactData(e)} ></textarea>
                    <input type="submit" value={contactStatus ? 'submitting your query' : 'Submit'} />
                </div>
            </form>
        </div>

        {/* contact section ends */}

    </>
  )
}

export default Main