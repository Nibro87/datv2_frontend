import { Form, Button } from "react-bootstrap";
import React, {useState,useEffect} from "react"
import SERVER_URL from "../settings";
import facade from "./login/loginFacade";


function CreateAuction(){



  const [name,setName] = useState('');
  
  const [date,setDate] = useState('');

  const [time,setTime] = useState('');

  const [location,setLocation] = useState('');
   
 
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const info = {name,date,time,location}
    const options = facade.makeOptions('POST',true,info)
    fetch(SERVER_URL+ "/auction/create",options)
        
     }

 return(



    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="name" required value={name} onChange=  {(event) => setName(event.target.value)} />
      </Form.Group>
  
  <Form.Group className="mb-3" controlId="date">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="date" required value={date} onChange= {(event) => setDate(event.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="time">
      <Form.Label>Time</Form.Label>
      <Form.Control type="time" placeholder="time" required value={time} onChange= {(event) => setTime(event.target.value)} />
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="location">
      <Form.Label>location</Form.Label>
      <Form.Control type="location" placeholder="location" required value={location} onChange= {(event) => setLocation(event.target.value)} />
    </Form.Group>

   


    <Button  variant="primary" type="submit">
      Submit
    </Button>
  </Form>


)


}

export default CreateAuction;