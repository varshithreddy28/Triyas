import React, { useEffect, useState } from "react";
import "./landing.css";
import { Carousel, Button } from "react-bootstrap";
import Data from "./data.json";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

// Actions
import { addAltairEvents } from "../../features/eventFeatures";
import Loading from "../../components/Loading/loading";

function AltairEvents() {
  const API = "https://triyas-api.onrender.com/api/getEvents";
  const [altairEvents, setAltairEvents] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const dispatch = useDispatch();

  const eventsStore = useSelector((state) => state.eventsSlice.altairEvents);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, status } = await axios.get(API);
        if (status === 200) setAltairEvents(data[0].altair);
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
    for (let i = 0; i < altairEvents.length; i++) {
      const element = altairEvents[i];
      if (eventsStore.length <= 0) dispatch(addAltairEvents(element));
    }
  }, [altairEvents]);

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

export default AltairEvents;
