import {
    Button,
    Box,
    Container,
    Heading,
    HStack,
    Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import useTyped from '@hooks/useTyped';
import Layout from '@components/Layout';
import { getDatabase, getPage, getBlocks } from '../../lib/notion';
export const pageId = process.env.NOTION_PAGE_ID;
export const databaseId = process.env.NOTION_DB_ID;

export default function Blog({ posts }) {
    const pageHeading = useTyped(['Some words...'], 50, 50, () => {});

    const formatNotionContent = (content) => {
        const { properties } = content;
        const { Name, Tags } = properties;

        return {
            title: Name.title[0].plain_text,
            tags: Tags.multi_select
        };
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
                </Box>

                {posts.length &&
                    posts.map((post) => {
                        console.log(post);
                        const { title, tags } = formatNotionContent(post);
                        return (
                            <Box key={post.id}>
                                <NextLink href={`/blog/${post.id}`}>
                                    <Heading>{title}</Heading>
                                </NextLink>
                            </Box>
                        );
                    })}
            </Container>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const db = await getDatabase(databaseId);

    return {
        props: {
            posts: db
        },
        revalidate: 1
    };
};
