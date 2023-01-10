import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='page-not-found'>
      <h2>Page Not Found!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minus nihil, ad ullam iste alias atque nostrum consequuntur asperiores doloribus culpa consequatur, distinctio officiis, doloremque beatae possimus maxime molestias sit!</p>
      <p>Go to <Link to="/">HomePage</Link></p>
    </div>
  )
}

export default Page404
