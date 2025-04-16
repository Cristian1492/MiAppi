import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const UserList = () => {
  const { users, searchTerm } = useContext(GlobalContext);

    const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Lista de Usuarios</h2>
      {filteredUsers.map(user => (
        <div key={user.id} className="p-2 border-b">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

