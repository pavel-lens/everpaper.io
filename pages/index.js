import * as css from '../shared/css';
import Head from 'next/head';
import styled from 'styled-components';

const Layout = styled.div`
  height: 100vh;
  background-color: ${css.primaryColor};
  font-family: ${css.primaryFont};
  color: ${css.primaryFontColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 25px 50px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 100;
  font-size: 0.8em;
  text-align: center;
  padding: 10px 0;
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
  border: 1px solid ${css.primaryColor};
  color: ${css.primaryColor};
  padding: 15px 55px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 50px;
  cursor: pointer;
`;

const Index = () => (
  <Layout>
    <Head>
      <title>everPaper - own your daily journals</title>
    </Head>
    <H1>everPaper.io</H1>
    <H2>Keep your daily journals</H2>

    <a href="https://pavelsvitek.typeform.com/to/vYmp4s" target="_blank">
      <Button>Sign up &#10230;</Button>
    </a>
    <p>Sign up for early access</p>
    {/* <p>Launching Mar 2019</p> */}

    <Footer>
      everpaper.io &mdash; Built with &hearts; using IPFS in Berlin and Zurich.
    </Footer>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </Layout>
);

export default Index;
