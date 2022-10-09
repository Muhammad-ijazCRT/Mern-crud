import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from '../components/Home'
import EditPost from '../components/Posts/EditPost'
import Post from '../components/Posts/Post'

const MainRoutes = () => {
  return (
    <>

     <Routes>
      <Route exact path='' element={ <Home /> } />
      <Route exact path='/posts' element={ <Post /> } />
      <Route exact path='/editPast/:id' element={ <EditPost /> } />

    </Routes>


    </>
  )
}

export default MainRoutes
