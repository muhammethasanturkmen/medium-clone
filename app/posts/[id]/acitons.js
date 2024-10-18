"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function comments(formData) {

  const content = formData.get("comments");
  const post_id = formData.get("post_id");

  const supabase = createClient();

  const { data : { user }  } = await supabase.auth.getUser();


  const { data, error } = await supabase
  .from('comments')
  .insert(
    { content, user_id: user.id, post_id: post_id }
  )
  .select()
  console.log(data)
  redirect(`/posts/${post_id}`)
}

export async function like(formData) {
  const post_id = formData.get("post_id");

  const supabase = createClient();
  const { data : { user }  } = await supabase.auth.getUser();

  
  const { data, error } = await supabase
  .from('likes')
  .insert(
    { user_id: user.id, post_id: post_id },
  )
  .select()
  redirect(`/posts/${post_id}`)      
}

export async function likeDel(formData) {
  const post_id = formData.get("post_id");

  const supabase = createClient();
  const { data : { user }  } = await supabase.auth.getUser();

  
  const { data, error } = await supabase
  .from('likes')
  .delete()
  .eq( 'post_id', post_id )
  .eq('user_id', user.id)
  redirect(`/posts/${post_id}`)

}

export async function save(formData) {
  const post_id = formData.get("post_id")


  const supabase = createClient();
  const { data : { user }  } = await supabase.auth.getUser();

  const { data: post, error: postError } = await supabase
  .from("posts")
  .select("title, content")
  .eq("id", post_id)
  .single();

  const { data, error } = await supabase
  .from('savePost')
  .insert(
    { user_id: user.id,
      post_id: post_id,
      title: post.title,
      content: post.content, }
  )
  redirect(`/posts/${post_id}`)
}

export async function saveDel(formData) {
  const post_id = formData.get("post_id")


  const supabase = createClient();
  const { data : { user }  } = await supabase.auth.getUser();

  const { data: post, error: postError } = await supabase
  .from("posts")
  .select("title, content")
  .eq("id", post_id)
  .single();

  const { data, error } = await supabase
  .from('savePost')
  .delete()
  .eq('user_id', user.id)
  .eq('post_id', post_id)
  .eq('title', post.title)
  .eq('content', post.content)
  redirect(`/posts/${post_id}`)
}

