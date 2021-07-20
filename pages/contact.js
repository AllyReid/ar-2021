import {
    Box,
    Container,
    Divider,
    Flex,
    Heading,
    Text,
    HStack,
    Link
} from '@chakra-ui/react';
import {
    GitHubOutline,
    LinkedIn,
    Twitter,
    EmojiTalkingHappy
} from 'iconoir-react';
import Layout from '@components/Layout';
import ContactForm from '@components/ContactForm';
import useTyped from '@hooks/useTyped';

export default function Contact() {
    const pageHeading = useTyped(['Get in touch.'], 50, 50, () => null);

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
                        {pageHeading}
                    </Heading>
                    <HStack spacing={5} my={10}>
                        <Text as="h2">Let's connect:</Text>
                        <Box>
                            <Link
                                title="Github"
                                href="https://github.com/allyreid"
                            >
                                <GitHubOutline />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                title="LinkedIn"
                                href="https://uk.linkedin.com/in/allyreid"
                            >
                                <LinkedIn />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                title="Twitter"
                                href="https://twitter.com/allyreid"
                            >
                                <Twitter />
                            </Link>
                        </Box>
                    </HStack>
                    <Flex
                        alignItems="center"
                        background="green.100"
                        p={2}
                        borderRadius="md"
                    >
                        <EmojiTalkingHappy />
                        <Text ml={2} fontWeight="bold">
                            Currently open to discussing opportunities.
                        </Text>
                    </Flex>
                    <Divider mb={5} />
                    <ContactForm />
                </Box>
            </Container>
        </Layout>
    );
}
