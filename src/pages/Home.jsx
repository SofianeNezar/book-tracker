import { useBookContext } from '../context/context';
import BookElement from '../components/bookElement';
import SearchBar from '../components/searchBar';
import LoadingSpinner from '../components/loadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import '../css/Home.css';

function Home() {
    const { books, loading, error, searchBooks, searchQuery } = useBookContext();

    const handleRetry = () => {
        searchBooks(searchQuery);
    };

    return (
        <div className="home-container">
            <div className="search-section">
                <h1>Discover Books</h1>
                <SearchBar />
            </div>

            <div className="content-section">
                {loading && <LoadingSpinner />}
                
                {error && !loading && (
                    <ErrorMessage message={error} onRetry={handleRetry} />
                )}
                
                {!loading && !error && books.length === 0 && (
                    <div className="no-results">
                        <h3>No books found</h3>
                        <p>Try searching for something else!</p>
                    </div>
                )}
                
                {!loading && !error && books.length > 0 && (
                    <div className="books-list">
                        {books.map(book => (
                            <BookElement book={book} key={book.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;