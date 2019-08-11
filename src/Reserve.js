import React,{Component, useState} from 'react';
import './Reserve.css'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter'
import PickyDateTime from 'react-picky-date-time';

class Reserve extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showPickyDateTime: true,
      date: '30',
      month: '01',
      year: '2019',
      hour: '03',
      minute: '10',
      second: '40',
      meridiem: 'PM',
      show: false
    };
  }

  onYearPicked(res) {
    const { year } = res;
    this.setState({ year: year});
  }

  onMonthPicked(res) {
    const { month, year } = res;
    this.setState({ year: year, month: month});
  }

  onDatePicked(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDefaultDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onSecondChange(res) {
    this.setState({ second: res.value });
  }

  onMinuteChange(res) {
    this.setState({ minute: res.value });
  }

  onHourChange(res) {
    this.setState({ hour: res.value });
  }

  onMeridiemChange(res) {
    this.setState({ meridiem: res });
  }

  onResetTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onResetDefaultTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onClearTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  // just toggle your outter component state to true or false to show or hide <PickyDateTime/>
  openPickyDateTime() {
    this.setState({showPickyDateTime: true});
  }

  onClose() {
    this.setState({showPickyDateTime: false});
  }

  setShow(bool) {
    this.setState({show: bool});
  }
  //
  // handleClose() {
  //   this.setState({show:false});
  // }
  //
  // handleShow() {
  //   this.setState({show:true});
  // }
  //템플릿에 있는 상태값을 변화하고자한다면 setState를 사용하여 함수를 만들어야 함
  //

  render(){
    const show = this.state.show;
    const handleClose = () => this.setShow(false);
    const handleShow = () => this.setShow(true);

    const {
      showPickyDateTime,
      date,
      month,
      year,
      hour,
      minute,
      second,
      meridiem
    } = this.state;

    return(
      <section className="mx-4 mt-4">
        <Card className="p-4 shadow">
          <h2 className="ReserveTitle text-primary">{this.props.reserveTitle}</h2>
          <Row className="align-items-center">
            <Col xl={6} xs={12}>
              <PickyDateTime
              size="m"
              mode={0}
              show={showPickyDateTime}
              locale="en-us"
              onClose={() => this.setState({ showPickyDateTime: true })}
              onYearPicked={res => this.onYearPicked(res)}
              onMonthPicked={res => this.onMonthPicked(res)}
              onDatePicked={res => this.onDatePicked(res)}
              onResetDate={res => this.onResetDate(res)}
              onSecondChange={res => this.onSecondChange(res)}
              onMinuteChange={res => this.onMinuteChange(res)}
              onHourChange={res => this.onHourChange(res)}
              onMeridiemChange={res => this.onMeridiemChange(res)}
              onResetTime={res => this.onResetTime(res)}
              onClearTime={res => this.onClearTime(res)}

              //https://edwardfhsiao.github.io/react-picky-date-time/
                    />

            </Col>
            <Col xl={4} md={6} xs={12}>
                <Form.Row >
                  <Form.Group as={Col} xl={12} xs={12} controlId="">
                    <Form.Label className="float-left">이름</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="홍길동" />
                  </Form.Group>
                  <Form.Group as={Col} xl={12} xs={12} controlId="">
                    <Form.Label className="float-left">학번</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="20190000" />
                  </Form.Group>
                  <Form.Group as={Col} xl={12} xs={12}>
                    <Form.Label className="text-left d-block">상담유형</Form.Label>
                      {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3 border rounded p-4 checkwrap">
                          <Form.Check inline label="학업/진로" type={type} id={`inline-${type}-1`} />
                          <Form.Check inline label="학교부적응" type={type} id={`inline-${type}-2`} />
                          <Form.Check inline label="가족" type={type} id={`inline-${type}-3`} />
                          <Form.Check inline label="성" type={type} id={`inline-${type}-4`} />
                          <Form.Check inline label="학교폭력" type={type} id={`inline-${type}-5`} />
                          <Form.Check inline label="대인관계/따돌림" type={type} id={`inline-${type}-6`} />
                          <Form.Check inline label="성격" type={type} id={`inline-${type}-7`} />
                          <Form.Check inline label="정신건강" type={type} id={`inline-${type}-8`} />
                          <Form.Check inline label="기타" type={type} id={`inline-${type}-9`} />
                        </div>
                      ))}
                  </Form.Group>
                </Form.Row>

                <Button variant="primary">예약하기</Button>
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>
            </Col>
          </Row>
        </Card>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </section>

    )
  }
}

export default Reserve;
