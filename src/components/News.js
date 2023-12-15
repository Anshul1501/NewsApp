import React, { Component } from 'react'
import NewsItems from './NewsItems'

/* we have used class based component to iterate through the news, the moment the class is loaded constuctor will be exicuted,
so we have defined states(aritcles, loading) as object inside constructor  */

export default class News extends Component {

   /*passiing article as variable array */

                constructor(){
                            super();
                            console.log("Hello i am contructor from news");

                            /*State as Object*/
                            this.state = {
                                      articles: [],
                                      loading: false,
                                      page: 1
                            }
                }
    /*Fetch data from new API using using fetch */
                async componentDidMount() {
                    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9b33c920ed65479ebf547d39acf49c90&page=1pageSize=20";
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
                }
                //Next page button
                 handlePrevClick = async() => {
   
                   // console.log("previous");
                    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9b33c920ed65479ebf547d39acf49c90&page=${this.state.page-1}&pageSize=20`;
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    this.setState({
                      articles: parsedData.articles,
                      page: this.state.page-1
                    })
                }

                //Previous page button
                handleNextClick = async() => {
                   if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
                    //do nothing
                   }
                   else {
                    // console.log("next");
                    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9b33c920ed65479ebf547d39acf49c90&page=${this.state.page+1}&pageSize=20`;
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    this.setState({
                      articles: parsedData.articles,
                      page: this.state.page+1
                    })
                  }
                }


  render() {
    return (
      <div className='container my-5'>
        <h1>NewsMonkey Top - Headlines</h1>

         <div className="row">
            {/*itrating through all the news articles using map*/}
            {/*map() method is used to iterate over an array and call function on every element of the array.*/}
            {this.state.articles.map((element)=>{
                return   <div className="col-md-4 my-3" key={element.url}> 
                           <NewsItems title={element.title} description={element.description} 
                                      imageUrl={element.urlToImage} newsUrl={element.url} />
                         </div>
            })}
          </div>  
                <div className="container d-flex justify-content-between">
                       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                       <button type="button" className ="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
      </div>
    )
  }
}
