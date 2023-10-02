/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"myapp/pro03_jsondata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
