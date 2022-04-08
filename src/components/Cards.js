import React from 'react'

function Card(props) {
return(

    
    <div className="w-full rounded overflow-hidden shadow-lg bg-slate-700 hover: hover:scale-105 hover:bg-slate-500 duration-300">
    <img className="w-full" src={props.image} alt={props.nftName}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><h3>NFT Name: {props.nftName}</h3></div>
        <div className="text-slate-50 text-base">
        <h4>Variation: {props.variationType}</h4>
        <h5>ID: {props.id}</h5>
        <div className="flex flex-col space-y-4 py-4">
        <button className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l">Variation 1</button>
        <button className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l">Variation 2</button>
        <button className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l">Variation 3</button>
        <button className="align-middle rounded-lg px-4 py-2 border-4 border-spot-yellow text-spot-yellow 
    hover:bg-spot-yellow hover:text-black duration-300 hover:border-white font-mono text-l">Variation 4</button>
        </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
    
    
)
}
export default Card;