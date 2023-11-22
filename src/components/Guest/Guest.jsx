function Guest({guest, deleteGuest}){
    return(
        <tr>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
            <td>
                <button onClick={() => deleteGuest(guest)}>🗑️</button>
            </td>
        </tr>
    );
}

export default Guest;