import Alice from '@/assets/Alice.jpg';
import Bob from '@/assets/Bob.jpg';
import Charlie from '@/assets/Charlie.jpg';
import David from '@/assets/David.jpg';
import Eve from '@/assets/Eve.jpg';

export const mockUsers = [
  { id: 1, name: 'Alice', avatar: Alice },
  { id: 2, name: 'Bob', avatar: Bob },
  { id: 3, name: 'Charlie', avatar: Charlie },
  { id: 4, name: 'David', avatar: David },
  { id: 5, name: 'Eve', avatar: Eve }
];

export const mockMessages = {
  Alice: [
    { id: 1, recipient: 'Alice', message: 'Hello!' },
    { id: 2, recipient: 'me', message: 'Hi! How are you?' },
    { id: 3, recipient: 'Alice', message: 'Doing well, good morning!' }
  ],
  Bob: [
    { id: 1, recipient: 'Bob', message: 'Wazuuuuuup!' },
    { id: 2, recipient: 'me', message: 'Hey, not much' },
    { id: 3, recipient: 'Bob', message: 'Free today?' },
    { id: 4, recipient: 'me', message: 'No' }
  ],
  Charlie: [
    { id: 1, recipient: 'Charlie', message: 'OMW!' },
    { id: 2, recipient: 'me', message: 'Great, see you in a bit' },
    { id: 3, recipient: 'Charlie', message: 'be there in 10 min' },
    { id: 4, recipient: 'me', message: 'ok' },
    { id: 5, recipient: 'Charlie', message: 'See you soon' }
  ],
  David: [
    { id: 1, recipient: 'me', message: 'Had fun, thx for the invite' },
    { id: 2, recipient: 'David', message: 'np, was good time' },
    { id: 3, recipient: 'me', message: 'Good night' },
    { id: 4, recipient: 'David', message: 'See you later' }
  ],
  Eve: [
    { id: 1, recipient: 'Eve', message: 'beep boop' },
    { id: 2, recipient: 'me', message: 'beep beep boop beeeeeep' },
    { id: 3, recipient: 'Eve', message: 'haha haha haha' },
    { id: 4, recipient: 'me', message: 'boooop boop beep' },
    { id: 5, recipient: 'Eve', message: 'beep' }
  ]
};
