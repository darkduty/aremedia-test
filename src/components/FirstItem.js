import ".././App.scss";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import magazineData from "../data/magazineData.json";
const firstItem = magazineData.data[0];

function FirstItem() {
  return (
    <Card className="firstItem" key={firstItem.id}>
      <Card.Img alt="..." src={firstItem.contentImageUrl} />
      <Card.Body>
        <Card.Title>{firstItem.contentTitle}</Card.Title>
        <Card.Text>{firstItem.contentSummary}</Card.Text>
        <Card.Footer>Source: {firstItem.source}</Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default FirstItem;
