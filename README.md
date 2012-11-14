ProjectJS based project
---

ANT is used to build the project
http://ant.apache.org/

# Build
To build everything run
ant

Tip: Host the target/exploded directory using a symlink in your web server

# Test
To run tests
ant test

	r4:projectjs $ ant test
	Buildfile: /Users/leonardseymore/src/trunk/projectjs/build.xml

	test:
	[rhinounit] Testsuite: appTest.js
	[rhinounit] [  Envjs/1.6 (Rhino; U; Mac OS X x86_64 10.8.2; en-US; rv:1.7.0.rc2) Resig/20070309 PilotFish/1.2.13  ]
	[rhinounit] Tests run: 1, Failures: 0, Errors: 0
	[rhinounit]

	BUILD SUCCESSFUL
	Total time: 4 seconds

# Deploy
To generate a zip
ant zip

	r4:projectjs $ ant zip
	Buildfile: /Users/leonardseymore/src/trunk/projectjs/build.xml

	target:

	zip:
				[zip] Building zip: /Users/leonardseymore/src/trunk/projectjs/target/ProjectJS-0.0-DEV.zip

	BUILD SUCCESSFUL
	Total time: 0 seconds