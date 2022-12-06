import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobList } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  // const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.listofjobs);
  const loadingData = useSelector((state) => state.jobs.isLoading);
  const errorLoading = useSelector((state) => state.jobs.isError);
  const CartItems = useSelector((state) => state.favorite.content.length);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobList(query));
  };

  return (
    <Container>
      <Col xs={10} className="mx-auto my-3">
        <h1>Remote Jobs Search</h1>
        <Link to="./favoritelist">
          <Button>
            Cart
            <span className="ml-2">{CartItems}</span>
          </Button>
        </Link>
      </Col>
      <Row>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
          {loadingData && (
            <Spinner animation="border" variant="info" className="ml-2 mt-5" />
          )}
        </Col>
        {jobs && (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
      <Row>
        <Col sm={12}>
          {errorLoading && (
            <Alert variant="danger" className="text-center">
              Whoopsie, something went wrong 🥲
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
