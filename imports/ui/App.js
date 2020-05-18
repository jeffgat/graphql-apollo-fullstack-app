import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import GoalForm from "./GoalForm";
import ResolutionForm from "./ResolutionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Goal from "./resolutions/Goal";

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
    <>
      {user._id ? (
        <button
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </>
      )}
      <ResolutionForm />
      <ul>
        {resolutions.map((resolution) => (
          <li key={resolution._id}>
            <span style={{ textDecoration: resolution.completed ? "line-through" : "none" }}>{resolution.name}</span>
            <ul>
              {resolution.goals.map((goal) => (
                <li>
                  <Goal goal={goal} key={goal._id} />
                </li>
              ))}
            </ul>
            <GoalForm resolutionId={resolution._id} />
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
      completed
      goals {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));
