import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin: 30px auto 30px;
  max-width: 100%;
  text-align: center;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 25px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin: 250px 0;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 auto;

    animation: loading 1s linear infinite;
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const Pokemon = styled.ul`
  justify-content: center;
  max-width: 100%;
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  align-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  list-style: none;

  li {
    align-items: center;
    text-align: center;
    max-width: 300px;
    height: 400px;
    background: #6f8e9a;
    padding: 20px;

    div {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      h1 {
        text-align: start;
        font-size: 15px;
        color: black;
      }
      h2 {
        margin-top: 10px;
        font-size: 20px;
        color: black;
      }
      p {
        font-size: 15px;
        color: black;
      }
    }
    img {
      margin: 30px 0 0 0;
      width: 100%;
      height: 200px;
    }
  }
`;

export const Pokebola = styled.img`
  opacity: 20%;
  border-radius: 50%;
`;

export const Stats = styled.div`
  margin-top: 20px;
  p {
    font-size: 15px;
  }
`;
