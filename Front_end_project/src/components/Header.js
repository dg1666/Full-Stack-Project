import React from 'react'
import logo from '../img/highradius-log.png'
import abcImage from '../img/Group 20399.png'

export default function Header() {
  return (
    <>
    <div style={{display:"flex",padding:"20px", justifyContent:"space-between",alignItems:"center"}}>
        <img width={210} src={abcImage} alt="" />
        <img width={210} src={logo} alt="" />
        <div style={{width:"160px"}}></div>
    </div>
    </>
  )
}