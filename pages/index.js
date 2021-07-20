import { useState } from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconoir-react';
import Layout from '@components/Layout';
import useTyped from '@hooks/useTyped';

export default function Home() {
    const [showText, setShowText] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            },
            duration: 1
        }
    };

    const item = {
        hidden: { opacity: 0, y: '10px' },
        show: { opacity: 1, y: '0' },
        transition: {
            ease: 'easeInOut',
            duration: 0.5
        },
        delay: 1
    };

    const initialAnimate = () => (!showText ? setShowText(true) : null);

    const pageTitle = useTyped(['Hello! 👋'], 50, 50, () => initialAnimate());

    return (
        <Layout>
            <Container maxW="container.lg" mt={20}>
                <Box
                    my={10}
                    p={10}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="lg"
                    background="white"
                >
                    <Heading as="h1" size="lg">
                        {pageTitle}
                    </Heading>
                    <motion.div
                        initial="hidden"
                        variants={container}
                        initial="hidden"
                        animate={showText ? 'show' : 'hidden'}
                    >
                        <motion.div variants={item}>
                            <Text variant="copy" as="h2" fontSize="30px">
                                I'm Ally Reid, a Senior Front End Software
                                Engineer from Glasgow, Scotland.{' '}
                            </Text>
                        </motion.div>

                        <motion.div variants={item}>
                            <Text variant="copy">
                                Obsessed with all things Javascript, UI Design
                                and Web Application Development.
                            </Text>
                        </motion.div>

                        <motion.div variants={item}>
                            <NextLink href="/about">
                                <Button
                                    variant="primary"
                                    rightIcon={<ArrowRight />}
                                    colorScheme="teal"
                                    maxW="200px"
                                >
                                    Tell me more!
                                </Button>
                            </NextLink>
                        </motion.div>
                    </motion.div>
                </Box>
            </Container>
        </Layout>
    );
}
