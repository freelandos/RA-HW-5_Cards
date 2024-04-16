import React from 'react'

export interface CardProps {
  title: string
  text: string
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, text, children } = props

  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
