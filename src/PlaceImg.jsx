


export default function PlaceImg({ place, index = 0, className = null }) {
    if (!place.photos?.length) {
        return '';
    }
    if (!className) {
        className = 'h-full object-cover rounded-lg';
    }
    return (
        <img className={className} src={`${import.meta.env.VITE_BASE_URL}/uploads/${place.photos[index]}`} alt="" />
    );
}