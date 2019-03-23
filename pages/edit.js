import Head from 'next/head';
import styled from 'styled-components';
import store, { withRematch } from '../src/store';
import dynamic from 'next/dynamic';
const NoSSREditor = dynamic(() => import('../src/components/Editor'), { ssr: false });
// import Editor from '../src/components/Editor';

// import '../node_modules/draft-js/dist/Draft.css';
import * as css from '../shared/css';

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
  max-width: 700px;
  margin-top: 30px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Footer = styled.div`
  width: 100%;
  margin-top: auto;
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

const Toolbar = styled.div`
  display: flex;
  flexwrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const StoryWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`;

const Story = (props) => (
  <StoryWrapper>
    <H3>{props.title}</H3>
    {props.children}
  </StoryWrapper>
);

const Page = (props) => {
  const { dispatch } = props;

  return (
    <Layout>
      <Head>
        <title>everpaper - keep your daily journals</title>
      </Head>
      <Top />
      <Wrapper>
        <Toolbar>
          <H1>Write your story</H1>
          <Button>Share</Button>
        </Toolbar>
        <NoSSREditor onChange={console.log} />
      </Wrapper>

      <Footer>everpaper.io &mdash; Built with &hearts; using IPFS in Berlin and Zurich.</Footer>
    </Layout>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state) {
  return {};
}

export default withRematch(store, mapStateToProps, mapDispatchToProps)(Page);
