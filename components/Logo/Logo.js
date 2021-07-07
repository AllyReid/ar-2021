import React from 'react';
import ArLogo from '../../public/logo.svg';
import styles from '@components/Logo/logo.module.css';
import { ClassNames } from '@emotion/react';

const Logo = ({ colorMode }) => {
    const colorModeClass =
        colorMode && colorMode === 'dark' ? styles.light : null;
    return (
        <ClassNames>
            {({ cx }) => <ArLogo className={cx(colorModeClass, styles.logo)} />}
        </ClassNames>
    );
};

export default Logo;
