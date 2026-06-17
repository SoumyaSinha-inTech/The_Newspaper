import React from 'react'

export default function Newsitem(props) {
   
        return (
            <div>
                <div className="card">
                    <div>
                        <span className="badge rounded-pill bg-danger position-absolute top-0 end-0 m-2">
                        {props.source}
                    </span>
                    </div>
                    <img src={props.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body border-0">
                        <h5 className="card-title"> {props.title} </h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-body-secondary">{new Date(props.timeUpdated).toGMTString()}</small></p>
                        <a rel="noreferrer" href={props.newsUrl} target='_blank' className="btn btn-sm btn-dark">Know More</a>

                    </div>
                </div>
            </div>
        )
}
