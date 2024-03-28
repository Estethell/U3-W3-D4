import { Result } from "../Interfaces/ArticleObj";
import { Card, CardBody, CardImg } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ArtProps {
  info: Result;
}

const Articles = (props: ArtProps) => {
  return (
    <Col lg={3}>
      <Link to="/detail">
        <Card className="m-3" style={{ height: "500px", width: "300px" }}>
          <Card.Img src={props.info.image_url} />
          <Card.Body>
            <Card.Title>{props.info.title}</Card.Title>
            <h5 className="fs-6"> {props.info.url}</h5>
            <h5 className="fs-6 font-monospace"> {props.info.published_at}</h5>
            <h5 className="fs-6 font-monospace"> {props.info.updated_at}</h5>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Articles;
