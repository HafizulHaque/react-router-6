import { Form, redirect, useActionData } from 'react-router-dom'

export const contactAction = async ({ request }) => {
  
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  //send post request
  if(submission.message.length < 10){
    return {
      error: 'Message length must be at least 10 characters'
    }
  }

  //redirect the user to homepage (all ok)
  return redirect('/')
}

const Contact = () => {

  const actionData = useActionData()

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method='POST' action='/help/contact'>
        <label>
          <span>Your email:</span>
          <input type="email" name='email' required/>
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        {
          actionData && actionData.error && 
          <p className="error">{actionData.error}</p>
        }
        <button>Submit</button>
      </Form>
    </div>
  )
}

export default Contact
