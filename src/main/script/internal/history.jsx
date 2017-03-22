import CreateHistory from 'history/createBrowserHistory'
let browserHistory = new CreateHistory({ basename: '' })

browserHistory.block((location, action) => {
	//# TODO sensitive javascript alerts for WANTING TO LEAVE THE PAGE here
    // return 'Are you sure you want to leave this page?'
})
export default browserHistory
