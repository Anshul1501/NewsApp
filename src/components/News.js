import React, { Component } from 'react'
import NewsItems from './NewsItems'

{/* we have used class based component to iterate through the news, the moment the class is loaded constuctor will be exicuted,
so we have defined states(aritcles, loading) as object inside constructor  */}

export default class News extends Component {

   /*passiing article as variable array */
   articles = [{
        "source": {
            "id": null,
            "name": "GlobeNewswire"
        },
        "author": "Fortune Business Insights",
        "title": "Electric Vehicle Market Size to Reach $1,579.10 Billion by 2030 | Global EV Industry Analysis Report",
        "description": "Global Electric Vehicle Market Size to Be Valued at USD 1,579.10 Billion by 2030; Supportive Government Subsidies and Policies to Boost Market Growth Global Electric Vehicle Market Size to Be Valued at USD 1,579.10 Billion by 2030; Supportive Government Subsi…",
        "url": "https://www.globenewswire.com/news-release/2023/12/12/2794375/0/en/Electric-Vehicle-Market-Size-to-Reach-1-579-10-Billion-by-2030-Global-EV-Industry-Analysis-Report.html",
        "urlToImage": "https://ml.globenewswire.com/Resource/Download/05408ba1-26b1-4fdd-8f48-1af4df373348",
        "publishedAt": "2023-12-12T05:34:00Z",
        "content": "Pune, India, Dec. 12, 2023 (GLOBE NEWSWIRE) -- The global electric vehicle market size was valued at USD 384.65 billion in 2022 and is expected to be worth USD 500.48 billion in 2023. The industry is… [+10357 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Reuters",
        "title": "Tesla says it is #39;morally obligated#39; to continue improving Autopilot, reiterates safety claims",
        "description": "In response to a Washington Post investigation of serious crashes involving Autopilot on roads where the feature could not reliably operate, the company said its data showed it was saving lives and preventing injuries.",
        "url": "https://www.moneycontrol.com/news/world/tesla-says-it-is-morally-obligated-to-continue-improving-autopilot-reiterates-safety-claims-11890451.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/Tesla-Outlet-1-652x435.jpg",
        "publishedAt": "2023-12-12T05:13:54Z",
        "content": "U.S. automaker Tesla Inc said it has a \"moral obligation\" to continue improving its Autopilot driver assistant system and make it available to more consumers based on data that showed stronger safety… [+2440 chars]"
    }, {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "IANS",
        "title": "Pay $50k if you sell Cybertruck in 1st year: Tesla again threatens owners",
        "description": "Elon Musk-run Tesla has once again threatened to sue owners of its newly-launched Cybertruck for $50,000 if they try to sell the vehicle within the first year of ownership.",
        "url": "https://economictimes.indiatimes.com/industry/renewables/pay-50k-if-you-sell-cybertruck-in-1st-year-tesla-again-threatens-owners/articleshow/105921673.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-105921745,width-1200,height-630,imgsize-59270,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-12-12T05:11:11Z",
        "content": "Elon Musk-run Tesla has once again threatened to sue owners of its newly-launched Cybertruck for $50,000 if they try to sell the vehicle within the first year of ownership.Tesla re-added a clause to … [+1606 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Thefreedictionary.com"
        },
        "author": null,
        
        "title": "First Transatlantic Radio Signal Received (1901)",
        "description": "Marconi was the Nobel Prize-winning Italian creator of the radio telegraph system. At 21, while experimenting with a homemade apparatus, he successfully sent signals across a distance of more than a mile and set off to London with his mother to find support f…",
        "url": "https://encyclopedia.thefreedictionary.com/Marconi%2c+Guglielmo",
        "urlToImage": "http://img.tfd.com/TFDlogo1200x1200.png",
        "publishedAt": "2023-12-12T05:00:00Z",
        "content": "Guglielmo Marconi (Italian: [ɡuʎˈʎɛːlmo maɾˈkoːni]; 25 April 1874 – 20 July 1937) was an Italian inventor, known for his pioneering work on long distance radio transmission[1] and for his development… [+40535 chars]"
    }]

                constructor(){
                            super();
                            console.log("Hello i am contructor from news");

                            {/*State as Object*/}
                            this.state = {
                                      articles: this.articles,
                                      loading: false
                            }
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
                           <NewsItems title={element.title} description={element.description.slice(0,88)} 
                                       imageUrl={element.urlToImage} newsUrl={element.url} />
                         </div>
            })}

    
          </div> 
      </div>
    )
  }
}
