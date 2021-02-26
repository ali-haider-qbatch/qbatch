import React from "react"
import { Container, Carousel, Image, Row, Col } from "react-bootstrap"
import first from "../images/sliderImage/first.png"
const clientFeedback = () => {
  const clientReview = [
    {
      feedback:
        "The team took self-initiative on various aspects of theproduct to ensure efficient delivery and development. Their enterprising spirit is commendable",
      img: first,
      name: "Victor Simon",
      detail: "Shop Owner, Fee Suites",
    },
    {
      feedback:
        "The team took self-initiative on various aspects of theproduct to ensure efficient delivery and development. Their enterprising spirit is commendable",
      img: first,
      name: "Victor Simon",
      detail: "Shop Owner, Fee Suites",
    },
    {
      feedback:
        "The team took self-initiative on various aspects of theproduct to ensure efficient delivery and development. Their enterprising spirit is commendable",
      img: first,
      name: "Victor Simon",
      detail: "Shop Owner, Fee Suites",
    },
    {
      feedback:
        "The team took self-initiative on various aspects of theproduct to ensure efficient delivery and development. Their enterprising spirit is commendable",
      img: first,
      name: "Victor Simon",
      detail: "Shop Owner, Fee Suites",
    },
  ]
  return (
    <div className="view-sliders">
      <Container>
        <Row className="m-0">
          <Col md={12}>
            <div className="text-center">
              <h5 className="mb-4">What Clients Say About Us</h5>
              <Carousel>
                {clientReview.map((values, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <p className="slider-p">{values.feedback}</p>
                      <div className="profile-box mt-50 d-flex justify-content-center ">
                        <div className="mr-3">
                          <Image src={values.img} alt="no-image" />
                        </div>
                        <div className="d-flex flex-column">
                          <h6 className="profile-title">{values.name}</h6>
                          <span className="profile-detail">
                            {values.detail}
                          </span>
                        </div>
                      </div>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default clientFeedback
