import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.textColor};
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
  // const [coins, setCoins] = useState<CoinInterFace[]>([]);
  // const [loading, setLoading] = useState(true);

  // react query이전에 사용했던 소스 ======================
  // const getCoin = async () => {
  //   const res = await axios(`https://api.coinpaprika.com/v1/coins`);
  //   setCoins(res.data.slice(0, 100));
  //   setLoading(false);
  // };
  //==================================================================

  // react Query
  const { isLoading, data: coins } = useQuery<CoinInterFace[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
    select: (data) => data.slice(0, 100),
  });

  // useEffect(() => {
  //   // fetch 방법
  //   // (async () => {
  //   //   const res = await fetch(`https://api.coinpaprika.com/v1/coins`);
  //   //   const json = await res.json();
  //   //   console.log(json);
  //   //   setCoins(json.slice(0,100))
  //   // })();
  //   // axios 방법
  //   // getCoin();
  // }, []);
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinsList>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          coins?.map((coin) => {
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
