import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from "./Cards";
import collection from "../Collection"

const NftCollection = () => {

  const renderCard = (collection, index) => {
    return (
    
        <Card
          key = {collection.id}
          nftName = {collection.name}
          image1 = {collection.image1}
          image2 = {collection.image2}
          image3 = {collection.image3}
          image4 = {collection.image4}
          id = {collection.id}
          />
        
    );
  };

  return <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 font-mono text-spot-yellow bg-slate-900">
  {collection.map(renderCard)}
  </div>;
};

export default NftCollection;