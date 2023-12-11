import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>

          <h2>NewsMonkey Top - Headlines</h2>

          <div className="row">
             <div className="col-md-4"> 
                 <NewsItems/>
             </div>
             <div className="col-md-4">
                 <NewsItems/>
             </div>
             <div className="col-md-4">
                 <NewsItems/>
             </div>
          </div>
          
      </div>
    )
  }
}
