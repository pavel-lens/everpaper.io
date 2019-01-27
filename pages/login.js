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
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  /* margin-top: 50px; */
  /* margin-left: 0px; */
  cursor: pointer;
  box-sizing: border-box;

  box-shadow: ${css.shadowNormal};
  transition: all ease-in;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: ${css.shadowElevated2X};
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 18px;
  border: 0;
  box-shadow: ${css.shadowNormal};
  box-sizing: border-box;

  &:active {
    box-shadow: ${css.shadowNormal};
  }
`;

const InputLabel = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 0.8em;

  & > *:first-child {
    display: block;
    margin-bottom: 3px;
  }
`;

const LabeledInput = props => (
  <InputLabel>
    <div>{props.label}</div>
    <Input {...props} />
  </InputLabel>
);

const LoginForm = styled.form`
  width: 300px;

  @media only screen and (max-width: ${css.SM}) {
    width: 90%;
  }
`;

const LoginPage = () => (
  <Layout>
    <Head>
      <title>everpaper - keep your daily journals</title>
    </Head>
    <Wrapper>
      <H1>everpaper.io</H1>
      <H2>Keep your daily journals</H2>

      <LoginForm>
        <LabeledInput
          label="Enter your email or username"
          type="text"
          name="email"
          placeholder="hello@everpaper.io"
        />
        <LabeledInput
          label="Enter your passcode"
          type="password"
          name="passcode"
          placeholder="12-45-24-16"
        />
        <Button>Log in &#10230;</Button>
      </LoginForm>
    </Wrapper>

    <Footer>
      everpaper.io &mdash; Built with &hearts; using IPFS in Berlin and Zurich.
    </Footer>
  </Layout>
);

export default LoginPage;
