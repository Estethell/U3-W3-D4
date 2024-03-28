import { useEffect, useState } from "react";
import Articles from "./Articles";
import { Welcome, Result, Event, Launch } from "../Interfaces/ArticleObj";
import { Container, Row } from "react-bootstrap";

const MainPage = () => {
  const [art, setArt] = useState<Result[]>([]);
  console.log(art);
  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Attenzione fetch non andata a buon fine");
        }
      })
      .then((arrayArticles: Welcome) => {
        console.log(arrayArticles);
        setArt(arrayArticles.results);
      })
      .catch((e) => console.log("errore", e));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1 className="m-1 d-flex justify-content-center my-5">Articoli più popolari</h1>

      <Container>
        <Row>
          {art.map((e) => (
            <Articles info={e} key={e.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
