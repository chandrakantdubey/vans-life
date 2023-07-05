import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <div className="row">
        <h2 className='col-12'>
            The requested page does not exist.
        </h2>
        <Link className="col-8 home__btn justify-content-center m-auto my-5" to="/">
        Return Home
      </Link>
    </div>
  )
}
