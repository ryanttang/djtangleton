"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"

const Schema = z.object({ 
  name: z.string(), 
  email: z.string().email(), 
  message: z.string().min(10) 
})
type Form = z.infer<typeof Schema>

export default function ContactScene() {
  const { register, handleSubmit } = useForm<Form>()
  const onSubmit = (data: Form) => { 
    console.log(data) /* wire to email service */ 
  }
  
  return (
    <section className="h-dvh w-dvw grid place-items-center p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <h2 className="text-4xl font-display rgb-split">Booking</h2>
        <input 
          placeholder="Name" 
          {...register("name")} 
          className="w-full bg-black/50 border border-white/20 rounded p-3 text-white"
        />
        <input 
          placeholder="Email" 
          {...register("email")} 
          className="w-full bg-black/50 border border-white/20 rounded p-3 text-white"
        />
        <textarea 
          placeholder="Message" 
          {...register("message")} 
          className="w-full bg-black/50 border border-white/20 rounded p-3 h-32 text-white"
        />
        <button className="bg-white/10 hover:bg-white/20 border border-white/30 rounded px-4 py-2">Send</button>
      </form>
    </section>
  )
}
