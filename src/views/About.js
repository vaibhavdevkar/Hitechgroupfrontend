import React from 'react';
import { Row, Col, CardTitle, Card } from 'reactstrap';
// import ComponentCard from '../components/ComponentCard';
import about from '../assets/images/bg/hightechabout.png'


const About = () => {

  return (
    <Row>
      {/* <h1>Capability and Features</h1> */}
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            {/* <i className="bi bi-bell me-2"> </i> */}
            <h3>About US</h3>
          </CardTitle>
          <Row className='d-flex'>
            <Col lg="8">
              <div className="mt-3 p-3"  >
                <p  align="justify">
                     &nbsp; &nbsp;&nbsp;   Since 1988, Hi-Tech Group has been a leading manufacturer, importer, and industrial solution provider with our corporate office in Aurangabad, Maharashtra. With over 32 years of experience, we developed ourselves as reliable, responsible, and renowned partners for every industry. Our prompt response and timely delivery made us one of the largest industrial distributors and facilitated us to serve well known Indian and International brands to our customers. <br />

                     &nbsp; &nbsp;&nbsp;  We are completely customer centric and are committed to deliver quality and complete value to our customers. With every passing day, we strive to be efficient and deliver our customers everything they require for, at competitive prices. We believe every purchase, every correct solution, every timely delivery, every prompt service, every deal adds value to our customers, which motivates us to be more justified with costs and provide the best pre-sales and after-sales services.
                  <br />
                  &nbsp; &nbsp;&nbsp;  Even though technology has enabled us to be better during the last decades, at the end of the day, people make technology work. Our talented and highly qualified minds at work are fuelled with innovation; they perfectly understand customer’s needs and keep them as their first priority. Backed by visionary experts & equipped with advanced technology, we try to meet or exceed every expectation of our customers with our innovative solutions.
                </p>
              </div>
            </Col>
            <Col>
            <div className=' m-4'>

            
           <img src={about} alt='not found' style={{ width: '100%' }} />
           </div>

            </Col>
          </Row>
          {/* <ComponentCard title="Features">
            <Row>
             
            </Row>
          </ComponentCard> */}
        </Card>
      </Col>

    </Row>
  );
};

export default About;

