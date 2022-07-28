import './App.scss';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import samplead from './assets/samplead.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabletCard from './components/TabletCard';
import TabletCardRight from './components/TabletCardRight';
import RightCard from './components/RightCard';
import LeftCard from './components/LeftCard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <video
            src="https://corpau.wpengine.com/wp-content/uploads/2020/09/VID01_AreReel_03MedExport-2.mp4"
            autoPlay="true"
            muted
            loop
            style={{ objectFit: 'fill' }}
            alt="..."
          />
        </Row>
      </Container>
      <Container className="cardContainer" fluid>
        <Row className="parentRow">
          <Col md={8}>
            <Row>
              <Col className="colItem1" sm={12} md={12} lg={6}>
                <LeftCard className="leftColCard" />
                <TabletCard className="tabletCard" />
              </Col>
              <Col className="colItem2" sm={12} md={12} lg={6}>
                <RightCard className="rightColCard" />
                <TabletCardRight className="tabletCardRight" />
              </Col>
            </Row>
          </Col>
          <Col className="order-first order-md-last" sm={12} md={4} lg={4}>
            <Image src={samplead} className="imgStyle" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
