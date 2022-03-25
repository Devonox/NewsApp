import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card my-4">
            <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body"
                 style={{
                    backgroundColor: "rgb(185 160 160 / 10%)",
                    color: "black",
                  }}>
                    <h5 className="card-title">{title}{" "} </h5>
                    <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  right: "0",
                  top:'0px',
                }}
              >
                <span className="badge rounded-pill bg-danger">{source}</span>
              </div>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {!author ? "Unknown" : author} on{" "}
                            {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="_blank"
                        className="btn btn-primary btn-primary"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
