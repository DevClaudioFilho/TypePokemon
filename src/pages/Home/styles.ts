import styled from 'styled-components';

import PokebolaImg from '../../asset/pokebola.jpeg';

export const Container = styled.div`
  margin: 30px auto 30px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 25px;
  }
  justify-content: space-between;
`;

export const Pokebola = styled.div`
  width: 200px;
  height: 200px;
  padding: 50px;
  line-height: 200px;
  border-radius: 50%;
  background: url(${PokebolaImg}) no-repeat center;
  margin: 190px auto;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-size: 2.75em;
  font-weight: bold;
  color: black;
  transition: 0.4s 0.8s;

  :hover {
    ul {
      transition: transform 1s 0.01s, z-index 0s 0.5s;
      transform: scale(1);
      z-index: 1;
      li {
        transition: all 100s;
      }
    }
  }
`;

export const Types = styled.ul`
  list-style: none;
  padding: 50px;
  margin: 0;
  position: absolute;
  top: -100px;
  left: -100px;
  border: 150px solid transparent;
  cursor: default;
  border-radius: 50%;
  transform: scale(0);
  transition: transform 1s 0.07s;
  z-index: -1;

  :hover {
    transition: transform 0.4s 0.08s, z-index 0s 0.5s;
    transform: scale(1);
    z-index: 1;
  }

  li {
    position: absolute;
    top: -100px;
    left: -100px;
    transform-origin: 150px 150px;
    transition: all 0.5s 0.1s;

    a {
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      background: #ffff;
      position: absolute;
      font-size: 59%;
      color: black;
      transition: 0.7s;
      img {
        width: 45px;
        height: 45px;
        line-height: 45px;
        border-radius: 50%;
      }
    }
    :nth-child(1) {
      transition-delay: 0.02s;
      transform: rotate(20deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(0deg);
      }
    }

    :nth-child(2) {
      transition-delay: 0.02s;
      transform: rotate(40deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-40deg);
      }
    }

    :nth-child(3) {
      transition-delay: 0.02s;
      transform: rotate(60deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-60deg);
      }
    }

    :nth-child(4) {
      transition-delay: 0.02s;
      transform: rotate(80deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-80deg);
      }
    }

    :nth-child(5) {
      transition-delay: 0.02s;
      transform: rotate(100deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-100deg);
      }
    }

    :nth-child(6) {
      transition-delay: 0.02s;
      transform: rotate(120deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-120deg);
      }
    }

    :nth-child(7) {
      transition-delay: 0.02s;
      transform: rotate(140deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-140deg);
      }
    }

    :nth-child(8) {
      transition-delay: 0.02s;
      transform: rotate(160deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-160deg);
      }
    }

    :nth-child(9) {
      transition-delay: 0.02s;
      transform: rotate(180deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-180deg);
      }
    }
    :nth-child(10) {
      transition-delay: 0.02s;
      transform: rotate(200deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-200deg);
      }
    }
    :nth-child(11) {
      transition-delay: 0.02s;
      transform: rotate(220deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-220deg);
      }
    }
    :nth-child(12) {
      transition-delay: 0.02s;
      transform: rotate(240deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-240deg);
      }
    }
    :nth-child(13) {
      transition-delay: 0.02s;
      transform: rotate(260deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-260deg);
      }
    }
    :nth-child(14) {
      transition-delay: 0.02s;
      transform: rotate(280deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(180deg);
      }
    }
    :nth-child(15) {
      transition-delay: 0.02s;
      transform: rotate(300deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-300deg);
      }
    }
    :nth-child(16) {
      transition-delay: 0.02s;
      transform: rotate(320deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-320deg);
      }
    }
    :nth-child(17) {
      transition-delay: 0.02s;
      transform: rotate(340deg);
      a {
        transition-delay: 0.04s;
        transform: rotate(-340deg);
      }
    }
  }
  :nth-child(18) {
    transition-delay: 0.02s;
    transform: rotate(360deg);
    a {
      transition-delay: 0.04s;
      transform: rotate(-360deg);
    }
  }
`;
