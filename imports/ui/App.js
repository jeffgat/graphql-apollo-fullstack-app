import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ResolutionForm from './ResolutionForm';

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <>
      <h1>{data.hi}</h1>
      <ResolutionForm />
      <ul>
        {data.resolutions.map((r) => (
          <li key={r._id}>
            {r._id} {r.name}
          </li>
        ))}
      </ul>
    </>
  );
};

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
