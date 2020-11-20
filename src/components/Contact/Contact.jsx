/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
// NPM
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
// LOCAL
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// COMPONENT
const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
          </div>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label htmlFor="Name">
              Name
              <input id="Name" type="text" name="user_name" />
            </label>
            <label htmlFor="first-name">
              First Name
              <input type="text" id="first-name" />
            </label>
            <label>
              Email
              <input type="email" name="user_email" />
            </label>
            <label>
              Message
              <textarea name="message" />
              <input type="submit" value="Send" />
            </label>
          </form>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
