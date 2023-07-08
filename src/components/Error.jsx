import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    console.log(error);
  return (
    <div id="error">
      <div className="container app__wrapper">
          <h1>{error.message}</h1>
          <p>{error.statusText} - {error.status}</p>
      </div>
    </div>
  )
}
