import React from 'react';
import design from './cards.module.css';
import { Link } from "react-router-dom";


const Cards = ({results , page}) => {

  return results? (results.map((x)=>{
    const {id , name , image, species, status, location} = x;
    return(
   <Link 
   style={{ textDecoration: "none" }}
          key={id}
          to={`${page}${id}`}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
   > 
      <div className='card m-2'>
      <img src={image} alt=''/>
        <div className={`${design.card} p-2`}>
          <h4>{name}</h4>
          <h6>Species : {species}</h6>
          <h6>Last location : {location.name} </h6>
        </div>
      </div>
      {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${design.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${design.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${design.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}

    </Link>
  )

  })) : "No Data here"
  
};
export default Cards;
