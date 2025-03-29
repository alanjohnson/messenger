import styled from 'styled-components';

export const MessengerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  min-width: 280px;
`;

export const MessageWindow = styled.div`
  border: 1px solid red;
  flex: 2;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
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
