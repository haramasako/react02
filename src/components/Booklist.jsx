// π½ θΏ½ε 
import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {
    // π½ γγγγθΏ½ε 
    const [bookData, setBookData] = useState(null);
  
    useEffect(() => {
      const result = getData?.(language).then((response) =>
        setBookData(response)
      );
    }, [language, getData]);
  
    return (
        <ul>
        {bookData === null ? (
          <p>now loading...</p>
        ) : (
          bookData.data.items.map((x, index) => (
            <li key={index}>{x.volumeInfo.authors}</li>
          ))
        )}
      </ul>
    );
  };