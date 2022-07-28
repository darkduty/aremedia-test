import ".././App.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import aremedia from "../assets/aremedia.jpg";
import samplead from "../assets/samplead.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import magazineData from "../data/magazineData.json";
import LeftCard from "../components/LeftCard";
import FirstItem from "../components/FirstItem";

function TabletCard() {
  return magazineData.data.map((dataItem, i) => {
    if (i % 2 === 0 && i !== 0) {
      return (
        <>
          <Card className="tabletCard" key={dataItem.id}>
            <Row>
              <Col md={4}>
                <Image
                  src={dataItem.contentImageUrl}
                  className="card-img"
                  alt="..."
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{dataItem.contentTitle}</Card.Title>
                  <Card.Text>{dataItem.contentSummary}</Card.Text>
                  <Card.Footer>Source: {dataItem.source}</Card.Footer>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </>
      );
    }
    if(i===0){
      return(
        <FirstItem className="firstItem"/>
      )
    }
  });
}

export default TabletCard;
