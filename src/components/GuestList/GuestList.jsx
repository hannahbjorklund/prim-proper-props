import axios from 'axios';
import Guest from '../Guest/Guest'

function GuestList({guestList, getGuests}){

    const deleteGuest = (guest) => {
        axios({
            method: 'DELETE',
            url: `/guests/${guest.id}`
        }).then((response) => {
            getGuests();
        }).catch((error) => {
            console.log("Error in DELETE:", error);
        })
    }

    return (
        <>
            <h2>Guest List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kid's Meal</th>
                        <th>Delete Guest</th>
                    </tr>
                </thead>
                <tbody>
                    {guestList.map(guest => (
                       <Guest key={guest.id} guest={guest} deleteGuest={deleteGuest} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default GuestList;