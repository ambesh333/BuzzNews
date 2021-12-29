import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }
          }>
           
         
        <span className=" badge rounded-pill bg-danger" >
                  {source} 
                
                </span>
          </div>
          <img
            src={
              !imageurl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/omicronindia-647x363.jpeg?JRSo36NxD3hxWLu9lIhRUi2nfpYWTgpz"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By{!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferre"
              href={newsUrl}
              target="_blank"
              className="btn btn-sn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
