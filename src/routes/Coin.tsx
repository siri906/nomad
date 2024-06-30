import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

function Coin() {
  const [loading, setLoading] = useState(true);

  const { coinId } = useParams();
  //Coins Link 에서 전달 받은 state
  //as 문법 알아보기
  //링크 클릭했을때 값을 받아 오므로 처음부터 해당 url 에 접속하면 데이터를 받아 올수 없음
  let { state } = useLocation() as RouteState;

  console.log(state, "state");
  return (
    <Container>
      <Header>
        <Title>{coinId}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
