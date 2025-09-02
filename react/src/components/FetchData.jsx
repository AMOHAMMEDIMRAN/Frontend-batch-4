




const FetchData = (props) => {






    return (
        <div>
            <ul>
                {
                    props.data.map((u) => (
                        <li key={u.id}>{u.name} </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default FetchData