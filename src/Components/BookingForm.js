import React, {useState} from 'react';

function BookingForm() {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);

    }
    const handleChange =(e) => {
        setDate(e)
        props.dispatch(e);
    }
    return(
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    {/* book date */}
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input
                                id='book-date'
                                value={date}
                                type='date'
                                onChange={(e) => handleChange(e.target.value)}
                                required>
                            </input>
                        </div>
                    {/* book time */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                    {/* book guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                        </div>
                    {/* book occasion */}
                        <div>
                            <label htmlFor='book-occasion'>Occassion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                    {/* Submit */}
                        <div className='btnReceive'>
                            <button aria-label='On Click' type='submit' value={"Make your reservation"}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}
export default BookingForm;
