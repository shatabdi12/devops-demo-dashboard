import { useEffect, useState } from 'react';
import './App.css';
import * as Sentry from '@sentry/browser';

type User = {
  id: string | number;
  name: string;
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async() => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL);
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      Sentry.captureException(error);
    }
  };

    loadUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">DevOps Demo Dashboard</h1>
      <button
        onClick={() => {
          try {
            Sentry.captureException(new Error('Sentry error test!'));
          } catch (err) {
            Sentry.captureException(err);
          }
        }}
        className="mt-2 px-4 py-2 bg-red-500 text-white"
      >
        Trigger Error
      </button>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
