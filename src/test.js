import React from "react"
import { MemoryRouter } from "react-router"

import ToggledRoute from "./index"

function setup({ isAuthenticated, path }) {
	return mount(
		<MemoryRouter initialEntries={[path]} initialIndex={0}>
			<ToggledRoute
				path={path}
				authenticatedComponent={AuthenticatedPage}
				anonymousComponent={AnonymousPage}
				isAuthenticated={isAuthenticated}
			/>
		</MemoryRouter>
	)
}

function AuthenticatedPage() {
	return <div className={"page"}>Authenticated Page</div>
}

function AnonymousPage() {
	return <div className={"page"}>Anonymous Page</div>
}

describe("<ToggledRoute/>", () => {
	it("renders authenticated page when authenticated", () => {
		const wrapper = setup({
			path: "/",
			isAuthenticated: true
		})
		expect(wrapper.find(".page").text()).toBe("Authenticated Page")
	})
	it("renders anonymous page when anonymous", () => {
		const wrapper = setup({
			path: "/",
			isAuthenticated: false
		})
		expect(wrapper.find(".page").text()).toBe("Anonymous Page")
	})
})
