import Image from 'next/image'
import Styles from './aside.module.css'

import Logo from './logo.png'

export const Aside = () => {
    return (
        <aside className={Styles.aside}>
            <Image src={Logo} alt='Logo da Code Connect' />
        </aside>
    )
}