/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
// NPM
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import emailjs, { sendForm } from 'emailjs-com';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// LOCAL
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// COMPONENT
const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_9cxbqfx', e.target, 'user_M7aONUJz5GnxUEJnFnpmY').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
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
            <label htmlFor="user_firstname">
              Firstname
              <input id="user_firstname" type="text" name="user_firstname" />
            </label>
            <label htmlFor="user_name">
              Name
              <input id="user_name" type="text" name="user_name" />
            </label>
            <label htmlFor="user_email">
              Email
              <input type="email" name="user_email" />
            </label>
            <label htmlFor="user_phone">
              Phone
              <input type="tel" name="user_phone" pattern="[0-9]{10}" required />
            </label>
            <label htmlFor="user_message">
              Message
              <textarea name="user_message" type="text" />
            </label>
            <TextField
              id=""
              label="Multiline"
              multiline
              rows={4}
              defaultValue="votre message"
              variant="outlined"
            />
            {/* <input type="submit" value="Send" /> */}
            <Button type="submit" label="submit" value="Send">
              Send
            </Button>
          </form>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
