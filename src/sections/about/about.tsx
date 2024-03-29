import React from 'react';
import { Row, Col } from "react-flexbox-grid";

import InfoBox from "../../components/infoBox/infoBox";
import Title from "../../components/title/title";
import ImageBox from "../../components/imageBox/imageBox";

import './about.scss';

export default function About() {
  return (
    <div id="about" className='section-wrapper about main-color-background'>
      <div className="wrapper">
        <Title title="ABOUT ME." />
        <div className='flex-center about_text'>
          <p className="font15">
            I'm interested in the ideas that fall at the intersection of artificial intelligence and robotics and inspired to solve meaningful and challenging real-world problems using technology!
            I'm eager to work hard and learn continuously.
          </p>
        </div>
        <Row>
          <Col md={12} lg={4}>
            <ImageBox image="/assets/blogs/blog3/star.jpg" title="Ari Nguyen" subTitle="Web designer" />
            {/* <InfoBox title='Little About Me' info='abcd' boxFooter='Read More' /> */}
          </Col>
          <Col md={12} lg={4}>
            {/* <ImageBox title='tile' subTitle='subTitle' /> */}
            <InfoBox title='' subTitle='' info='When I was little, I was amazed at how tech innovations 
            transform our lives and businesses. Thus, I chose to major in Computer Science because it allows 
            me to pursue both of my passions: producing creative work and solving social problems.' 
            boxFooter='' />
          </Col>
          <Col md={12} lg={4}>
            <InfoBox title='' subTitle='' info='I’m driven to solve meaningful and challenging real-world problems using technology. 
            I enjoy building projects with my friends. 
            I’ve attended 14 hackathons and achieved 7 awards. My projects focus on solving social good, accessibility, and environmental issues.' 
            boxFooter='' />
          </Col>
        </Row>
      </div>
    </div>
  )
}
