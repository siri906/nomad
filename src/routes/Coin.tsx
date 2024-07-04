import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useLocation, Outlet, Link, useMatch } from "react-router-dom";
import axios from "axios";
import { CoinInfoData, CoinPriceData } from "../types/CoinInfo";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

interface RouteState {
  state: {
    name: string;
  };
}

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  font-size: 24px;
  text-align: center;
`;

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  a {
    display: block;
    color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  }
`;

function Coin() {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<CoinInfoData>();
  // const [priceInfo, setpriceInfo] = useState<CoinPriceData>();
  const { coinId } = useParams();
  //Coins Link 에서 전달 받은 state

  //as 문법 알아보기
  //링크 클릭했을때 값을 받아 오므로 처음부터 해당 url 에 접속하면 데이터를 받아 올수 없음
  let { state } = useLocation() as RouteState;
  const priceMatch = useMatch("/coin/:coinId/price");
  const chartMatch = useMatch("/coin/:coinId/chart");

  // react query 이전
  // const getCoinInfo = async () => {
  //   const resInfoData = await axios(`https://api.coinpaprika.com/v1/coins/${coinId}`);
  //   const resPriceData = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
  //   setInfo(resInfoData.data);
  //   setpriceInfo(resPriceData.data);
  //   setLoading(false);
  // };

  const { isLoading: coinInfoLoading, data: info } = useQuery({
    queryKey: ["coinInfo", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: coinTickersLoading, data: priceInfo } = useQuery({
    queryKey: ["coinPriceInfo", coinId],
    queryFn: () => fetchCoinTickers(coinId),
  });

  const isLoading = coinInfoLoading || coinTickersLoading;

  return (
    <Container>
      <Header>
        <Title> {state?.name ? state.name : isLoading ? "Loading..." : info?.name}</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/coin/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/coin/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Outlet />
        </>
      )}
    </Container>
  );
}
export default Coin;
