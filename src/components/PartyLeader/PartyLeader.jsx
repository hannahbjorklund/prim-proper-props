function PartyLeader({leader}){
    if(leader){
        return(
            <>
                <h2>Party Leader</h2>
                <h3>{leader.name}</h3>
            </>
        );
    } else {
        return(
            <h2>Party Leader</h2>
        );
    }
}

export default PartyLeader;