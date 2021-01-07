
import BookingCard from './BookingCard';

const BookingGrid = ({bookings, removeBooking}) => {
    const bookingsList = bookings.map((booking) => {
        console.log(booking); 

        return <BookingCard booking={booking} removeBooking={removeBooking} />
       
    });

return(
    <>
        {bookingsList}
    </>
);
}
export default BookingGrid;