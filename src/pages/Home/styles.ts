import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 100px;
  flex: 1;
  overflow-x: hidden;
  box-sizing: border-box;
  min-width: 100%;
  min-height: 100vh;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card {
    height: 70vh;
    width: 50%;
    background-color: var(--bgCard);
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 12px 0px var(--black);
    box-shadow: 0px 0px 12px 0px var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .image {
      width: 70%;
      height: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    form {
      width: 90%;
      display: flex;
      gap: 15px;
      height: 40px;
      .input {
        background-color: var(--bg);
        border: none;
        width: 80%;
        border-radius: 5px;
        outline: none;
        padding-left: 15px;

        color: var(--ligth-grey);
        transition: all 0.2s;

        &:hover {
          transform: scale(1.01);
          transition: all 0.2s;
        }
      }
      button {
        width: 20%;
        background-color: var(--bg-button);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        color: var(--bg);

        &:hover {
          transform: scale(1.05);
          transition: all 0.2s;
        }
      }
    }
  }
  .arrowDown {
    border: none;
    outline: none;
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: var(--bg-button);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
