import BookElement from "../components/bookElement";
import { useBookContext } from "../context/context";


function FavBooks() {
    const {favBooks} = useBookContext();
    
    if(favBooks.length === 0){
    return(    
     <div>
        <h1>No favorite books yet</h1>
    </div>
    )}
    
    return(
        <div className ="books-list">
            {favBooks.map(book => <BookElement book={book} key={book.id} /> )}
        </div>
    )
}
export default FavBooks;