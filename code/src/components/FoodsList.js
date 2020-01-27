import React from 'react'
import { useSelector } from 'react-redux'

export const FoodsList = () => {
  const foodsList = useSelector(state => state.macros.foods)
  return (
    <>
      <ul>
        {foodsList.map((food, index) => {
          return (
            <li key={index}>{food.name}</li>
          )
        })}
      </ul>
    </>
  )
}