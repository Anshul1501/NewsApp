import React, { Component } from 'react'
import NewsItems from './NewsItems'
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types'


/* we have used class based component to iterate through the news, the moment the class is loaded constuctor will be exicuted,
so we have defined states(aritcles, loading) as object inside constructor  */

export default class News extends Component {

static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
}
static defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

   /*passiing article as variable array */

                constructor(props){
                            super(props);
                            /*State as Object*/
                            this.state = {
                                      articles: [],
                                      loading: false,
                                      page: 1
                            }
                            document.title = `${this.props.category} - NewsMonkey`
                } 

    /*Fetch data from new API using using fetch */
                async componentDidMount() {
                    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b33c920ed65479ebf547d39acf49c90&page=1&pageSize=${this.props.pageSize}`;
                    this.setState({loading: true}); //Show loading 
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    this.setState({articles: parsedData.articles, 
                      totalResults: parsedData.totalResults,
                      loading: false 
                    })
                }
                //Next page button
                 handlePrevClick = async() => {
   
                   // console.log("previous")
                    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b33c920ed65479ebf547d39acf49c90&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
                    this.setState({loading: true});
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    this.setState({
                      articles: parsedData.articles,
                      page: this.state.page-1,
                      loading: false
                    })
                }

                //Previous page button
                handleNextClick = async() => {
                   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
                    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b33c920ed65479ebf547d39acf49c90&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
                    this.setState({loading: true})
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    this.setState({
                      articles: parsedData.articles,
                      page: this.state.page+1,
                      loading: false
                    })
                  }
                }


  render() {
    return (
      <div className='container my-5'>
        <h1 className='text-center'>NewsMonkey Top - Headlines</h1>

        {this.state.loading && <LoadingSpinner/>} {/* Loading spinner */}

         <div className="row">
            {/*itrating through all the news articles using map*/}
            {/*map() method is used to iterate over an array and call function on every element of the array.*/}
            {this.state.articles.map((element)=>{
                return   <div className="col-md-4 my-3" key={element.url}> 
                           <NewsItems title={element.title} description={element.description} 
                                      imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} 
                                      publishedAt={element.publishedAt} source={element.source.name}/>
                         </div>
            })}
          </div>  
                <div className="container d-flex justify-content-between">
                       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                       <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className ="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
      </div>
    )
  }
}
