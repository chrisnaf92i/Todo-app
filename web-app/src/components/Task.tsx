import React from 'react'

type PropType= {
  id:string,
  title:string,
  description:string,
  importance:string,
  done:boolean
}

export default function Task({ id, title, description, importance, done }: PropType) {
  return (
    <article className='TaskCard'>
        <input type="checkbox"/>
        <div className="textContainer">
          <h1> { title } </h1>
          <p> {description} </p>    
        </div>
    </article>
  )
}
