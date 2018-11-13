# Toggled Route

## Description

A react route that uses a different component based on the authentication status of the user.

## Props

-   path - (String, Required) - The string to match for the route.
-   authenticatedComponent - (Node, Required) - The component to use for the route when the user is authenticated.
-   anonymousComponent - (Node, Required) - The component to use for the route when the user is not authenticated.
-   isAuthenticated - (Boolean, Required) - True or false if the user is authenticated.

## Usage

```javascript
import React from "react"
import { Switch } from "react-router-dom"
import { connect } from "react-redux"
import ToggledRoute from "@alexseitsinger/toggled-route"

import HomePage from "../pages/home"
import LandingPage from "../pages/landing"

const ConnectedToggledRoute = connect((state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
})(ToggledRoute)

export default (
	<Switch>
		<ConnectedToggledRoute
			path={"/"}
			exact
			authenticatedComponent={HomePage}
			anonymousComponent={LandingPage}
		/>
	</Switch>
)
```
