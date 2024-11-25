import React from 'react'
import "./index.css"
import Sidebar from '../../components/sidebar'
import Feed from '../../components/feed'

const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <div className={`container ${sidebar?"": 'large-container'}`}>
          <Feed/>
        </div>
    </>
  )
}

export default Home