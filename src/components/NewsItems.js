import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
    
    /*Desturcturing in JS: pulling title, description and imageUrl from this props */
 
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    
   function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
}


    /*Desturcturing in JS: pulling title and description from this props */
   return (
      <div>
        <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..."/>
                     <div className="card-body">
                          <h5 className="card-title">  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
  </span> {title} </h5>
                          <p className="card-text">{description}</p>
                          <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                          <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {formatDate(publishedAt)}</small></p>
                     </div>
        </div>
      </div>
    )
  }
}
