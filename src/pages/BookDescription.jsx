import { useParams } from "react-router-dom";
import { useBookContext } from "../context/context";
import { getBookById } from '../Apis/bookAPI';
import { useEffect,useState } from "react";


function BookDescription() {
    const {id}= useParams();
    const [book, setBook]= useState({});
   // const {books} = useBookContext();
useEffect(() => {
  async function fetchBook() {
    const data = await getBookById(id); // wait for the API
    setBook(data);                      // save the book in state
  }
  fetchBook(); // run it
}, [id]);


    return(
        
        <div className="description">
            <h1>This is the book description page</h1>
            <p>{book.description}</p>
            <p>{book.pageCount}</p>
            <p>{book.language}</p>
        </div>
    )
}
export default BookDescription;