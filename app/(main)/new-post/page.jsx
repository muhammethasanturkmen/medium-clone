import { SavePost } from "./actions";

export default function NewPost() {
  return (
    <form className="new-post" action={SavePost}>
      <input type="text" name="title" placeholder="title" />
      <br />
      <textarea name="content" placeholder="Tell your story…" ></textarea>
      <button>publish</button>
    </form>
  )
}