import { useState } from 'react';
import {
    Button,
    Box,
    Container,
    Heading,
    HStack,
    Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '@components/Layout';
import useTyped from '@hooks/useTyped';

export default function NotFound() {
    const pageHeading = useTyped(
        ['Nothing to be found here 🤷'],
        50,
        50,
        () => {}
    );

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
                    textAlign="center"
                >
                    <Heading size="lg">{pageHeading}</Heading>
                    <Text>
                        Looks like the page you are looking for doesn't exist
                    </Text>
                    <NextLink href="/">
                        <Button
                            variant="primary"
                            colorScheme="teal"
                            maxW="200px"
                        >
                            Back home
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
}
