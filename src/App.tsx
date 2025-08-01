import { useEffect, useState } from 'react';
import './App.css';

type User = {
  id: string | number;
  name: string;
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">DevOps Demo Dashboard</h1>
      <button
        onClick={() => {
          throw new Error('Sentry error test!');
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
