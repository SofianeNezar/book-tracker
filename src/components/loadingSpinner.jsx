import '../css/LoadingSpinner.css';

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading books...</p>
        </div>
    );
}

export default LoadingSpinner;