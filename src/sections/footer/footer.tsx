import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";

import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer white-color-background">
      <div className="wrapper">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <div className="footer-box">
              {/* <img src={Logo} alt="logo" /> */}
            </div>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
              <div className="footer-box back-to-top">
                <p>BACK TO TOP</p>
                <img src="/assets/footer/arrow.svg" alt="arrow" />
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}