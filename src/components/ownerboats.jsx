import { useState, useEffect } from "react";
import SERVER_URL from "../settings";
import facade from "./login/loginFacade";
import { Button,Card,CloseButton, Table } from 'react-bootstrap';





function Myboats(){

    const [list,setList] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
  
        setLoading(true)  
        const opstions = facade.makeOptions("GET",true)
        fetch(SERVER_URL +"/boat/ownerboats",opstions)
          .then((response) => 
          facade.handleHttpErrors(response)
          .then((data) => {
            setList(data);
            console.log(data)
          }).finally(() => {
            setLoading(false);
        }));
          
      }, []);

      return (
        <ul>
     
           
           <Table striped bordered hover>
      
      <thead>
        <tr>
       
       
          <th>Name</th>
          <th>Make</th>
          <th>Brand</th>
          <th>Image</th>
         
          
          
        </tr>
      </thead>
      <tbody>
      {list.map((item) =>
       (
      
       <tr key = {item.id}>
         
          
          <td>{item.name}</td>
          <td>{item.make}</td>
          <td>{item.brand}</td>
          <td>{item.imageUrl}</td>
          
          
        </tr>
        
         ))}
       </tbody>
    </Table>
    
         
        </ul>
      );
    

}

export default Myboats;