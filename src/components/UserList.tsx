import { useContext } from 'react';
import { StyledUserList } from '@/css/styled_components';
import { mockUsers } from '@/data/mockData';
import AppContext from '@/contexts/AppContext';

export default function UserList() {
  const { recipient, setRecipient } = useContext(AppContext);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedUser = event.currentTarget.innerText;
    setRecipient(selectedUser);
  };

  return (
    <StyledUserList>
      {mockUsers.map(user => (
        <button
          className={recipient === user.name ? 'active' : ''}
          key={user.id}
          onClick={handleOnClick}
        >
          <div className="avatar">
            <img src={user.avatar} />
          </div>
          <span className="name">{user.name}</span>
        </button>
      ))}
    </StyledUserList>
  );
}
