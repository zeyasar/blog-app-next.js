import styles from './styles.module.css'
import BlogCard from '@/components/BlogCard'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

async function getPost(){
  try {
    const response = await fetch('https://dummyjson.com/posts?limit=10')
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
  
}

export default async function Home() {

  const {posts} = await getPost()
  
  return (
    <div className={styles.blogsContainer}>
    { posts.map((post)=>(
      <BlogCard key={post.id} {...post}/>
      ))}
      
    </div>
  )
}
