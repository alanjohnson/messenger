import { MessengerContainer, MessageWindow } from '@/css/styled_components';
import AppProvider from '@/contexts/AppProvider';
import UserList from '@/components/UserList';
import MessageForm from '@/components/MessageForm';
import MessageHistory from '@/components/MessageHistory';
import '@/css/app.css';
import '@/css/animations.css';

function App() {
  return (
    <>
      <h3>Messenger App</h3>
      <MessengerContainer>
        <AppProvider>
          <UserList />
          <MessageWindow>
            <MessageHistory />
            <MessageForm />
          </MessageWindow>
        </AppProvider>
      </MessengerContainer>
    </>
  );
}

export default App;
