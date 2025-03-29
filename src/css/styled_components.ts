import styled from 'styled-components';

export const MessengerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  min-width: 280px;
`;

export const MessageWindow = styled.div`
  flex: 2;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  form {
    align-self: flex-end;
    width: calc(100% - 10px);
    display: flex;
    padding: 5px;
    justify-content: space-between;
    input {
      width: 80%;
      padding: 10px;
      border: 1px solid grey;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
`;

export const StyledUserList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledMessageHistory = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 1;
`;
