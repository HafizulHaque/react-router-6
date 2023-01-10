import { useLoaderData, useParams } from "react-router-dom"

export const careerDetailsLoader = async ({ params }) => {
  let res = await fetch(`http://localhost:4000/careers/${params.id}`)

  if(!res.ok){
    throw new Error('Career you looking for is not found')
  }
  return res.json();
}

const CareerDetails = () => {

  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nemo numquam tempore laudantium delectus excepturi veniam blanditiis expedita voluptates amet nihil temporibus minima modi, fuga ex consequatur, non ipsum. Iste unde qui beatae sunt cumque commodi nulla? Rerum non doloremque adipisci dicta voluptate. Laborum placeat eaque, commodi sequi praesentium perferendis blanditiis ea soluta corporis quam libero debitis tenetur veritatis officia at laboriosam aut iusto, voluptatem, excepturi provident minus amet natus beatae et. Illum totam cumque quod quae quaerat eos. Praesentium nam perspiciatis id voluptates minima deleniti quidem amet ab, culpa iste, vitae libero, totam expedita! Provident blanditiis quos illo exercitationem!</p>
      </div>
    </div>
  )
}

export default CareerDetails
