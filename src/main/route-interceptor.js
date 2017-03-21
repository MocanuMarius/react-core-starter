import history from "./script/internal/history.jsx"

history.listen( location => {
	console.log("location changed", location)
	// history.goBack()
})
