import React from 'react';
import BookingForm from './BookingForm';

function Booking (props) {
    return (
        <div>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
        </div>
    )
}
export default Booking;
