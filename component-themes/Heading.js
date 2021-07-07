const headingFont = `'Work Sans', sans-serif`;

export const Heading = {
    // The styles all button have in common
    baseStyle: {
        fontFamily: headingFont,
        letterSpacing: '0.1',
        color: `rgb(1, 195, 141)`,
        marginBottom: '0.5em',
        fontWeight: 500
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: '18px'
        },
        md: {
            fontSize: '24px'
        },
        lg: {
            fontSize: '42px'
        }
    },
    // Two variants: outline and solid
    variants: {
        underline: {
            // color: 'gray.700',
            marginBottom: '3rem',
            borderBottom: '1px solid',
            paddingBottom: '1rem',
            borderColor: 'gray.300'
        },
        solid: {
            bg: 'green.500',
            color: 'white'
        }
    }
};
