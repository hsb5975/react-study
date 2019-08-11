import React,{Component} from 'react';
import './services.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Services extends Component{

  render(){
    return(
      <section className="services">
        <div className="info bg-primary">
        <h3 className="text-light">동두천외국어학교 상담예약 서비스</h3>
        <h2 className="text-white">DFL WeClass</h2>
        <Row>
          <Col xl={3} xs={6}>
            <div className="textbox shadow">
              <ion-icon name="stopwatch"></ion-icon>
            </div>
            <p className="text-white h4">service1</p>
          </Col>
          <Col xl={3} xs={6}>
            <div className="textbox shadow">
              <ion-icon name="stopwatch"></ion-icon>
            </div>
            <p className="text-white h4">service2</p>
          </Col>

          <Col xl={3} xs={6}>
            <div className="textbox shadow">
              <ion-icon name="stopwatch"></ion-icon>
            </div>
            <p className="text-white h4">service3</p>
          </Col>

          <Col xl={3} xs={6}>
            <div className="textbox shadow">
              <ion-icon name="stopwatch"></ion-icon>
            </div>
            <p className="text-white h4">service4</p>
          </Col>
        </Row>
      </div>
      <div className="service1">
        <h3 className="text-secondary">차별화된 예약서비스</h3>
        <h2 className="text-primary">Wee Class 이용방법</h2>
        <Row className="w-75 m-auto desc">
          <Col>
            <div className="shadow bg-white rounded mb-4 p-4">
              <h4>전문상담교사 차한나선생님 </h4>
            <p className="text-secondary text-left">
- 전문상담교사: 차한나 031-860-8687 (Wee class 직통전화)<br/><br/>
- 사이버상담: ckssl3@korea.kr<br/><br/>
- 상담실: 3층 Wee class<br/><br/>
- 이용대상: 상담이 필요한 동두천외국어고등학교 학생 누구나. <br/><br/>
- 이용시간: 방과 후 시간, 점심시간 및 교과수업시간 <br/>
            </p>
            </div>
          </Col>
        </Row>
        <Row className="bg-warning last">
          <Col>
          <p className="">수업시간에 하게 될 경우 상담확인증에 담임선생님과 담당과목선생님께 사인을 받아 옵니다.</p>
          </Col>
        </Row>
      </div>


    </section>
    );
  }
}


export default Services;
