import { useState } from 'react';
import { useBookContext } from '../context/context';
import '../css/SearchBar.css';

function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const {searchBooks, loading } = useBookContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            searchBooks(inputValue.trim());
        }
    };


    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className="search-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for books..."
                    className="search-input"
                    disabled={loading}
                />
                <button 
                    type="submit" 
                    className="search-button"
                    disabled={loading || !inputValue.trim()}
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
        </form>
    );
}

export default SearchBar;