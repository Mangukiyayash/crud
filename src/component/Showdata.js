import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Showdata = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [tasksFromLocalStorage, setTasksFromLocalStorage] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasksFromLocalStorage(tasks);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  let filteredTasks = tasksFromLocalStorage.filter((task) =>
    task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortBy) {
    filteredTasks = filteredTasks.sort((a, b) => {
      if (sortBy === 'title' || sortBy === 'description') {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return a[sortBy] - b[sortBy];
      }
    });
  }

  return (
    <Container>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} style={{ width: "70%" }} />
      <select value={sortBy} onChange={handleSort} style={{ marginLeft: "10px", width: "20%" }}>
        <option value="">Sort by</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="oldPrice">OldPrice</option>
        <option value="description">Description</option>
      </select>
      <div className="d-flex flex-wrap">
        {filteredTasks.map((task) => (
          <Card key={task.id} style={{ width: '18rem', margin: '10px', boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px" }}>
            <Card.Img src={task.image} alt={task.title} style={{ width: '244px', height: '193px' }} />
            <Card.Body>
              <Card.Title>Title: {task.title}</Card.Title>
              <Card.Text>Price: {task.price}</Card.Text>
              <Card.Text>Old Price: {task.oldPrice}</Card.Text>
              <Card.Text>Description: {task.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Showdata;
