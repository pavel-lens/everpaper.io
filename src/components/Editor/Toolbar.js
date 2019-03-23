/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import styled from 'styled-components';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  UnorderedListButton,
  OrderedListButton,
} from 'draft-js-buttons';

import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

export const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const CustomInlineToolbar = () => {
  return (
    <InlineToolbar>
      {// may be use React.Fragment instead of div to improve perfomance after React 16
      (externalProps) => (
        <div>
          <HeadlineOneButton {...externalProps} />
          <HeadlineTwoButton {...externalProps} />
          <Separator {...externalProps} />
          <BoldButton {...externalProps} />
          <ItalicButton {...externalProps} />
          <UnderlineButton {...externalProps} />
          <Separator {...externalProps} />
          <UnorderedListButton {...externalProps} />
          <OrderedListButton {...externalProps} />
        </div>
      )}
    </InlineToolbar>
  );
};

export default CustomInlineToolbar;
