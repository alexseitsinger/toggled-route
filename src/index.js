import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"

function ToggledRoute({
	isAuthenticated,
	authenticatedComponent,
	anonymousComponent,
	path,
	...rest
}) {
	if (isAuthenticated) {
		return <Route path={path} component={authenticatedComponent} {...rest} />
	} else {
		return <Route path={path} component={anonymousComponent} {...rest} />
	}
}

ToggledRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	authenticatedComponent: PropTypes.oneOfType([PropTypes.func]).isRequired,
	anonymousComponent: PropTypes.oneOfType([PropTypes.func]).isRequired
}

export default ToggledRoute
