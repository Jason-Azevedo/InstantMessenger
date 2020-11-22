import React from "react";
import { Route, Redirect } from "react-router-dom";

interface SecureRouteData {
  isAuth: Boolean;
  exact: Boolean;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

export default function SecureRoute(props: SecureRouteData) {
  // prettier-ignore
  const route = props.exact 
			? <Route exact path={props.path} component={props.component} />
			: <Route path={props.path} component={props.component} />;

  return <>{props.isAuth ? { route } : <Redirect to="login" />}</>;
}
