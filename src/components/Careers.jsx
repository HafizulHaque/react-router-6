import { Link, useLoaderData } from "react-router-dom";

//loader function
export const careersLoader = async () => {
  let res = await fetch('http://localhost:4000/careers');

  if(!res.ok){
    throw new Error('Could not fetch careers from server');
  }
  return res.json()
}

const Careers = () => {

  const careers = useLoaderData()

  return (
    <div className='careers'>
      {
        careers.map(career => (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))
      }
    </div>
  )
}

export default Careers
