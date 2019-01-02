import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router"

/**
 * A react route that uses a different component based on the authentication status.
 *
 * @example
 * import React from "react"
 * import { connect } from "react-redux"
 * import { Switch } from "react-router"
 * import ToggledRoute from "@alexseitsinger/toggled-route"
 *
 * import HomePage from "./pages/home"
 * import LandingPage from "./pages/landing"
 *
 * const ConnectedToggledRoute = connect((state) => {
 *     return {
 *         isAuthenticated: state.auth.isAuthenticated
 *     }
 * })(ToggledRoute)
 *
 * export default (
 *     <Switch>
 *         <ConnectedToggledRoute
 *             path={"/"}
 *             exact
 *             authenticatedComponent={HomePage}
 *             anonymousComponent={LandingPage}
 *         />
 *     </Switch>
 * )
 *
 * @param {Object} props
 * @param {Boolean} props.isAuthenticated Is the user authenticated
 * @param {Function} props.authenticatedComponent The component to render when user is authenticated.
 * @param {Function} props.anonymousComponent The component to render when the user is.
 * @param {...Array} props.rest The rest of the arguments.
 */
function ToggledRoute({
	isAuthenticated,
	authenticatedComponent,
	anonymousComponent,
	...rest
}) {
	if (isAuthenticated) {
		return <Route component={authenticatedComponent} {...rest} />
	}
	return <Route component={anonymousComponent} {...rest} />
}

ToggledRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	authenticatedComponent: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string
	]).isRequired,
	anonymousComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
		.isRequired
}

export default ToggledRoute
