import styled from "styled-components";
import Header from './Header';
import { Layout, Affix } from 'antd';

const Contact = () => {

    const {  Footer } = Layout;


  const Wrapper = styled.section`
    text-align: center;
    .common-heading{
        margin: 6rem;
        font-size:4rem;
    }
    input, textarea{
        max-width: 50rem;

        color: ${({ theme }) => theme.colors.black};
        padding: 1.6rem 2.4rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        text-transform: uppercase;
       box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    }
        input[type="submit"]{
        max-width: 10rem;
        margin-top: 2rem;
        background-color: ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.white};
        padding: 1.4rem 2.2rem;
        border-style: solid;
        border-width: .1rem;
        text-transform: uppercase;
        font-size: 1.5rem;
        cursor: pointer;
        }
    .container {
      margin-top: 6rem;
        font-size:18px;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
     <Header/>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.610010537023!2d106.80730807462814!3d10.841127589311574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1697000380321!5m2!1svi!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container" style={{marginBottom:'50px'}}>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>

    </Wrapper>
  );
};

export default Contact;
