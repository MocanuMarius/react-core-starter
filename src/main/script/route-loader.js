// HERE a list is needed with all the features/ pages that require a View.
// We need to import that View component from each and then this will be passed into the rootContainer

let routes = [
		require("../../features/login/views/login.jsx").route,
		require("../../features/sample/views/sample.jsx").route
	]

export default routes
