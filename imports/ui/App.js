import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <>
      <ResolutionForm />
      <RegisterForm />
      <LoginForm />
      <button onClick={() => Meteor.logout()}>Logout</button>
      <ul>
        {resolutions.map((r) => (
          <li key={r._id}>
            {r.name}
          </li>
        ))}
      </ul>
    </>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(App);
