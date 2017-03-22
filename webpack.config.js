function buildConfig(env) {

	if (env.BUILDMODE != 'dist') { return require('./config/webpack/environments').dist }
	else return require('./config/webpack/environments').dev
}

// #TODO WTF ? THIS ENV FILES ARE STUPID
module.exports = buildConfig(process.env);
