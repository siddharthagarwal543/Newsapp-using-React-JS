import React, { Component } from 'react'

// Add dark mode
export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
          <span className="badge rounded-pill bg-info"  >{source}</span>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">{new Date(date).toUTCString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="blank" class="btn btn-sm btn-primary">Read More</a>
        </div>
        
      </div>
    )
  }
}

export default Newsitem