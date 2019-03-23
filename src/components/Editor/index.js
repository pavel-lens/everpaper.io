import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { ContentState, EditorState, RichUtils } from 'draft-js';
// import createHashtagPlugin from 'draft-js-hashtag-plugin';
// import createLinkifyPlugin from 'draft-js-linkify-plugin';
import styled, { createGlobalStyle } from 'styled-components';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';

import defaultText from './defaultText';

// const hashtagPlugin = createHashtagPlugin();
// const linkifyPlugin = createLinkifyPlugin();

// Inline toolbar
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  inlineToolbarPlugin,
  // hashtagPlugin,
  // linkifyPlugin,
];

const GlobalDraftJSStyle = createGlobalStyle`
  .public-DraftEditor-content {
    min-height: 100vh !important;

    /* Source Serif Pro config */
    /* font-family: 'Source Serif Pro', serif;
    font-size: 19px;
    line-height: 1.38; */

    /* Tinos config */
    font-family: 'Tinos', serif;
    font-size: 20px;
    font-weight: regular;
    line-height: 1.48;
    letter-spacing: .01em;

    /* Roboto Slab config */
    /* font-family: 'Roboto Slab', serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.58; */
    /* letter-spacing: .005em; */

    color: rgba(0,0,0,.84);

    & div[data-block="true"] {
      margin: 20px 0;
    }
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  cursor: text;
  margin-bottom: 2em;
`;

export default class DraftJSEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: createEditorStateWithText(defaultText) };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <Wrapper>
        <GlobalDraftJSStyle />
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          plugins={plugins}
        />
        <InlineToolbar />
      </Wrapper>
    );
  }
}
