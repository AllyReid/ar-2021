import {
    Button,
    Box,
    Container,
    Heading,
    HStack,
    Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@components/Layout';
import useTyped from '@hooks/useTyped';

export default function About() {
    const pageHeading = useTyped(['A little about me...'], 50, 50, () => {});

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
        }
    };

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
                    <Heading size="lg">{pageHeading}</Heading>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item}>
                            <Text variant="copy">
                                A self proclaimed technology addict with over a
                                decades experience working within web and
                                digital media.
                            </Text>
                        </motion.div>
                        <motion.div variants={item}>
                            <Text variant="copy">
                                Experienced in projects within a wide range of
                                industry sectors including education, finance,
                                tourism, ecommerce, theatre and the arts.
                                Working with global teams to realise their
                                goals.
                            </Text>
                        </motion.div>
                        <motion.div variants={item}>
                            <Text variant="copy">
                                I have found my strengths to be working with
                                teams and stakeholders to motivate and achive
                                design and development goals on projects.
                            </Text>
                        </motion.div>
                        <motion.div variants={item}>
                            <Text variant="copy">
                                I'm always learning, continually motivated by
                                new technologies, the power of web as a platform
                                and the endless possibilities combining ideas
                                with the new knowledge I have gained.
                            </Text>
                        </motion.div>
                        <motion.div variants={item}>
                            <Text variant="copy">
                                I'm striving to be part of something that
                                creates real value and solves real problems for
                                users.
                            </Text>
                        </motion.div>
                        <motion.div variants={item}>
                            <HStack spacing="20px">
                                <NextLink href="/contact">
                                    <Button
                                        variant="primary"
                                        colorScheme="teal"
                                        maxW="200px"
                                    >
                                        Get in touch
                                    </Button>
                                </NextLink>
                                <NextLink href="/blog">
                                    <Button
                                        variant="primary"
                                        colorScheme="teal"
                                        maxW="200px"
                                    >
                                        Read more
                                    </Button>
                                </NextLink>
                            </HStack>
                        </motion.div>
                    </motion.div>
                </Box>
            </Container>
        </Layout>
    );
}
