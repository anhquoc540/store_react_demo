import styled from "styled-components";
import Header from './Header';
import { Layout } from 'antd';


const Contact = () => {
    const {  Footer } = Layout;



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

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
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

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Footer style={{ textAlign: 'center', background: '#1874fc', color: 'white', width: "100%", bottom: '10', marginTop: '10%' }}>Ant Design ©2023 Created by Ant UED</Footer>

    </Wrapper>
  )

}
export default Contact;

  const Wrapper = styled.section`
    text-align: center;
    .common-heading{
        margin-top: 6rem;

    }
    .container {
      margin-top: 6rem;
      margin-bottom:150px;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        font-size:18px;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            font-size:18px;

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
