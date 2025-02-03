import Image from 'next/image';
import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <div> ©2025 Zalish. All rights reserved.</div>
            <div className={styles.social}>
            <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Zalish Dev Facebook Account" />
            <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Zalish Dev" />
            <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Zalish Dev" />
            <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Zalish Dev" />            
         </div>
        </div>
    );
};

export default Footer;