import { deleteBooking } from "./BookingService";


const BookingCard = ({ booking, removeBooking }) => {

    console.log(booking)
    const handleDelete = () => {
    deleteBooking(booking._id).then(()=>{
        removeBooking(booking._id);
    })
}

return (
    <>
        <h1>This is where {booking.name} will display.</h1>
        <button onClick={handleDelete}>🗑</button>
    </>
)
}
export default BookingCard;