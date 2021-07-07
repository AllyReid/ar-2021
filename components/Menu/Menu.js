import { useRouter } from 'next/router';
import Link from 'next/link';
import { HStack } from '@chakra-ui/react';
import styles from './menu.module.css';

export default function Menu() {
    const router = useRouter();
    const setActiveLink = (href) =>
        href === router.pathname ? `${styles.active}` : null;

    return (
        <HStack spacing="30px">
            <Link href="/">
                <a className={setActiveLink('/')}>Home</a>
            </Link>
            <Link href="/about">
                <a className={setActiveLink('/about')}>About</a>
            </Link>
            <Link href="/blog">
                <a className={setActiveLink('/blog')}>Blog</a>
            </Link>
            <Link href="/contact">
                <a className={setActiveLink('/contact')}>Contact</a>
            </Link>
        </HStack>
    );
}
