import ".././App.scss";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import magazineData from "../data/magazineData.json";

function LeftCard() {
  return magazineData.data.map((dataItem, i) => {
    if (i % 2 === 0) {
      return (
        <Card className="leftColCard" key={dataItem.id}>
          <Card.Img alt="..." src={dataItem.contentImageUrl} />
          <Card.Body>
            <Card.Title>{dataItem.contentTitle}</Card.Title>
            <Card.Text>{dataItem.contentSummary}</Card.Text>
            <Card.Footer>Source: {dataItem.source}</Card.Footer>
          </Card.Body>
        </Card>
      );
    }
  });
}

export default LeftCard;
