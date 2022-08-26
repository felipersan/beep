import styled from 'styled-components'

interface props {
  photo: number
}

export const Container = styled.div<props>`
  width: 100%;
  min-height: 150px;
  background-color: var(--bgCard);
  -webkit-box-shadow: 0px 0px 12px 0px var(--black);
  box-shadow: 0px 0px 12px 0px var(--black);
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: transparent;

  .perfil {
    min-height: 110px;
    min-width: 110px;
    border-radius: 25px;
    background-position: center;
    background-size: cover;
  }
  .text {
    .name {
      font-size: 25px;
      line-height: 40px;
      color: var(--white);
    }
    .description {
      font-size: 13px;
      line-height: 20px;
      color: var(--ligth-grey);
    }
    .github {
      text-decoration: none;
      margin-top: 10px;
      background-color: var(--bg-button);
      min-height: 30px;
      border-radius: 5px;
      padding-left: 15px;
      padding-right: 15px;
      max-width: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      color: var(--white);
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    .perfil {
      min-height: ${({ photo }) => photo && `${photo}px`};
      min-width: ${({ photo }) => photo && `${photo}px`};
    }
  }
`
