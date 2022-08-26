import styled from 'styled-components'

export const Container = styled.div`
  min-width: 50vw;
  max-width: 400px;
  min-height: 500px;
  overflow-y: hidden;

  .search {
    margin-top: 50px;
    font-size: 13px;
    line-height: 20px;
    color: var(--ligth-grey);
  }

  form {
    margin-top: 5px;
    width: 100%;
    display: flex;
    gap: 15px;
    height: 40px;
    .input {
      background-color: var(--bgCard);
      border: none;
      width: 100%;
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
  .areaRepos {
    margin-top: 50px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-bottom: 100px;
  }

  @media (max-width: 500px) {
    min-width: 90%;
    max-width: 90%;
  }
`
