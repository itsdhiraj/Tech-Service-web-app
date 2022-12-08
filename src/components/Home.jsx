import React from 'react';
import { icons } from 'react-icons';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";


const Home = () => {
  return (
    <>
<div className="home" id ="home">
<main>
    <h1>Techystar</h1>
    <p>Solution to all your problems</p>
</main>
</div>

<div className="home2">
    <img src={vg} alt="Graphics"/>
    <div>
        <p>
            We are your one and only solution to the tech problems you face every day.
            We are leading tech industry and offers variety of services from cloud to consulting .
        </p>
    </div>

</div>


<div className="home3" id="about">

    <div>
        <h1>Who we are ?</h1>
        <p>
        Retaining customer base is important for any enterprise, it takes great effort to make good customer relationship and minute error can ruin it. Owing to our outstanding customer service we have maintained the 85 % customer retention rate. We, the best IT service provider company in Mumbai help your business in getting loyalty back by transforming into latest advanced IT technology. Our BA, Designing, Developing, Support and Consultant team are always at your service to assist you in consultant, implementation, integration and support. We are the trustful answer for enterprises that are inclining towards digital era. Digitizing your work help in overall 25 % reduction in the core capital of the company and hence better ROI.        </p>
</div>
</div>

<div className="home4" id="brands">

    <div>
        <h1>Brands</h1>
        <article>
            <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>

            </div>

            <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>

            </div>
            <div style={{animationDelay: "0.1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>

            </div>
            <div style={{animationDelay: "0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>

            </div>
        </article>
    </div>
</div>
    

    </>
  );
}

export default Home
