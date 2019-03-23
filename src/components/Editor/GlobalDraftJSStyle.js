import { createGlobalStyle } from 'styled-components';

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

    & h1[data-block="true"] {
      font-size: 1.58em;
      line-height: 1.28;
    }

    & h2[data-block="true"] {
      font-size: 1.28em;
      line-height: 1.28;
    }
  }
`;

export default GlobalDraftJSStyle;
