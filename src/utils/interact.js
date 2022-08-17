import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import "dotenv/config";
const CONTRACT_ABI = require("../abi.json");
const CONTRACT_ADDRESS = "0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06";

const EthDater = require("ethereum-block-by-date");
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const dater = new EthDater(web3);

export const loadCurrentData = async (searchBy, sIndexParam, sdate, edate) => {
  let s_block = await dater.getDate(sdate, true, false);
  let e_block = await dater.getDate(edate, true, false);
  //const latest_block = await web3.eth.getBlockNumber();
  let opt;
  switch (searchBy) {
    case "streamId":
      let toNumInxdParam = parseInt(sIndexParam) ? sIndexParam : 0;
      opt = {
        filter: { streamId: toNumInxdParam },
        fromBlock: s_block.block,
        toBlock: e_block.block,
      };
      break;
    case "sender":
      opt = {
        filter: { sender: sIndexParam },
        fromBlock: s_block.block,
        toBlock: e_block.block,
      };
      break;
    case "recipient":
      opt = {
        filter: { recipient: sIndexParam },
        fromBlock: s_block.block,
        toBlock: e_block.block,
      };
      break;
    default:
      opt = {
        fromBlock: s_block.block,
        toBlock: e_block.block,
      };
  }
  const filterData = await contract.getPastEvents(
    "CreateStream",
    opt,
    (err, events) => {
      return events;
    }
  );
  return filterData;
};
