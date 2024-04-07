import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../Redux/Actions/Action';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Adddata = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const dispatch = useDispatch(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const task = {
      title,
      price: parseFloat(price),
      oldPrice: parseFloat(oldPrice),
      image,
      description,
    };

    dispatch(createTask(task));

    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksFromStorage.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksFromStorage));

    setTitle('');
    setPrice('');
    setOldPrice('');
    setImage('');
    setDescription('');
    setShowModal(false); 
  };

  return (
    <Container>
      <Button onClick={() => setShowModal(true)} style={{marginLeft:"50%"}}>Add</Button> 
      <Modal show={showModal} onHide={() => setShowModal(false)}  style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={handleSubmit} >
           
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control"/>
            </div>
         
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price:</label>
              <input type="text" id="price" value={price} onChange={(event) => setPrice(event.target.value)} className="form-control"/>
            </div>
            
            <div className="mb-3">
              <label htmlFor="oldPrice" className="form-label">Old Price:</label>
              <input type="text" id="oldPrice" value={oldPrice} onChange={(event) => setOldPrice(event.target.value)} className="form-control"/>
            </div>
           
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image:</label>
              <input type="text" id="image" value={image} onChange={(event) => setImage(event.target.value)} className="form-control"/>
            </div>
        
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} className="form-control" />
            </div>
            <Button type="submit" variant="primary">Create Task</Button>
          </form>
        </Modal.Body>
      </Modal><br/><br/>
    </Container>
  );
};

export default Adddata;
