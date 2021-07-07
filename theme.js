// Chakra theme settings
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import { Heading } from './component-themes/Heading';
import { Button } from './component-themes/Button';
import { Text } from './component-themes/Text';
import { FormErrorMessage } from './component-themes/FormErrorMessage';

const bodyFont = `'Work Sans', sans-serif`;
const gradient = `background-color: #f1f1f1;
opacity: 0.8;
background-image: radial-gradient(#42b442 0.5px, #f1f1f1 0.5px);
background-size: 10px 10px;`;

const settings = {
    useSystemColorMode: true,
    styles: {
        global: (props) => ({
            body: {
                fontFamily: bodyFont,
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode(gradient, '#000')(props)
            }
        })
    },
    components: {
        Heading,
        Button,
        Text,
        FormErrorMessage
    }
};
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme(settings);
export default theme;
