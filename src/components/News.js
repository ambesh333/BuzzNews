import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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
       let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data= await fetch(url);
       let parsedData= await data.json()
       console.log(parsedData);
       this.setState({
           articles :parsedData.articles,
           totalResults:parsedData.totalResults,
           loading:false
    })
   }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        //updation of the page
        let data= await fetch(url);
        let parsedData= await data.json()
        
       
    this.setState({//updating the value of page
        page:this.state.page-1,
        articles :parsedData.articles,
        loading:false
    })
   }
    handleNextClick=async()=>{
        console.log("1");
        if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
            console.log("2");
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page+1}
          &pageSize=${this.props.pageSize}`;
         
          this.setState({loading:true});
            //updation of the page
            let data= await fetch(url);
            let parsedData= await data.json();
            
        this.setState({//updating the value of page
            page:this.state.page+1,
            articles :parsedData.articles,
            loading:false,
        })
        }
   }
    render() {
        return (
            <div className="container my-3">
            <h1 className="text-centre">Buzz News top headlines</h1>
        
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                
            return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,45):""} description ={element.description?element.description.slice(0,80):""}  imageurl={element.urlToImage} newsUrl={element.url}/> 
            </div>
            })}
                </div>
               <div className="conatiner d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
               <button disabled={this.state.page +1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
               </div>
            </div>
        )
    }
}

export default News
