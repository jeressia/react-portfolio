import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Daycare from '../../assets/daycare.jpg';
import Sims from '../../assets/sims.jpeg';
import Bed from '../../assets/bed.jpeg';

import './About.scss';

export class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="AboutText">
       <h1 className="AboutHeading">Personal</h1>
        <p>I am a highly motivated creative and a lover of most things.
           I pride myself on my ability to learn quickly and my expansive knowledge base
          of useless information (mostly Spongebob quotes and references).
           I am Jeopardy's #1 fan and I enjoy traveling.
           I am a writer, a reader, and a doer.
           Photography is a passion that I have taken up recently.
           I also enjoy baking, binge-watching tv shows, and vampires---in no particular order.
</p>
       <h1 className="AboutHeading">Professional</h1>
       <p>My degree is in Social Work. I am a helper and problem solver by nature.
         I  have worked as a mental health social worker for homeless people and
         I worked briefly as a child abuse investigator.
         Currently, I own Little Legacies Childcare in Antioch, TN.
        Before diving into social work, I worked as a preschool
        teacher at schools around middle Tennessee.
        In February 2019, I took a leap of faith and started a software bootcamp
        at Nashville Software School.
        Attending NSS has been so rewarding and has shown me that software development
        is what I am supposed to be doing with my life.
        I truly enjoy creating web content and I have recently embarked on my
        mobile development journey through self-study. </p>
        </div>
        <div className="AboutCarousel">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Daycare}
      alt="Little Legacies Childcare"
    />
    <Carousel.Caption>
      <h3>Little Legacies Childcare</h3>
      <p>Little Legacies Childcare is a daycare that I own and operate in Antioch, TN. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bday"
      src={Bed}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Handmade Bed</h3>
      <p>One of my favorite accomplishments is my bed that I built.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Sims}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The Sims Fan</h3>
      <p>I spend a lot of my spare time playing The Sims. This is one of my favorite games.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
</div>
    );
  }
}

export default About;
