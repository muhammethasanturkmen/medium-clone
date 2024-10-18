"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function SavePost(formData) {
  const title = formData.get("title")
  const content = formData.get("content")

  const supabase = createClient();

  const { data : { user }  } = await supabase.auth.getUser();
  

  if(!user) {
    redirect("/login")
  }

  const { data, error } = await supabase
  .from('posts')
  .insert({ title, content, user_id: user.id })
  .select()
  .single();
  console.log(data)


  if(error) {
    console.log(error);
  }
  redirect(`/posts/${data.id}`)

}