import { useOutletContext } from "react-router-dom"

export default function HostVansPricing() {
    const {currentVan} = useOutletContext()
    console.log(currentVan)

    return (
        <h3 className="">${currentVan.price}<span>/day</span></h3>
    )
}
