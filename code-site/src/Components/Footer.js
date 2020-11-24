import React from "react";
import {
  MDBFooter,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <MDBFooter
      color="stylish-color-dark"
      className="text-center font-small darken-2 "
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Babson CODE Site Map 
            </h5>
            <p>
              
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="pt-4">
        <MDBBtn
          outline
          color="white"
          tag="a"
          href="https://mdbootstrap.com/docs/react/getting-started/download/"
          target="_blank"
        >
          Sign Up for our Newsletter!
          <MDBIcon icon="mail" className="ml-2" />
        </MDBBtn>
        <MDBBtn
          outline
          color="white"
          tag="a"
          href="https://mdbootstrap.com/docs/react/getting-started/quick-start/"
          target="_blank"
        >
          Apply for Housing
          <MDBIcon icon="house" className="ml-2" />
        </MDBBtn>
        <hr className="my4" />
      </div>
      <div className="pb-4">
        <SocialIcon
          url="https://www.instagram.com/babsoncode/"
          className="mr-3 iconSocial"
          style={{ height: 40, width: 40 }}
          bgColor="#c32aa3"
        />
        <SocialIcon
          url="https://www.facebook.com/BabsonCode"
          className="mr-3 iconSocial"
          style={{ height: 40, width: 40 }}
          bgColor="#1877f2"
        />
        <SocialIcon
          url="https://github.com/Babson-CODE"
          className="mr-3 iconSocial"
          style={{ height: 40, width: 40 }}
          bgColor="#000000"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/babson-code/"
          className="mr-3 iconSocial"
          style={{ height: 40, width: 40 }}
          bgColor="#007bb5"
        />
      </div>
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {new Date().getFullYear()} Copyright: Babson CODE 2020
      </p>
    </MDBFooter>
  );
};

export default Footer;
