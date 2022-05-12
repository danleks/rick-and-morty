import { createGlobalStyle } from "styled-components";
import CREEPSTER_EOT from "url:../../../src/assets/fonts/creepster/creepster-v13-latin-regular.eot";
import CREEPSTER_SVG from "url:../../../src/assets/fonts/creepster/creepster-v13-latin-regular.svg";
import CREEPSTER_TTF from "url:../../../src/assets/fonts/creepster/creepster-v13-latin-regular.ttf";
import CREEPSTER_WOFF from "url:../../../src/assets/fonts/creepster/creepster-v13-latin-regular.woff";
import CREEPSTER_WOFF2 from "url:../../../src/assets/fonts/creepster/creepster-v13-latin-regular.woff2";

import LATO_THIN_EOT from "url:../../../src/assets/fonts/lato/lato-v23-latin-300.eot";
import LATO_THIN_SVG from "url:../../../src/assets/fonts/lato/lato-v23-latin-300.svg";
import LATO_THIN_TTF from "url:../../../src/assets/fonts/lato/lato-v23-latin-300.ttf";
import LATO_THIN_WOFF from "url:../../../src/assets/fonts/lato/lato-v23-latin-300.woff";
import LATO_THIN_WOFF2 from "url:../../../src/assets/fonts/lato/lato-v23-latin-300.woff2";

import LATO_REGULAR_EOT from "url:../../../src/assets/fonts/lato/lato-v23-latin-regular.eot";
import LATO_REGULAR_SVG from "url:../../../src/assets/fonts/lato/lato-v23-latin-regular.svg";
import LATO_REGULAR_TTF from "url:../../../src/assets/fonts/lato/lato-v23-latin-regular.ttf";
import LATO_REGULAR_WOFF from "url:../../../src/assets/fonts/lato/lato-v23-latin-regular.woff";
import LATO_REGULAR_WOFF2 from "url:../../../src/assets/fonts/lato/lato-v23-latin-regular.woff2";

import LATO_BOLD_EOT from "url:../../../src/assets/fonts/lato/lato-v23-latin-700.eot";
import LATO_BOLD_SVG from "url:../../../src/assets/fonts/lato/lato-v23-latin-700.svg";
import LATO_BOLD_TTF from "url:../../../src/assets/fonts/lato/lato-v23-latin-700.ttf";
import LATO_BOLD_WOFF from "url:../../../src/assets/fonts/lato/lato-v23-latin-700.woff";
import LATO_BOLD_WOFF2 from "url:../../../src/assets/fonts/lato/lato-v23-latin-700.woff2";

export const GlobalStyles = createGlobalStyle`

    /* creepster-regular - latin */
    @font-face {
        font-family: 'Creepster';
        font-style: normal;
        font-weight: 400;
        src: url(${CREEPSTER_EOT}); /* IE9 Compat Modes */
        src: local(''),
            url(${CREEPSTER_EOT}#iefix) format('embedded-opentype'), /* IE6-IE8 */
            url(${CREEPSTER_WOFF2}) format('woff2'), /* Super Modern Browsers */
            url(${CREEPSTER_WOFF}) format('woff'), /* Modern Browsers */
            url(${CREEPSTER_TTF}) format('truetype'), /* Safari, Android, iOS */
            url(${CREEPSTER_SVG}) format('svg'); /* Legacy iOS */
    }

    /* lato-300 - latin */
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        src: url(${LATO_THIN_EOT}); /* IE9 Compat Modes */
        src: local(''),
            url(${LATO_THIN_EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
            url(${LATO_THIN_WOFF2}) format('woff2'), /* Super Modern Browsers */
            url(${LATO_THIN_WOFF}) format('woff'), /* Modern Browsers */
            url(${LATO_THIN_TTF}) format('truetype'), /* Safari, Android, iOS */
            url(${LATO_THIN_SVG}) format('svg'); /* Legacy iOS */
    }

    /* lato-regular - latin */
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: url(${LATO_REGULAR_EOT}); /* IE9 Compat Modes */
        src: local(''),
            url(${LATO_REGULAR_EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
            url(${LATO_REGULAR_WOFF2}) format('woff2'), /* Super Modern Browsers */
            url(${LATO_REGULAR_WOFF}) format('woff'), /* Modern Browsers */
            url(${LATO_REGULAR_TTF}) format('truetype'), /* Safari, Android, iOS */
            url(${LATO_REGULAR_SVG}) format('svg'); /* Legacy iOS */
    }

    /* lato-700 - latin */
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: url(${LATO_BOLD_EOT}); /* IE9 Compat Modes */
        src: local(''),
            url(${LATO_BOLD_EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
            url(${LATO_BOLD_WOFF2}) format('woff2'), /* Super Modern Browsers */
            url(${LATO_BOLD_WOFF}) format('woff'), /* Modern Browsers */
            url(${LATO_BOLD_TTF}) format('truetype'), /* Safari, Android, iOS */
            url(${LATO_BOLD_SVG}) format('svg'); /* Legacy iOS */
    }



    html {
        box-sizing: border-box;
        font-size: 62.5% /* from now 1rem === 10px */
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Lato', sans-serif;
    }
`;
