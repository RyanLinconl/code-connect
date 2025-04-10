import Image from 'next/image'
import Styles from './aside.module.css'

import Logo from './logo.png'
import Link from 'next/link'

export const Aside = () => {
    return (
        <aside className={Styles.aside}>
            <Link href={'/'}>
            <Image src={Logo} alt='Logo da Code Connect' />
            </Link>
        </aside>
    )
}