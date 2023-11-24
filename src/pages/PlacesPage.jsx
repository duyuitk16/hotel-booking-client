import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import PlacesFormPage from "./PlacesFormPage";
import AccountNav from "../AccountNav";



export default function PlacesPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        // axios.get('/user-places').then(({ data }) => {
        //     setPlaces(data);
        // })
        // console.log(import.meta.env.VITE_BASE_URL);
        fetch(`${import.meta.env.VITE_BASE_URL}/user-places`, {
            credentials: 'include'
        })
            .then(response => {
                response.json().then(data => {
                    setPlaces(data);
                });
            });

    }, [])

    return (
        <div>
            <AccountNav />
            <div className="text-center h-fit">
                <br />
                <Link className="inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full mb-14" to={"/account/places/new"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add new place
                </Link>
            </div>

            {/* List user's hotels */}
            <div className="px-2">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/' + place._id} className="flex cursor-pointer mb-4 gap-x-4 bg-gray-200 p-4 rounded-xl">
                        <div className="flex w-32 h-32 bg-gray-300 grow shrink-0 rounded-xl">
                            {place.photos.length > 0 && (
                                <img className="object-cover rounded-xl" src={`${import.meta.env.VITE_BASE_URL}/uploads/${place.photos[0]}`} alt="" />
                            )}
                        </div>
                        <div className="grow-0 shrink">
                            <h2 className="text-xl">{place?.title}</h2>
                            <p className="text-sm mt-2">{place?.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}