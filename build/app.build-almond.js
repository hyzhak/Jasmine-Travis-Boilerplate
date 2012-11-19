({
	baseUrl: "../src/",
	include: [
		"../libs/almond",
		"library"
	],
    /*namespace: 'almond',*/
	out: "../dist/library-almond.js",
    wrap: {
        "startFile": "wrap.start",
        "endFile": "wrap.end"
    }
})