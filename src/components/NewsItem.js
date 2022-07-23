import { Button, Card, Grid, Link,Image,Text } from "@nextui-org/react";
import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <Grid.Container >
        <Grid xl={2}>
        <Card  isHoverable className="my-4" css={{mw:"400px"}}>
          <Image src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <Text h5 className="card-title">{title} </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
                top: "0px",
              }}
            >
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <Text p className="card-text">{description}</Text>
            <Text p className="card-text">
              <small className="text-muted">
                By <Text> {!author ? "Unknown" : author} on{" "} </Text>
                {new Date(date).toGMTString()}
              </small>
            </Text>
            <Button
              
              shadow
              color="primary"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-primary"
            >
              <Link href={newsUrl} style={{ color: "white" }}>
                Read More
              </Link>
            </Button>
          </div>
        </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default NewsItem;
