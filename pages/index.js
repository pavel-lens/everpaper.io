import * as css from '../shared/css';
import Head from 'next/head';
import styled from 'styled-components';

const Layout = styled.div`
  height: 100vh;
  background-color: ${css.primaryColor};
  font-family: ${css.primaryFont};
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-image: ${css.primaryGradient};
`;

const Wrapper = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 100;
  font-size: 0.8em;
  text-align: center;
  padding: 6px 0;
`;

const H1 = styled.h1`
  font-size: 26px;
  font-weight: lighter;
  margin: 0;
`;

const H2 = styled.h2`
  font-size: 46px;
  font-weight: 100;
  font-family: 'Dancing Script';
  margin: 10px 0;

  @media only screen and (max-width: ${css.SM}) {
    font-size: 40px;
  }
`;

const Button = styled.div`
  display: inline-block;
  background-color: ${css.secondaryColor}
  color: ${css.primaryColor};
  padding: 15px 55px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 50px;
  margin-left: 0px;
  cursor: pointer;

  box-shadow: ${css.shadowElevated};
  transition: all ease-in;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: ${css.shadowElevated2X};
  }
`;

const Index = () => (
  <Layout>
    <Head>
      <title>everpaper - keep your daily journals</title>
    </Head>
    <Wrapper>
      <H1>everpaper.io</H1>
      <H2>Keep your daily journals</H2>

      <a href="https://pavelsvitek.typeform.com/to/vYmp4s" target="_blank">
        <Button>Get early access &#10230;</Button>
      </a>
      <p>Sign up for early access in March 2019</p>
    </Wrapper>

    <Footer>
      everpaper.io &mdash; Built with &hearts; using IPFS in Berlin and Zurich.
    </Footer>
  </Layout>
);

export default Index;
