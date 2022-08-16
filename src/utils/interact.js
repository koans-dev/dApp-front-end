import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import "dotenv/config";
//import { etherDate } from "ethereum-block-by-date";
const CONTRACT_ABI = require("../abi.json");
const CONTRACT_ADDRESS = "0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06";

const EthDater = require("ethereum-block-by-date");
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const dater = new EthDater(web3);

 
export const loadCurrentData = async (sIndexParam, sdate, edate) => {
  let s_block = await dater.getDate(sdate, true, false);
  let e_block = await dater.getDate(edate, true, false);
 
  //const latest_block = await web3.eth.getBlockNumber();

  const message = await contract.getPastEvents(
    "CreateStream",
    {
      filter: { streamId:sIndexParam  },
      fromBlock: s_block.block,
      toBlock: e_block.block,
    },
    (err, events) => {
      return events;
    }
  );
  return message;
};
