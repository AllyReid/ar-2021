import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
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
                    Developer, React, Javascript, Web Applications
                </title>
                <link rel="icon" href="/favicon.ico" />
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
