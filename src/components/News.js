import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizefirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title = `${this.capitalizefirstLetter(
      this.props.category
    )}-BuzzNews`;
    //used to change title bar as per category
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
     
    });
  }

  async componentDidMount() {
    //helps to awake the api before executing other parts
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews(); //previous page
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews(); //next page
  };
 fetchMoreData =   async() => {
   this.setState({page:this.state.page+1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1aaa8ac4c0c143e7985c69c22c04c1fe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
   let data = await fetch(url);
   let parsedData = await data.json();

   this.setState({
     articles: this.state.articles.concat(parsedData.articles),
     totalResults: parsedData.totalResults,
    
   });
  };
  render() {
    return (
      <>
        <h1 className="text-centre" style={{ margin: "35px 0px" }}>
          Buzz News-Top
          {this.capitalizefirstLetter(this.props.category)} Headlines
        </h1>

        {/* if loading is true call spinner */}
        {this.state.loading && <Spinner/>} 

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container">

            
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

       
      </>
    );
  }
}

export default News;
