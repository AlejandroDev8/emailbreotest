export default function HomePage() {

  async function sendEmail(formData: FormData) {
    'use server'

    const title = formData.get('title')
    const to = formData.get('to')
    const content = formData.get('content')

    if (!title || !to || !content) {
      return alert('Missing required fields')
    }

    console.log({
      title,
      to,
      content
    })

  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={sendEmail} method="POST" className="flex flex-col gap-y-4">
        <input type="text" name="title" placeholder="Email Tittle" className="bg-slate-400 block p-2 placeholder:text-white"/>
        <input type="email" name="to" placeholder="To" className="bg-slate-400 block p-2 placeholder:text-white"/>
        <textarea name="content" className="bg-slate-400 block p-2 placeholder:text-white" placeholder="Write to email.."></textarea>
        <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Send</button>
      </form>
    </div>
  )
}