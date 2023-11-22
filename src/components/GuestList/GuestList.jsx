import axios from 'axios';

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
                        <tr key={guest.id}>
                            <td>{guest.name}</td>
                            <td>{String(guest.kidsMeal)}</td>
                            <td>
                                <button onClick={() => deleteGuest(guest)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default GuestList;