import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general'
  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
    articles = [ ]

    constructor(props){
        super(props);
   
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category=="general"?"Home":this.props.category)} - LagatarNews`;
    }

    async updateNews(){
      this.setState({loading: true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0d723e870d5c45aeb8c096bff7cf9115&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
     
      this.setState({
          totalResults:parsedData.totalResults,
          articles: parsedData.articles,
          loading:false
      })
    }
    async componentDidMount(){
     this.updateNews();
    }

    handlePrevClick = async () => {
      this.setState({page:this.state.page-1});
      this.updateNews();
  }
    handleNextClick = async () => {
      this.setState({page:this.state.page+1});
      this.updateNews();
  }
  render() {
    return (
      <>
      <div className="container my-3">
        <div className="component" >
        <h1 className='text-center'>LagatarNews - Top {this.capitalizeFirstLetter(this.props.category)=="General"?"":this.capitalizeFirstLetter(this.props.category)} headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-5">
        {!this.state.laoding && this.state.articles.map((ele)=>{
          return <div className="col-md-4">
          <Newsitem title={ele.title?ele.title.slice(0,40)+"...":""} description={ele.description?ele.description.slice(0,88)+"...":""} imageUrl={ele.urlToImage?ele.urlToImage:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} author={ele.author} date={ele.publishedAt} newsUrl={ele.url} source={ele.source.name}/>
          </div>
        })}
            </div>
      </div>
      </div>
      <div className="Container d-flex justify-content-around">
      <button disabled={this.state.page<=1}type="button" className="btn btn-primary my-3" onClick={this.handlePrevClick}>&larr; Prev</button>
      <button type="button" className="btn btn-primary my-3" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}


export default News