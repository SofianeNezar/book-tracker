import '../css/ErrorMessage.css';

function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-container">
            <div className="error-message">
                <h3>Oops! Something went wrong</h3>
                <p>{message}</p>
                {onRetry && (
                    <button onClick={onRetry} className="retry-button">
                        Try Again
                    </button>
                )}
            </div>
        </div>
    );
}

export default ErrorMessage;