import React from 'react'

export const Conditional = ({condition,children})=>{
  if(condition){
    return (
    <>
      {children}
    </>
    )
  }

  return <></>
}