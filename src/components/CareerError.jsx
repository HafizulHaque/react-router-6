import { Link } from "react-router-dom"
import { useRouteError } from "react-router-dom"

const CareerError = () => {

  const error = useRouteError()

  return (
    <div className="career-error">
      <h2>Couldn't load that career</h2>
      <p>{error.message}</p>
      <Link to="/careers">Go to Career Page</Link>
    </div>
  )
}

export default CareerError
