const chokidar = require('chokidar');
let watch;

watcher = function(projectFolder){
	watch = chokidar.watch(['./_component', './modules', projectFolder], {
		ignored: /[\/\\]\.|(\.[^\.]*TMP[^\.]*$)/,
		awaitWriteFinish: {
			stabilityThreshold: 300,
			pollInterval: 300
		}
	});
	return watch;
};

module.exports = watcher;