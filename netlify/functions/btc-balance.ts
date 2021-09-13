//curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listunspent", "params": [6, 9999999, [] , true, { "minimumAmount": 0.005 } ]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/
import { Handler } from "@netlify/functions";
import axios from "axios";
import { GETBLOCK_API_KEY, GETBLOCK_BTC_URL } from "../config/keys";

const makeBalanceUrl = (address) => {
  return `https://api.bitcore.io/api/BTC/testnet/address/${address}/balance`;
};
export const handler: Handler = async (event) => {
  const {
    queryStringParameters: { address },
  } = event;

  const { data } = await axios.get(makeBalanceUrl(address));
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};