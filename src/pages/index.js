import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Image, Button, Carousel } from "react-bootstrap"
import IndexImage from "../images/index.svg"
import medcerts from "../images/medcerts.png"
import medcertsLogo from "../images/index/medecerts.png"
import discover from "../images/research/discover.svg"
import design from "../images/research/website-design.svg"
import data from "../images/research/data.svg"
import outline from "../images/research/outline.svg"
import amazonUp from "../images/slider-arrow/amazon-up.png"
import amazonDown from "../images/slider-arrow/amazon-down.png"
import FeaturedWork from "../components/featuredWork"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      {/* <section className="background">
      <div className="outer-left">
        <div className="container">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. Lorem ipsum, or lipsum as it is sometimes known,
          is dummy text used in laying out print, graphic or web designs. The
          passage is attributed to an unknown typesetter in the 15th century who
          is thought to have scrambled parts of Cicero's De Finibus Bonorum et
          Malorum for use in a type specimen book.
        </div>
      </div>
    </section> */}
      <div className="layout">
        <div className="skewed-bg">
          <div className="content">
            <Container className="pt-155">
              <div className="row m-0">
                <div className="col-md-6">
                  <div className="text-left">
                    <h1>Automating Ideas for Optimum ROI</h1>
                    <p>
                      Adapting Emerging Technologies, Modernizing Legacy Systems
                      & Developing User Friendly Solutions that yields maximum
                      productivity in lower down
                    </p>
                    <div className="btn-batch d-flex">
                      <Button variant="primary" className="endeavour-button">
                        Let's Chat
                      </Button>
                      <Button className="outline-button ml-4">Our Work</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <Image src={IndexImage} className="image-space" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <footer className="footer">
          <Container>
            <div className="row m-0">
              <div className="col-md-6">
                <h6 className="hwr">Who We Are </h6>
                <h3 className="hwr-types">
                  Strategists, Devbots, Visualizers & Executors
                </h3>
              </div>
              <div className="col-md-6">
                <p className="pb-3">
                  We are a team of diverse masters, encompassing holistic
                  services required to design seamless experiences and
                  progressive solutions, where we Define the Systems, Refine the
                  Legacy Systems, Propose Iterations for ease, Develop the
                  user-friendly products & features & Test the minimum viability
                  as well as optimum performance of the systems.
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <h1>2015</h1>
                    <h3 className="h-title">Established</h3>
                  </div>
                  <div className="d-flex flex-column">
                    <h1>300+</h1>
                    <h2 className="h-title">Clients</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-around">
                  <div className="d-flex flex-column">
                    <h1>500</h1>
                    <h2 className="h-title">Projects</h2>
                  </div>
                  <div className="d-flex flex-column">
                    <h1>100</h1>
                    <h2 className="h-title">Teams</h2>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
      <FeaturedWork />
      <section>
        <Container>
          <div className="driven-process">
            <h3 className="text-center">Our Research driven Process</h3>
            <div className="d-flex">
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={discover} alt="no-image" />
                </div>
                <h4 className="mb-3">Discover</h4>
                <p className="research-p">
                  We facilitate in translation of thoughts and ideal experiences
                </p>
              </div>
              <div className="d-flex align-items-center pt-30">
                <Image src={amazonUp} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={design} alt="no-image" />
                </div>
                <h4 className="mb-3">Design</h4>
                <p className="research-p">
                  Design and validate the early ideas through Iteractive
                  Prototype Design
                </p>
              </div>
              <div className="d-flex align-items-center pt-30">
                <Image src={amazonDown} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={data} alt="no-image" />
                </div>

                <h4 className="mb-3">Develop</h4>
                <p className="research-p">
                  Develop using the modern technologies for performance and
                  scalability
                </p>
              </div>
              <div className="d-flex align-items-center pt-30">
                <Image src={amazonUp} />
              </div>
              <div className="pt-30 d-flex justify-content-center align-items-center flex-column">
                <div className="img-bg">
                  <Image src={outline} alt="no-image" />
                </div>

                <h4 className="mb-3">Deploy</h4>
                <p className="research-p">
                  Deploy products for efficacy with better security for on
                  security & operations
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
