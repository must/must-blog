
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  dest: {
    namespace: '/techblog',               // --> your github pages namespace. remove if you are using a custom domain.
    html: 'dist',
    assets: 'dist',
  },
  page: {
    title: {
      base: 'Eugene\'s Techblog'          // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'loreanvictor',               // --> your github username (where your repo is hosted)
      repo: 'techblog',                   // --> your github repo name
    }
  },
});
