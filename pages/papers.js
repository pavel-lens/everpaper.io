import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import store, { withRematch } from 'store';
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
  max-width: 1080px;
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
  cursor: pointer;
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

const StoryPreview = styled.div`
  cursor: pointer;
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
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`;

const Story = (props) => <StoryWrapper {...props}>{props.children}</StoryWrapper>;

const Page = (props) => {
  const { dispatch, papers } = props;
  console.log('Papers:', papers);

  const handleAddNewPaper = () => {
    const id = uuid();
    props.onAddPaper({
      id,
      title: `New story..`,
      content: `Start your story..`,
      created: new Date(),
      edited: new Date(),
    });

    // Redirect to new paper
    Router.push(`/edit?id=${id}`);
  };

  const storiesNodes = papers.map((p) => (
    <Story key={p.id} title={p.title}>
      <Link href={`/edit?id=${p.id}`}>
        <H3>{p.title}</H3>
      </Link>
      <Link href={`/edit?id=${p.id}`}>
        <StoryPreview>{p.content}</StoryPreview>
      </Link>
      <StoryFooter>Last edited about 1 month ago · 1 min read (40 words) so far</StoryFooter>
    </Story>
  ));

  return (
    <Layout>
      <Head>
        <title>everpaper - keep your daily journals</title>
      </Head>
      <Top />
      <Wrapper>
        <Toolbar>
          <H1>Your papers</H1>
          <Button onClick={handleAddNewPaper}>Write a paper</Button>
        </Toolbar>
        {storiesNodes}
      </Wrapper>

      <Footer>everpaper.io &mdash; Built with &hearts; using IPFS in Berlin and Zurich.</Footer>
    </Layout>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onAddPaper: (paper) => dispatch.papers.addPaper(paper),
  };
}

function mapStateToProps(state) {
  return {
    papers: state.papers.list.sort((a, b) => b.edited - a.edited),
  };
}

export default withRematch(store, mapStateToProps, mapDispatchToProps)(Page);
