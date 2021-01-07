import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({})

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then(()=>{
            addBooking(formData);
        })
    }

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="Name">Name:</label>
                <input onChange={onChange} type="text" id="name"
                required  />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email"
                required  />
            </div>
            <div className="formWrap">
                <label htmlFor="status">status:</label>
                <input onChange={onChange} type="text" id="status"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default BookingsForm;