import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmptyFieldMessage, setShowEmptyFieldMessage] = useState(false);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // for empty search bar
      setShowEmptyFieldMessage(true);
      return;
    }

    setShowEmptyFieldMessage(false);

    const foundItem = data.find(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundItem) {
      // to switch on a different page according to the searhced recipe
      router.push(`/Recipes/${foundItem.id}`);
    } else {
      // if theres no recipe found
      console.log('Item not found!');
      setShowNotFoundMessage(true);

      setTimeout(() => {
        setShowNotFoundMessage(false);
      }, 3000);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {showEmptyFieldMessage && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          Please enter a search term.
        </div>
      )}

      {showNotFoundMessage && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          Item not found. Please try again.
        </div>
      )}
    </div>
  );
};

export default SearchComponent;