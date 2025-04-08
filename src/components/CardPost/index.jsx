import Image from "next/image"
import { Avatar } from "../Avatar"
import Styles from './cardpost.module.css'
import Link from "next/link"

export const CardPost = ({ post, highlight }) => {

    return (
        <Link href={`/posts/${post.slug}`} className={Styles.link}>
            <article className={Styles.card} style={{ width: highlight ? 993 : 486 }}>
                <header className={Styles.header}>
                    <figure style={{ height: highlight ? 300 : 133 }}>
                        <Image
                            src={post.cover}
                            fill
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
        </Link>
    )

}