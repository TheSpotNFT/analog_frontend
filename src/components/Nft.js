import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis';
import Card from "./Cards";
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"



export default function Authenticate() {
    console.log("component rendering")
    const {account, isAuthenticated} = useMoralis();
    const userAddress = account
    const chain = 'avalanche';
    const spotAnalogContract = '0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8';

    async function getNfts() {
      const options = { address: account, chain: chain, token_address: spotAnalogContract }
      const NFTs = await Moralis.Web3API.account.getNFTsForContract(options) 
        const result = NFTs.result
        const final = result.map(nft=>nft.metadata)
        let images = []
        for(let i=0; i<final.length; i++) {
        const token = JSON.parse(final[i])
        images.push(token.image)
        }
        console.log(images)

    };
    

    useEffect(() => {
     getNfts();
    },[]);
    
    /*return (
      <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-mono text-spot-yellow bg-slate-900">
        <Card
          key = "1"
          nftName = "insert nft name prop"
          variationType = "insert variation type from contract metadata"
          image1 = {img1}
          image2 = {img2}
          image3 = {img3}
          image4 = {img4}
          image5 = {img2}
          id = "insert nft id from meta"
          />

        Nfts in your wallet: 
        
        </div>
          
  
      )*/

    
         
    }
