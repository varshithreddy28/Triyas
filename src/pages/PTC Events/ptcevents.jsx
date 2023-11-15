import React, { useEffect, useState } from "react";
import "./landing.css";
import { Carousel, Button } from "react-bootstrap";
import Loading from "../../components/Loading/loading";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

// Actions
import { addPTCEvents } from "../../features/eventFeatures";

function PTCEvents() {
  const API = "https://triyas-api.onrender.com/api/getEvents";
  const [ptcEvents, setPtcEvents] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const dispatch = useDispatch();

  const eventsStore = useSelector((state) => state.eventsSlice.ptcEvents);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, status } = await axios.get(API);
        if (status === 200) setPtcEvents(data[1].ptc);
        else {
          setApiErrorMsg(data);
          throw Error("Error");
        }
        // console.log(data);
      } catch (error) {
        setApiError(true);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    for (let i = 0; i < ptcEvents.length; i++) {
      const element = ptcEvents[i];
      if (eventsStore.length <= 0) dispatch(addPTCEvents(element));
    }
  }, [ptcEvents]);

  return (
    <div id="home">
      {!apiError ? (
        eventsStore.length <= 0 ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div>
            <Carousel>
              {eventsStore.map((info) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={info.imgSrc}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{info.name}</h3>
                      <Button href={info.url} target="_blank" size="sm">
                        View
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )
      ) : (
        <div className="container">
          <Alert key="danger" variant="danger">
            {apiErrorMsg}
          </Alert>
        </div>
      )}
    </div>
  );
}

export default PTCEvents;
