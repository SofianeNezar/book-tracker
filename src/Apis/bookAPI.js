const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const lookForBooks =async (query , maxBooks = 20) => {

   console.log('API called with query:', query);
    
    try {
        const resBooks = await fetch(
            `${BASE_URL}?q=${encodeURIComponent(query)}&maxResults=${maxBooks}`
        );
        
        console.log('Response status:', resBooks.status);

        if (!resBooks.ok) {
            throw new Error('HTTP error');
        }

        const data = await resBooks.json();
        console.log('Raw API data:', data);
        console.log('Number of items:', data.items?.length);

    const books = data.items?.map(item => ({
      id: item.id,
      title: item.volumeInfo?.title || 'Unknown Title',
      authors: item.volumeInfo?.authors || ['Unknown Author'],
      publishedDate: item.volumeInfo?.publishedDate || 'Unknown Date',
      description: item.volumeInfo?.description || 'No description available',
      imageUrl: item.volumeInfo?.imageLinks?.thumbnail?.replace('http:', 'https:') || null,
      categories: item.volumeInfo?.categories || [],
      averageRating: item.volumeInfo?.averageRating || 0,
      ratingsCount: item.volumeInfo?.ratingsCount || 0,
      pageCount: item.volumeInfo?.pageCount || 0,
      language: item.volumeInfo?.language || 'en'
    })) || [];
    
    console.log('Processed books:', books); // Add this
        return books;

    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books. Please try again.');
    }
};

export const getBookById =async(id) => {
    const response = await fetch(`${BASE_URL}/${id}`);

    const item = await response.json()

    return {
      id: item.id,
      title: item.volumeInfo?.title || 'Unknown Title',
      authors: item.volumeInfo?.authors || ['Unknown Author'],
      publishedDate: item.volumeInfo?.publishedDate || 'Unknown Date',
      description: item.volumeInfo?.description || 'No description available',
      imageUrl: item.volumeInfo?.imageLinks?.thumbnail?.replace('http:', 'https:') || null,
      categories: item.volumeInfo?.categories || [],
      averageRating: item.volumeInfo?.averageRating || 0,
      ratingsCount: item.volumeInfo?.ratingsCount || 0,
      pageCount: item.volumeInfo?.pageCount || 0,
      language: item.volumeInfo?.language || 'en'
    };
}

