import React from 'react'
import { useSelector } from 'react-redux';
import { selectCoins } from '../../redux/CoinSlice';


const Coins = () => {
  console.log(useSelector(selectCoins))
  return (
    <>
      Coins q
    </>
  )
}

export default Coins;
