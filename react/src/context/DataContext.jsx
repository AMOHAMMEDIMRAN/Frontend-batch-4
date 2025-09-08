import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const DataContext = createContext();


export const DataProvider = ({children}) => {
    const [user, setUser] = useState([])


    useEffect(() => {
      
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                console.log(res);
                setUser(res.data)
            } catch (error) {
                console.error(error);
            }
        }
    
        fetchData();
      
    }, []);


    return (
        <DataContext.Provider value={{user,movie}}>
            {children}
        </DataContext.Provider>
    )
    

}



