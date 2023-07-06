import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
  const {currentVan} = useOutletContext()
  console.log(currentVan)
  return (
    <div>
      <h5 className="my-4 fw-bold">Name: <span className="fw-normal">{currentVan.name}</span></h5>
      <h5 className="my-4 fw-bold">Category: <span className="fw-normal">{currentVan.type.toUpperCase()}</span></h5>
      <h5 className="my-4 fw-bold">Description: <span className="fw-normal">{currentVan.description}</span></h5>
      <h5 className="my-4 fw-bold">Visibility: <span className="fw-normal">Public</span></h5>
    </div>
  )
}
