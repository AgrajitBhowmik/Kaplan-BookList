import React, { useState, useEffect } from "react";
import "./Box.css";
import { Container, Alert } from "react-bootstrap";
import {
  addBooklists,
  getBooklists,
  setIsBookAdded,
  bookAdded,
} from "../fakeDB";
import Cards from "./Cards";
import SearchBox from "../common/SearchBox";
import CustomAlert from "./../common/CustomAlert";

function MainComponent({ history }) {
  const [cardInfo, setCardInfo] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getBooklists().length == 0) {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          addBooklists(json.items);
          setCardInfo(getBooklists());
        })
        .catch(function (error) {
          console.log("Request failed", error);
        });

      return;
    }
    setCardInfo(getBooklists());
    if (bookAdded() === true) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
      setIsBookAdded();
    }
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
    const filteredBooks = getBooklists().filter((card) => {
      return (
        card.volumeInfo.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        card.volumeInfo.authors
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        card.volumeInfo.publisher
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
    setCardInfo(filteredBooks);
  };

  return (
    <Container fluid>
      {show && (
        <CustomAlert
          variant="success"
          handleShow={setShow}
          text={"New Book Added Successfully"}
        />
      )}
      <SearchBox value={searchField} handleChange={handleSearch} />
      <h4 className="ml-3">All Books</h4>
      <p className="ml-3">
        Showing {cardInfo.length} books details from the database.
      </p>
      <Cards cardsInfo={cardInfo} />
    </Container>
  );
}

export default MainComponent;
