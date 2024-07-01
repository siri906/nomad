export interface CoinInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: CoinInfoTag[];
  team: CoinInfoTeam[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: CoinInfoLinks;
  links_extended: CoinInfoLinksextended[];
  whitepaper: CoinInfoWhitepaper;
  first_data_at: string;
  last_data_at: string;
}

export interface CoinInfoWhitepaper {
  link: string;
  thumbnail: string;
}

export interface CoinInfoLinksextended {
  url: string;
  type: string;
  stats?: CoinInfoLinkStats;
}

export interface CoinInfoLinkStats {
  subscribers?: number;
  contributors?: number;
  stars?: number;
  followers?: number;
}

export interface CoinInfoLinks {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
}

export interface CoinInfoTag {
  id: string;
  name: string;
  position: string;
}

export interface CoinInfoTeam {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

// ================================ PriceData

export interface CoinPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: CoinPriceQuotes;
}

export interface CoinPriceQuotes {
  USD: CoinPriceUSD;
}

export interface CoinPriceUSD {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;
}
