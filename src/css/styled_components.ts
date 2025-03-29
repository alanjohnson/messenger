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
  gap: 5px;
  padding: 5px;
  border: 1px solid grey;
  min-width: 45px;
  @media (max-width: 400px) {
    max-width: 45px;
  }
  button {
    border: 2px solid transparent;
    text-align: left;
    position: relative;
    padding-left: 45px;
    height: 42px;
    &.active {
      border-color: #99c8ff;
    }
    .avatar {
      border-radius: 50%;
      border: 1px solid #3a3a3a;
      width: 30px;
      height: 30px;
      display: inline-block;
      position: absolute;
      left: 4px;
      top: 2px;
    }
  }
  @media (max-width: 400px) {
    button {
      padding-left: 0;
    }
    .name {
      display: none;
    }
  }
`;

export const StyledMessageHistory = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 1;
  p {
    padding: 2px 5px;
    margin: 5px 30px 5px 5px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .me {
    margin: 5px 5px 5px 30px;
    background-color: rgba(97, 104, 243, 0.5);
  }
`;
