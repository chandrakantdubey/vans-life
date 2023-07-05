import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
  return (
    <>
        <h1>{error.message}</h1>
        <p>{error.statusText} - {error.status}</p>
    </>
  )
}
