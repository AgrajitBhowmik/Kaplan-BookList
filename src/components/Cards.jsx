import React, { useState, useEffect } from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const Cards = ({ cardsInfo }) => {
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Body>
          <Card.Title>{card.volumeInfo.title}</Card.Title>
          <hr style={{ height: "1px", background: "#007bff" }}></hr>
          <Card.Text>Authors : {card.volumeInfo.authors.toString()}</Card.Text>
          <Card.Text>Publisher : {card.volumeInfo.publisher}</Card.Text>
          <Card.Text>
            Published Date : {card.volumeInfo.publishedDate}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardsInfo.map(renderCard)}</div>;
};

export default Cards;
