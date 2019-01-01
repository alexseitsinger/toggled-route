import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router"

/**
 * A react route that uses a different component based on the authentication status.
 * @param {Object} props
 * @param {Bool} props.isAuthenticated Is the user authenticated
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
