import React, { Component } from 'react'
import loading from './/loading.gif';

export default function Spin() {
  return (
    <div>
        <div className="text-center img-fluid">
         <img src={loading} alt="Loading..."/>
        </div>
      </div>
  )
}

 