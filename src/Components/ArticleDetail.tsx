import { useEffect, useState } from "react";
import Articles from "./Articles";
import { Welcome, Result, Event, Launch } from "../Interfaces/ArticleObj";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ArticleDetail = () => {
  const [detail, setDetail] = useState<Result>();
  const params = useParams();
  const fetchDetail = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Attenzione fetch non andata a buon fine");
        }
      })
      .then((data: Result) => {
        setDetail(data);
      })
      .catch((e) => console.log("errore", e));
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={10}>
          <Card className="m-3 text-center">
            <Card.Img src={detail?.image_url} />
            <Card.Body>
              <Card.Title>{detail?.title}</Card.Title>
              <h5 className="fs-6"> {detail?.summary}</h5>
              <h5 className="fs-6"> {detail?.news_site}</h5>

              <h5 className="fs-6 font-monospace"> {detail?.published_at}</h5>
              <h5 className="fs-6 font-monospace"> {detail?.updated_at}</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetail;
