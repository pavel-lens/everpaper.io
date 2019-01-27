import * as css from '../shared/css';
import Head from 'next/head';
import styled from 'styled-components';

const Layout = styled.div`
  height: 100vh;
  font-family: ${css.primaryFont};
  color: ${css.primaryFontColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #fff;
`;

const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-image: ${css.primaryGradient};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin-top: 30px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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
  color: ${css.secondaryColor}
  background-image: ${css.primaryGradient};
`;

const H1 = styled.h1`
  font-size: 44px;
  font-weight: bolder;
  margin: 0;
  font-family: ${css.secondaryFont};
  margin-bottom: 20px;
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

const H3 = styled.h3`
  font-family: ${css.primaryFont};
  font-size: 25px;
  margin: 10px 0;
`;

const Button = styled.div`
  /* display: inline-block; */
  /* background-color: ${css.secondaryColor} */
  color: #4395ff;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  text-align: center;
  /* width: 100%; */
  /* text-transform: uppercase; */
  border: 1px solid #4395ff;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;

  /* box-shadow: ${css.shadowNormal}; */
  transition: all ease-in;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: ${css.shadowElevated};
  }
`;

const StoryPreview = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
`;

const StoryFooter = styled.div`
  font-size: 13px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
`;

const StoryWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`;

const Story = props => (
  <StoryWrapper>
    <H3>{props.title}</H3>
    {props.children}
  </StoryWrapper>
);

const LoginPage = () => (
  <Layout>
    <Head>
      <title>everpaper - keep your daily journals</title>
    </Head>
    <Top />
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <H1>Your papers</H1>
        <Button>Write a paper</Button>
      </div>
      {/* <H2>Keep your daily journals</H2> */}
      <Story title="Saturday at park">
        <StoryPreview>
          Today we went to park with my wife and our doggie Mia. Both were
          excited as it was a beautiful autumn day, the sun was shinning and
          the..
        </StoryPreview>
        <StoryFooter>
          Last edited about 1 month ago · 1 min read (40 words) so far
        </StoryFooter>
      </Story>
      <Story title="Intense day at work">
        <StoryPreview>
          The day started slowly with my usual coffee howoever things soon
          turned to opposite direction..
        </StoryPreview>
        <StoryFooter>
          Last edited about 1 month ago · 1 min read (40 words) so far
        </StoryFooter>
      </Story>
      <Story title="Afternoon drinks with friends">
        <StoryPreview>
          Today we went to park with my wife and our doggie Mia. Both were
          excited as it was a beautiful autumn day, the sun was shinning and
          the..
        </StoryPreview>
        <StoryFooter>
          Last edited about 1 month ago · 1 min read (40 words) so far
        </StoryFooter>
      </Story>
    </Wrapper>

    <Footer>
      everpaper.io &mdash; Built with &hearts; using IPFS in Berlin and Zurich.
    </Footer>
  </Layout>
);

export default LoginPage;
