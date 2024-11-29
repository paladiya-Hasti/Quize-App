import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuizList from '../QuizList'
import QuizPage from '../QuizPage'

const Router = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<QuizList/>} />
        <Route path='/quiz/:id' element={<QuizPage/>} />
      </Routes>
    </div>
  )
}

export default Router