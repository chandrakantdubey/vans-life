import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const {currentVan} = useOutletContext()
    console.log(currentVan)

    return (
        <div className="app__wrapper container">
            <img src={currentVan.imageUrl} className="host-van-detail-image" />
        </div>
    )
}
