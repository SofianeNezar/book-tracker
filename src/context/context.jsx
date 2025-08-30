import {useState, createContext, useEffect, useContext} from 'react';
import { lookForBooks } from '../Apis/bookAPI';

const bookContext = createContext();
export const useBookContext = () => useContext(bookContext);



export  const BookProvider = ({children}) =>{ 
    const [favBooks,setFavorites] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
        const storedBooks = localStorage.getItem('favBooks')
        if(storedBooks){
            setFavorites(JSON.parse(storedBooks));  
                    
        }
        setIsLoaded(true);  
    },
        []);

    useEffect(() =>{
        if(isLoaded){
        localStorage.setItem('favBooks', JSON.stringify(favBooks))
}
},[favBooks]);

    //API data
    const [books ,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError]= useState(null);
    const [searchQuery, setSearchQuery] = useState('web');


    const searchBooks = async (query)=> {
        if(!query.trim()) return;
        setLoading(true);
        setError(null);
        try{
            const returnBooks = await lookForBooks(query);
            setBooks(returnBooks);
            setSearchQuery(query);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);;
        }
    };
    useEffect(()=> {
        searchBooks(searchQuery);

    }, [])


    

    const addToFavorites= (book) => {
        setFavorites(before => [...before, book]);
    }
    const removeFromFavorites = (id) => {
        setFavorites(before => before.filter(book => book.id !== id));
    }

    function isFavorite(id){
        return favBooks.some(book => book.id === id);
    }

    const PrvValue ={
        isFavorite,
        favBooks,
        addToFavorites,
        removeFromFavorites,
        books,
        loading,
        error,
        searchQuery,
        searchBooks
    }

        return<bookContext.Provider value={PrvValue}>
            {children}
        </bookContext.Provider>
    }