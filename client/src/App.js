import { useState, useEffect } from "react";
import './App.css';
import {getBookings, deleteBooking} from './BookingService';
import BookingGrid from './BookingGrid';
import BookingForm from './BookingForm';


function App() {

const [guestBookings, setGuestBookings] = useState([]);

useEffect(()=>{
  getBookings()
  .then((allBookings)=>{
    console.log(allBookings)
    setGuestBookings(allBookings);
  })
}, []);


const addBooking = (booking) =>{
  let temp = guestBookings.map(s =>s);
  temp.push(booking);
  setGuestBookings(temp);
}


const removeBooking = (id) => {
  deleteBooking(id).then(()=>{
  let temp = guestBookings.map(s =>s);
  const indexToDel = temp.map(s =>s._id).indexOf(id);
  console.log(indexToDel);

  temp.splice(indexToDel, 1);
  setGuestBookings(temp);
})
}

  return (
    <>
          <BookingForm addBooking={addBooking}/>
          <BookingGrid bookings={guestBookings} removeBooking={removeBooking} />
    </>
  );
}

export default App;
