import { useState, useEffect } from "react";
import SERVER_URL from "../settings";
import facade from "./login/loginFacade";
import { Button,Card,CloseButton, Table } from 'react-bootstrap';


function Auctionlist(){

    const [list,setList] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
  
        setLoading(true)  
        
        fetch(SERVER_URL +"/auction/allauctions")
          .then((response) => 
          facade.handleHttpErrors(response)
          .then((data) => {
            setList(data);
            console.log(data)
          }).finally(() => {
            setLoading(false);
        }));
          
      }, []);


      if(loading){
        <p>Loading...</p>
      }
 

      return (
        <ul>
     
           
           <Table striped bordered hover>
      
      <thead>
        <tr>
       
       
          <th>Name</th>
          <th>Data</th>
          <th>Time</th>
          <th>Location</th>
          
          
        </tr>
      </thead>
      <tbody>
      {list.map((item) =>
       (
      
       <tr key = {item.id}>
          
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>{item.location}</td>
          
    
        </tr>
        
         ))}
       </tbody>
    </Table>
    
         
        </ul>
      );
    



}

export default Auctionlist;