import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/Form';
import List from './components/List';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem('savedData')
      ? dispatch({
          type: 'INIT',
          payload: JSON.parse(localStorage.getItem('savedData')),
        })
      : null;
  }, []);

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;
