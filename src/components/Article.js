import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";

function Article({ article }) {
  return (
    <article>
      <Card>
        <div className="header2">
          <Card.Header>
            <h3> {article.title}</h3>
            <a
              href={`https://www.reddit.com${article.permalink}`}
              target="_blank"
            >
              <Button variant="primary">Go To Post</Button>
            </a>
          </Card.Header>
        </div>

        <Card.Body className="card-body">
          <Card.Title>
            <img src={article.thumbnail} alt="Image Not Found" />
          </Card.Title>
          <Button variant="info">
            Score <Badge bg="secondary">{article.score}</Badge>
          </Button>
          <Card.Text className="text">{article.selftext.substring(0, 500)}....</Card.Text>
        </Card.Body>
      </Card>
    </article>
  )
};

export default Article;
