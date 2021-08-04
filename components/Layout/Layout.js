import React from 'react';
import Head from 'next/head';
import { Box, Flex, HStack, useColorMode } from '@chakra-ui/react';
import Menu from '@components/Menu';
import Logo from '@components/Logo';

const Layout = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box className="container" style={{ minHeight: '100vh' }}>
            <Head>
                <title>
                    Ally Reid | Senior Front End Software Engineer , UI
                    Developer, React, Javascript
                </title>
                <meta
                    name="description"
                    content="Ally Reid - Javascript, React, Web Developer Glasgow based "
                ></meta>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
                    }}
                />
            </Head>

            <Box className="inner">
                <HStack
                    p={5}
                    position="sticky"
                    boxShadow="sm"
                    background="white"
                >
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        minW="100%"
                    >
                        <Logo colorMode={colorMode} />
                        <Menu />
                    </Flex>
                </HStack>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
