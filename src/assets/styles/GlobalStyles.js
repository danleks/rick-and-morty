import { createGlobalStyle } from "styled-components";
import CREEPSTER_EOT from "url:../../../src/assets/fonts/creepster-v13-latin-regular.eot";
import CREEPSTER_SVG from "url:../../../src/assets/fonts/creepster-v13-latin-regular.svg";
import CREEPSTER_TTF from "url:../../../src/assets/fonts/creepster-v13-latin-regular.ttf";
import CREEPSTER_WOFF from "url:../../../src/assets/fonts/creepster-v13-latin-regular.woff";
import CREEPSTER_WOFF2 from "url:../../../src/assets/fonts/creepster-v13-latin-regular.woff2";

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
        font-family: 'Creepster', cursive;
    }
`;
