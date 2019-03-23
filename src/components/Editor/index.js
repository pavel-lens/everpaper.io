import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { ContentState, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js';
import styled from 'styled-components';

import GlobalDraftJSStyle from './GlobalDraftJSStyle';
import InlineToolbar, { inlineToolbarPlugin } from './Toolbar';
import defaultText from './defaultText';

const plugins = [inlineToolbarPlugin];

const Wrapper = styled.div`
  box-sizing: border-box;
  cursor: text;
  margin-bottom: 100px;
`;

export default class DraftJSEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: createEditorStateWithText(defaultText) };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    console.log('handleKeyCommand');
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onChange = (editorState) => {
    console.log('onChange');

    console.log(convertToRaw(editorState));
    this.setState({
      editorState,
    });

    if (props.onChange) {
      props.onChange(editorState);
    }
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
