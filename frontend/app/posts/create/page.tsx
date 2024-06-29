"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createPost } from "@/app/actions/create-post"
import { redirect } from "next/navigation"

export default function CreatePost() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-full">
        <h1 className="text-xl md:text-4xl text-primary font-semibold pb-4 md:pb-8">
          Create a new post
        </h1>
        <form
          action={async (form: FormData) => {
            const { success, message, result } = await createPost(form)

            if (!success || !result) {
              alert(message)
              return
            }

            redirect(`/posts/${result.id}`)
          }}
          className="w-full max-w-screen-md space-y-10"
        >
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="title" className="opacity-75">Title</label>
            <Input name="title" id="title" placeholder="New post title" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="author" className="opacity-75">Author</label>
            <Input name="author" id="author" placeholder="@author" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="content" className="opacity-75">Content</label>
            <Textarea
              name="content"
              id="content"
              className="min-h-[250px]"
            />
          </div>
          <Button>
            Create post
          </Button>
        </form>
      </section>
    </>
  )
}
