import { createClient } from "@/utils/supabase/server"
import Link from "next/link";

export default async function Home() {

  const supabase = createClient();
  let { data: posts, } = await supabase
  .from('posts')
  .select('*')
        
  return (
    <>
    {posts.map((x, i) => 
        <div className="home" key={i}>
          <Link className="main-link" href={`/posts/${x.id}`}><h3>{x.title}</h3> <p>{x.content}</p></Link>
          <div className="cizgi"></div>
        </div>
    )}
    </>
  )
} 