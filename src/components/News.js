import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8,
        category:'science',
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(){
       super();
       console.log("Hello i am a constructor from news component");
       this.state={
          articles:[],
          loading:false,
          page:1
       }
   }


   async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json()
    
    this.setState({
        articles :parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
 })
   }

   async componentDidMount(){  //helps to awake the api before executing other parts
    this.updateNews();
    
   }
    handlePrevClick=async()=>{
  
    this.setState({page:this.state.page-1})
    this.updateNews();
   }
    handleNextClick=async()=>{
       
        this.setState({page:this.state.page+1})
        this.updateNews();
   }
    render() {
        return (
            <div className="container my-3">
            <h1 className="text-centre" style={{margin:"35px 0px"}}>Buzz News top headlines</h1>
        
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>
            {
                
            return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title} description ={element.description?element.description.slice(0,80):""}  imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> 
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
