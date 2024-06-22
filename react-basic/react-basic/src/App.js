import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectItem, setSelectItem] = useState("");
  const [iptValue, setIptValue] = useState("");

  const handleSelect = (event) => {
    setSelectItem(event.target.value);
  };

  const handleChange = (event) => {
    setIptValue(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>the coins ({coins.length})</h1>
      {loading ? <strong>loading</strong> : <></>}

      <select onChange={handleSelect}>
        {coins.map((coin) => {
          return (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          );
        })}
      </select>

      <div style={{ marginTop: "20px" }}>
        <input type="number" name="" value={iptValue} onChange={handleChange} />
        <p>
          {iptValue} USD ={`>`} {iptValue && Number(iptValue) / Number(selectItem)}
        </p>
      </div>
    </div>
  );
}
