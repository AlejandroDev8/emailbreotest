'use server'

export async function sendEmail(formData: FormData) {

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