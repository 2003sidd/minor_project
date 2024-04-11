
import React from 'react'
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';



const ContainerSlids =(props) => {
  const {img,discription} = props.item;
    return(
      <Container className='workouts'>
      
        <img src={img} alt='img ' />
        <div className="discription">
    <h2><span className='green'>About</span>
   
    </h2>
        <p>{discription}
        <Link to="/filter">Try</Link>
      
        </p>
     
        </div>

      </Container>
    )
}
export default ContainerSlids;

const Container = styled.div`
  height: 16rem;
  background-color: #4e5156;

  margin: 0 0.5rem;
  // padding: 0 0.5rem;
  padding:  0.5rem;

  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;



  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  
  .discription{
    position: absolute;
    right:0;
    left:0;
    bottom: -4.6rem;
    text-align: left;
    padding: 1rem;
    // background: linear-gradient(rgba(0,0,0,0.100), rgba(0,0,0,0.80));
background-color:rgba(188, 189, 185,0.3);
    transition: all 400ms ease-in-out;

    h2{
      font-size: 1.5rem;
    }
  
    p:hover{
      width: 90%;
      font-size: 1rem;
  font-weight:600;
      a{
        margin-left: 0.4rem;
        color:red;
      }

    }
  }

img:hover{
  transform: scale(1.3);
}

.discription:hover{
  bottom: 0;
}





`;