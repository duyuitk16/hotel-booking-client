
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";


export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [price, setPrice] = useState(100);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        })
    }, [id])

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4 text-pink-700 font-bold">{text}</h2>
        )
    }
    function inputDescription(text) {
        return <p className="text-black text-sm">{text}</p>
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();
        if (id) {
            const placeData = {
                id,
                title, address, addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price,
            };
            await axios.put('/places', { placeData });
            setRedirect(true);
        } else {
            // new place
            const placeData = {
                id,
                title, address, addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price
            };
            await axios.post('/places', { placeData });
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }
    return (
        <div className="">
            <AccountNav />
            <form onSubmit={savePlace} className="max-w-7xl mx-auto px-2">
                {preInput('Title', 'Title for your place. should be short and catchy')}
                <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="Title..." className="p-1 border border-gray-700 mt-2 rounded-md" />

                {preInput('Address', 'Address for this place')}
                <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="Address" className="p-1 border border-gray-700 mt-2 rounded-md" style={{ minWidth: '200px' }} />

                {preInput('Photos', 'More = Better')}
                <PhotosUploader addedPhotos={addedPhotos} on_Change={setAddedPhotos} />

                {preInput("Description", "Description of the place")}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} className="p-1 border border-gray-700 mt-2 rounded-md" style={{ minWidth: '250px' }} />

                {preInput("Perks", "Select all the perks of your place")}
                <Perks selected={perks} onChange={setPerks} />

                {preInput("Extra info", "House rules, etc")}
                <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} className="p-1 border border-gray-700 mt-2 rounded-md" style={{ minWidth: '250px' }} />

                {preInput("Check in&out times", "Add check in and out times, remember to have some time window for cleaning the room between guests")}
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    <div>
                        <h3 className="mb-3">Check in time</h3>
                        <input type="text" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} placeholder="14:00" className="w-full border border-black rounded px-1  " />
                    </div>
                    <div>
                        <h3 className="mb-3">Check out time</h3>
                        <input type="text" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} placeholder="17:00" className="w-full border border-black rounded px-1  " />
                    </div>
                    <div>
                        <h3 className="mb-3">Max guests</h3>
                        <input type="text" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} className="w-full border border-black rounded px-1  " />
                    </div>
                    <div>
                        <h3 className="mb-3">Price per night</h3>
                        <input type="text" value={price} onChange={ev => setPrice(ev.target.value)} className="w-full border border-black rounded px-1  " />
                    </div>
                </div>
                <button className="primary my-4">Save</button>
            </form>
        </div>
    )
}