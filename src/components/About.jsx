import { useState } from "react"
import { Navigate } from "react-router-dom"

const About = () => {

  const [user, setUser] = useState('mario')

  if(!user){
    return <Navigate to="/" replace={true}/>
  }

  return (
    <div className='about'>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum reiciendis magni inventore. Fugit nisi repudiandae quidem, provident impedit sequi dicta, eligendi asperiores tempore voluptates ad commodi neque atque iste?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga provident ab ex officiis, adipisci ipsum dolores voluptates beatae quisquam accusantium, quae tempora fugiat consectetur voluptatum distinctio necessitatibus aspernatur minima, eius natus incidunt? Eius facilis, animi dolor accusamus ipsum ad deserunt ducimus ipsam in suscipit. Molestiae, fugiat! Culpa nesciunt architecto in. Nesciunt commodi perferendis laborum quisquam numquam totam temporibus doloremque.</p>

      <button onClick={() => setUser(null)}>Logout User</button>
    </div>
  )
}

export default About
