import styled from 'styled-components'

export const Container = styled.a`
  min-height: 130px;
  background-color: red;
  border: none;
  border-radius: 10px;
  background-color: var(--bgCard);
  text-decoration: none;
  padding: 10px;
  transition: all 0.5s;

  &:hover {
    background-color: var(--bg-button);
    transform: scale(1.05);
    transition: all 0.5s;
    .header {
      .tec {
        color: var(--white);
      }
    }
    .descriptionRepos {
      color: var(--white);
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .nameRepos {
      font-size: 13px;
      line-height: 20px;
      color: var(--white);
    }
    .tec {
      font-size: 9px;
      line-height: 12px;
      color: var(--ligth-grey);
    }
  }
  .descriptionRepos {
    font-size: 13px;
    line-height: 20px;
    color: var(--ligth-grey);
  }
`
