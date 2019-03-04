import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from "./Courses";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <p className="navbar-brand">
          BCCI{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 30 30"
          >
            {" "}
            <path d="M27,15c0-1.745-0.992-3.269-2.44-4.038c0.395-1.507,0.01-3.182-1.166-4.357c-0.878-0.878-2.035-1.315-3.193-1.315 c-0.392,0-0.784,0.05-1.165,0.15C18.269,3.992,16.745,3,15,3s-3.269,0.992-4.038,2.44c-0.381-0.1-0.773-0.15-1.164-0.15 c-1.158,0-2.314,0.437-3.193,1.315c-1.175,1.175-1.561,2.85-1.166,4.357C3.992,11.731,3,13.255,3,15c0,1.745,0.992,3.269,2.44,4.038 c-0.395,1.507-0.01,3.182,1.166,4.357c0.878,0.878,2.035,1.315,3.193,1.315c0.392,0,0.784-0.05,1.165-0.15 C11.731,26.008,13.255,27,15,27s3.269-0.992,4.038-2.44c0.381,0.1,0.773,0.15,1.164,0.15c1.158,0,2.314-0.437,3.193-1.315 c1.175-1.175,1.561-2.85,1.166-4.357C26.008,18.269,27,16.745,27,15z M20.707,12.707l-7,7C13.512,19.902,13.256,20,13,20 s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L13,17.586l6.293-6.293 c0.391-0.391,1.023-0.391,1.414,0S21.098,12.316,20.707,12.707z" />
          </svg>{" "}
          Twitter Update
        </p>
      </nav>
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
