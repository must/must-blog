import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    primary: '#202040',
    border: '#75757548',
    background: '#ffdcb4',
  },
  dark: {
    primary: '#ffdcb4',
    border: '#eeeeee48',
    background: '#202040',
  },
  quote: {
    light: {
      background: '#f6d198'
    }
  },
  toc: {
    dark: {
      background: '#363062',
    },
    light: {
      background: '#f6d198',
    }
  },
  code: {
    wmbar: false,
    light: {
      shadow: '',
      background: '#202040',
    },
    dark: {
      shadow: '',
      background: '#202040',
    }
  }
});
