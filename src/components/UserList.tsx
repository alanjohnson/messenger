import { useContext } from 'react';
import { StyledUserList } from '@/css/styled_components';
import { mockUsers } from '@/data/mockData';
import AppContext from '@/contexts/AppContext';

export default function UserList() {
  const { recipient } = useContext(AppContext);

  return (
    <StyledUserList>
      {mockUsers.map(user => (
        <button
          className={recipient === user.name ? 'active' : ''}
          key={user.id}
          onClick={() => {
            console.log('clicky', user.name);
          }}
        >
          <div className="avatar" />
          <span className="name">{user.name}</span>
        </button>
      ))}
    </StyledUserList>
  );
}
