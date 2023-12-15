import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    
    /*Desturcturing in JS: pulling title, description and imageUrl from this props */
 
    let {title, description, imageUrl, newsUrl} = this.props;

    /*Desturcturing in JS: pulling title and description from this props */
   return (
      <div>
        <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                     <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">{description}</p>
                          <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                     </div>
        </div>
      </div>
    )
  }
}
