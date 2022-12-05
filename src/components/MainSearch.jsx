import { useState,useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useDispatch, useSelector } from 'react-redux'
import { getJobList } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  // const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.listofjobs)

  const handleChange = (e) => {
    setQuery(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobList(query))
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="./favoritelist">Favorites</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;