import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Profile() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  console.log(user)


  let { data: savePost, error } = await supabase
    .from('savePost')
    .select('*')
  console.log(savePost)

  return (
    <div className="user-container">
      <p className="user-name">{user.email}</p>
      <h2>Save Post</h2>
      <div className="profile-cizgi"></div>
      {savePost.map((x, i) =>
        <p key={i}>
          <Link className="save-post" href={`/posts/${x.id}`}>
            <h3>{x.title}</h3>
            {x.content}
          </Link>
        </p>
      )}
    </div>
  )
}