import React from "react";
import { Link } from "react-router-dom";
import styles from "./AnimalCard.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AnimalCard = (props) => {
  const { _id, name, adopted, sex, image } = props.data;

  return (
    // <Link to={`/animals/${_id}`} className={styles["card-container"]}>
    //   <div className={styles["img-container"]}>
    //     <img src={image} alt={name} />
    //   </div>
    //   <div className={styles["card-body"]}>
    //     <p>{name}</p>
    //     <p>{String(adopted)}</p>
    //     <p>{sex}</p>
    //   </div>
    // </Link>
    <Link to={`/animals/${_id}`} className={styles["card-container"]}>
      <Card style={{ width: "18rem" }}>
        <Card.Img className={styles['img']} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{String(adopted)}</Card.Text>
          <Card.Text>{sex}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AnimalCard;
