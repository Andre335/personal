import React from 'react';
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'

function App() {
  return (
    <div className="flex-column bg-black-10 h-100">
      <Header />
      <Bio />
    </div>
  )
}

export default App
