import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.3s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterFace {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<CoinInterFace[]>([]);
  const [loading, setLoading] = useState(true);

  const getCoin = async () => {
    const res = await axios(`https://api.coinpaprika.com/v1/coins`);
    setCoins(res.data.slice(0, 100));
    setLoading(false);
  };

  useEffect(() => {
    // fetch 방법
    // (async () => {
    //   const res = await fetch(`https://api.coinpaprika.com/v1/coins`);
    //   const json = await res.json();
    //   console.log(json);
    //   setCoins(json.slice(0,100))
    // })();

    // axios 방법
    getCoin();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinsList>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          coins.map((coin) => {
            return (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/coin/${coin.id}`,
                  }}
                  state={coin}
                >
                  <Img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} alt="" />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            );
          })
        )}
      </CoinsList>
    </Container>
  );
}
