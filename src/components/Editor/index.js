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
    const { rawContent, contentState } = props;

    if (!contentState) {
      // console.log('DraftJSEditor::contructor() with rawContent');
      this.state = {
        editorState: createEditorStateWithText(rawContent),
      };
    } else if (contentState) {
      // console.log('DraftJSEditor::contructor() with contentState');
      this.state = {
        editorState: EditorState.createWithContent(convertFromRaw(contentState)),
      };
    } else {
      // console.log('DraftJSEditor::contructor() with default text');
      this.state = { editorState: createEditorStateWithText(defaultText) };
    }
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  onChange = (editorState) => {
    const currentContentState = this.state.editorState.getCurrentContent();
    const newContentState = editorState.getCurrentContent();

    this.setState({
      editorState,
    });

    // Only propagate content changes, not selection changes
    if (currentContentState !== newContentState) {
      // There was a change in the content
      if (this.props.onChange) {
        const rawState = convertToRaw(newContentState);
        this.props.onChange(rawState);
      }
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
