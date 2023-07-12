import React from 'react'
//import './Footer.css'
export const Footer = () => {
  let footerStyle = {
    border: "10px solid red"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    
    </footer>
  )
}
