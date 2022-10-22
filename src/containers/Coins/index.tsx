import React from 'react'
import { useSelector } from 'react-redux';

const Coins = () => {
  const coins: any = useSelector((state: any) => state.coins.coins);
  console.log(coins)
  return (
    <>
      Coins q
    </>
  )
}

export default Coins;
