import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis';
import Card from "./Cards";


export default function Authenticate() {
    const {account, isAuthenticated} = useMoralis();
    const userAddress = account
    const chain = 'avalanche';
    const spotAnalogContract = '0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8';
    /*const [filter, setFilter] = useState('');
    const [nftOwned, setNftOwned] = useState([])
    const [checkMyNfts, setCheckMyNfts] = useState([])
    const [apiLoaded, setApiLoaded] = useState(false)*/
    const [totalOwned, setTotalOwned] = useState([]);
    const [testValue, setTestValue] = useState([]);
    const [testValueStr] = useState([]);
    const [urlImage] = useState([]);
    const [urlString] = useState([]);
    
  
    console.log("auth const loaded")
    
    async function getNfts() {
      const options = { address: account, chain: chain, token_address: spotAnalogContract }
      const NFTs = await Moralis.Web3API.account.getNFTsForContract(options) 
      console.log(NFTs);
      const setTotalOwned = NFTs.total;
      console.log(setTotalOwned);
      const testValue = JSON.parse(NFTs.result[0].metadata);
      console.log(testValue.image);
      console.log(typeof testValue);
      const urlString = JSON.stringify(testValue.image);
      console.log(urlString);
      
    };
    

    useEffect(() => {
       getNfts();
    }, [account])
      

    return (
      <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-mono text-spot-yellow bg-slate-900">
        <Card
          key = "This1"
          nftName = "That"
          variationType = "What"
          image = {urlString}
          id = "this"
          />
        <Card
          key = "This2"
          nftName = "That"
          variationType = "What"
          image = "https://assets.nftrade.com/image/upload/w_500,c_scale/v1645587526/evm_43114_0x19a5b9fcd30d067c8fc287fe81b08798b837a3c6_1.png"
          id = "this"
          />
        Nfts in your wallet: 
        
        </div>
         
  
      )
         
    }
