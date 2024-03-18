import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import filterIcon from '../Assets/Icons/filter.png'
import searchIcon from '../Assets/Icons/search.png'
import heroImage from '../Assets/Images/heroimg.png'
import whyChoose from '../Assets/Images/whychoose.png'
import visiodocs from '../Assets/companyLogo/visiodocs.png'
import legistify from '../Assets/companyLogo/legistify.png'
import legitquest from '../Assets/companyLogo/legitquest.png'
import lexcomplex from '../Assets/companyLogo/lexcomplex.png'
import mycase from '../Assets/companyLogo/mycase.png'
import smartadvocate from '../Assets/companyLogo/smartadvocate.png'
import complianceAi from '../Assets/companyLogo/complianceAi.png';
import checksImage from '../Assets/Icons/checks.png'
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import enterprises from '../Assets/SliderImages/Enterprise.png'
import inhouse from '../Assets/SliderImages/InhouseLegalTeams.png'
import lawFirms from '../Assets/SliderImages/Law firms.png'
import judiciary from '../Assets/SliderImages/Judiciary.png'
import startup from '../Assets/SliderImages/Startup.png'
import individualPractitioner from '../Assets/SliderImages/individualPractitioner.png'
import government from '../Assets/SliderImages/government.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/home.scss'
import {categoryData} from '../JSON/categorization'
const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        pauseOnHover: true,
        centerMode: true,
    }
    const ltrsettings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        pauseOnHover: true,
        centerMode: true,
        arrows: false,
        smoothScroll :true
    }
    const rtlsettings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        pauseOnHover: true,
        rtl: true,
        centerMode: true,
        arrows: false,

    }
    const [categorizationData, setCategorizationData] = useState(categoryData[0]);


    const Category = ({ category }) => (
        <button onClick={() => setCategorizationData(category)}>
            {category.label}
        </button>
    );
    return (
        <div className="home">
            <Header />
            <div className="hero">
                <div className="content">
                    <h1>Discover Legal Tech <span>Solutions</span></h1>
                    <p>Explore a comprehensive directory of legal tech solutions tailored to streamline workflows, enhance productivity, and elevate your organisation's growth.</p>
                    <div className="inputField">
                        <form action="" method="post">
                            <input type="text" placeholder='What are you looking for?' />
                            <div className="buttons">
                                <Link  > <img src={filterIcon} alt="=" width={32} /> </Link>
                                <Link ><img src={searchIcon} alt="🔍" width={32} />
                                </Link>
                            </div>

                        </form>
                    </div>


                </div>
                <div className="image">
                    <img src={heroImage} alt="Hero_image" />
                </div>
            </div>
            <div className="horizontalSlider">

                <Slider {...settings} >
                    <div className="group"  >
                        <img src={individualPractitioner} alt="" />
                        <p>Individual Practitioner</p>
                    </div>
                    <div className="group">
                        <img src={enterprises} alt="" />
                        <p>Enterprises</p>
                    </div>
                    <div className="group" >
                        <img src={lawFirms} alt="" />
                        <p>Law Firms</p>
                    </div>
                    <div className="group"  >
                        <img src={startup} alt="" />
                        <p>Startups</p>
                    </div>
                    <div className="group">
                        <img src={inhouse} alt="" />
                        <p>Inhouse Legal Teams</p>
                    </div>
                    <div className="group" >
                        <img src={judiciary} alt="" />
                        <p>Judiciary</p>
                    </div>
                    <div className="group" >
                        <img src={government} alt="" />
                        <p>Government Departments</p>
                    </div>
                </Slider>
            </div>
            <div className="categorization">
                <div className="categories">
                    {categoryData.map((category) => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>

                {categorizationData && (
                    <div className="box">
                        <div className='content'>
                            <h2>{categorizationData.label}</h2>
                            <p>{categorizationData.data}</p>
                        </div>
                        <div className="image">
                            <img src={`${categorizationData.imgSrc}`} alt="" />
                        </div>
                    </div>

                )}
            </div>
            <div className="banner">
                <div className="leftDiv">
                    <h2>We are blending technology and law</h2>
                </div>
                <hr />
                <div className="rightDiv">
                    <p>A platform that curates legal tech products and helps buyers to explore them all at one place. We are on a mission to elevate legal practice with the help of our comprehensive directory and a vibrant community of legal tech professionals and enthusiasts.</p>
                </div>
            </div>
            <div className="whyChooseSection">
                <div className="content">
                    <div className="heading">
                        <h1>Why choose <span>DreamLegal</span>
                        </h1>
                    </div>
                    <div className="blocks">


                        <div className="box">
                            <h2>
                                Access the top 1% of
                                legal professionals
                            </h2>
                            <p>Our community is highly curated from
                                only the top 1% of legal professionals
                                that meet Lawtrades' standard of
                                excellence.</p>
                        </div>
                        <div className="box">
                            <h2>
                                Data & visibility into
                                your legal spend
                            </h2>
                            <p>Lawtrades offers tech solutions to
                                better understand where your budget
                                goes and helps you forecast your future
                                spend.</p>
                        </div>
                        <div className="box">
                            <h2>
                                Scale on demand
                                as you need it
                            </h2>
                            <p>Save on your legal spend by removing
                                law firm rates. Flex support up and
                                down as needed.</p>
                        </div>
                        <div className="box">
                            <h2>
                                Personal onboarding &
                                support
                            </h2>
                            <p>When you join Lawtrades, you receive a
                                dedicated account manager to help you
                                get started on the platform and support
                                you along the way.</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={whyChoose} alt="" />
                </div>
            </div>
            <div className="network">
                <div className="heading">
                    <h1> The DreamLegal <span>Network</span></h1>
                    <p>
                        Formed with 2000+ Lawtraders from top law firms and legal
                        departments across the US and abroad.
                    </p>
                </div>
                <div className="companies">


                    <Slider {...rtlsettings} >
                        <div className="box" style={{ display: 'flex' }
                        }>
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                    </Slider>
                    <Slider {...ltrsettings} >
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                    </Slider>
                    <Slider {...rtlsettings} >
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={checksImage} alt="" />
                            </div>
                            <div className="data">
                                <h3>Karen Frame</h3>
                                <span>Attorney</span>
                                <p> Colorado</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="onboardedVendors">
                    <p>Onboarded <span>50+</span> Legal Tech Vendors</p>
                    <div className="content">
                        <img src={visiodocs} alt="" />
                        <img src={lexcomplex} alt="" />
                        <img src={legitquest} alt="" />
                        <img src={legistify} alt="" />
                        <img src={complianceAi} alt="" />
                        <img src={smartadvocate} alt="" />
                        <img src={mycase} alt="" />
                    </div>
                </div>
            </div>
            <div className="getStarted">
                <div className="content">
                    <div className="text">
                        Get started <br />
                        with <span> DreamLegal</span>
                    </div>
                    <p>Dummy Text Dummy Text Dummy TextText </p>
                    <button>Start Now</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home