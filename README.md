# messenger
example messenger app test

Goals:
1. The user should be able to write messages in the chat window and see them appear.
2. The user should be able to select a friend and see his chat with this friend.
3. No more than 2 hours dev time
 
Non-Goals
1. Persisting chat history.
2. Talking to a backend.
3. Multiple users.

approach:
- use react + vite + typescript
- starting additional packages: styled-components, vite-tsconfig-paths
- use context to share state instead of props drilling
- setup mock data for users and message history
- should have at least these components:
    - recipients list
    - form for sending message
    - message history
- make it look ok in browsers in dark/lght mode
- keep it responsive down to 320px
 
To run
```zsh
 npm install
 npm run dev
```
