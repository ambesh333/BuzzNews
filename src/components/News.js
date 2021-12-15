import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
       super();
       console.log("Hello i am a constructor from news component");
       this.state={
          articles:[],
          loading:false,
          page:1
       }
   }

   async componentDidMount(){  //helps to awake the api before executing other parts
       let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&pageSize=20";
       let data= await fetch(url);
       let parsedData= await data.json()
       console.log(parsedData);
       this.setState({articles :parsedData.articles,totalResults:parsedData.totalResults})
   }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page-1}&pageSize=20`;
        //updation of the page
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
       
    this.setState({//updating the value of page
        page:this.state.page-1,
        articles :parsedData.articles
    })
   }
    handleNextClick=async()=>{
        if(this.state.page +1> Math.ceil(this.state.totalResults/20)){

        }
        else{

            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page+1}
          &pageSize=20`;
         
            //updation of the page
            let data= await fetch(url);
            let parsedData= await data.json()
            console.log(parsedData);
           
        this.setState({//updating the value of page
            page:this.state.page+1,
            articles :parsedData.articles
        })
        }
   }
    render() {
        return (
            <div className="container my-3">
            <h2>News monkey top headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                
            return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,45):""} description ={element.description?element.description.slice(0,80):""}  imageurl={element.urlToImage} newsUrl={element.url}/> 
            </div>
            })}
                </div>
               <div className="conatiner d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
               <button type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
               </div>
            </div>
        )
    }
}

export default News
