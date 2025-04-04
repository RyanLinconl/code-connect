import Image from "next/image"
import { Avatar } from "../Avatar"
import Styles from './cardpost.module.css'

export const CardPost = ({ post }) => {
    return (
            <article className={Styles.card}>
                <header className={Styles.header}>
                    <figure>
                        <Image
                            src={post.cover}
                            width={438}
                            height={133}
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className={Styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={Styles.footer}>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
    )

}