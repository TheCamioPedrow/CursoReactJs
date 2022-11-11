import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)
  }
  
  return (
    <div onClick={navigateDetail} className="card-detail">
      <img src={product.image} alt="character"/>
      <p key={product.id}>{product.name}, stock: {15}</p>
    </div>
  )
}

export default Item