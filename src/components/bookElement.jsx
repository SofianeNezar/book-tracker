import { useBookContext } from '../context/context.jsx';
import '../css/bookElement.css';
import { Link } from 'react-router-dom';

function BookElement({ book }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useBookContext();
    const favorite = isFavorite(book.id);

    function onFavClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(book.id);
        } else {
            addToFavorites(book);
        }
    }

    // Handle missing images
    const imageUrl = book.imageUrl || book.url || '/placeholder-book.jpg';
    
    return (
        <Link to={`/Books/${book.id}`}>
        <div className="book-element">
            <div className="book-cover">
                <img 
                    src={imageUrl} 
                    alt={book.title}
                    onError={(e) => {
                        e.target.src = '/placeholder-book.jpg'; // Fallback image
                    }}
                />
            </div>
            <div className="over-book">
                <button 
                    className={`favBtn ${favorite ? 'favorite' : ''}`} 
                    onClick={onFavClick}
                >
                    {favorite ? '❤️' : '🤍'}
                </button>
            </div>
            
            <div className="book-info">
                <h3>{book.title}</h3>
                <p className="book-author">
                    {Array.isArray(book.authors) ? book.authors.join(', ') : book.authors}
                </p>
                <p className="book-date">
                    {book.publishedDate || book.date}
                </p>
                {book.averageRating > 0 && (
                    <p className="book-rating">
                        ⭐ {book.averageRating} ({book.ratingsCount} reviews)
                    </p>
                )}
            </div>
        </div>
        </Link>
    );
}

export default BookElement;