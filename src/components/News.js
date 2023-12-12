import React, { Component } from 'react'
import NewsItems from './NewsItems'

{/* we have used class based component to iterate through the news, the moment the class is loaded constuctor will be exicuted,
so we have defined states(aritcles, loading) as object inside constructor  */}

export default class News extends Component {

   /*passiing article as variable array */

                constructor(){
                            super();
                            console.log("Hello i am contructor from news");

                            {/*State as Object*/}
                            this.state = {
                                      articles: [],
                                      loading: false
                            }
                }
    /*Fetch data from new API using using fetch */
                async componentDidMount() {
                    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9b33c920ed65479ebf547d39acf49c90";
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(parsedData);
                    const filteredArticles = parsedData.articles.filter(article => article.title && article.urlToImage);

    if (filteredArticles.length > 0) {
      this.setState({ articles: filteredArticles });
    } else {
      this.setState({ articles: [], error: "No news available" });
      // You can also handle the absence of news by displaying a default message or fallback content
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors here
    this.setState({ articles: [], error: "Error fetching news data" });
                }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Top - Headlines</h2>

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
      </div>
    )
  }
}
