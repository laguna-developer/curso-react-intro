import React from 'react'

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };

/* const defaultTodos = [
  { text: ' Eilyn ', completed: true },
  { text: ' Nalys ', completed: false },
  { text: ' Katya ', completed: true },
  { text: ' Nataly ', completed: false },
  { text: ' Paola ', completed: true },
  { text: ' Nicolas ', completed: false },
  { text: ' Camilo ', completed: true },
  { text: ' Andreys ', completed: false },
  { text: ' Natalia ', completed: true },
  { text: ' Day ', completed: false },
  { text: ' May ', completed: true },
  { text: ' Jhojan ', completed: false },
]; */

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');