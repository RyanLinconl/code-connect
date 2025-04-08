import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";

import styles from './page.module.css'

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Ops, não conseguimos puxar a API :(')
    return []
  }
  logger.info('Posts obtidos com sucesso!')
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)
  return (
    <main className={styles.grid}>
      {posts ? posts.map(post => <CardPost key={post.id} post={post} />) : <p>Nenhum post encontrado.</p>}
      <div className={styles.links}>
      {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  )
}
