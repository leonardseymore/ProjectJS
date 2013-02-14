About
=====

Overview
--------

ProjectJS is a combination of web technologies to enable streamlined software development for the web. It attempts to enable what is common in other software development environments:

-   Separation of source and target files
-   Create an application rather than a loose bunch of files
-   Build system
-   Unit testing
-   API documentation generation *(Soon to come)*

The ProjectJS application itself is a sample of how to use these technologies together. ProjectJS is nothing more than a combination of technologies used together to achieve the goals outlined above.

Getting started
---------------

### Using the project

To create a ProjectJS project you have to get a copy of the latest [ProjectJS](https://github.com/leonardseymore/ProjectJS) template and use it as a template. *(A future release may have some scripts to help with this)*

### Including 3rd party libraries

All of the resources you want to use in your project should be specified in the [Apache Ant](http://ant.apache.org/) *build.xml* script. ProjectJS itself demonstrates this by pulling in some 3rd party libraries such as [JQuery](http://jquery.com/), [AngularJS](http://angularjs.org/) and [LESS](http://lesscss.org/). You can remove and add to these libraries as you see fit to match your project. It is recommended to put all your libraries inside the *src/lib* directory.

### Testing

Testing is enabled by a combination of technologies. If you want to use another testing framework that is up to you, ProjectJS simply provides one means to achieve testing. By combining [rhinounit](http://code.google.com/p/rhinounit/) with [Envjs](http://www.envjs.com/) you can write tests as if they are running inside a browser.

### Project layout

A project follows this layout to support

|Folder|Description|
|:-----|:----------|
|src|Source files: e.g. static HTML, images, 3rd party libraries, JavaScript and CSS files|
|tools|Supporting tools: e.g. Google Closure|
|src/css|CSS and LESS files that are concatenated into a single LESS file|
|src/img|Image files and spritesheets|
|src/js|Input JavaScript files that are compressed by Google Closure and concatenated to generate a single application file|
|src/lib|3rd party libraries and supporting files|
|src/static|Static HTML, Text or any other files|
|src/test|Unit test files|
|src/test/lib|Tools and files to support testing|

### Running Ant targets

A number of Ant targets have been defined and are described below,

|Target|Description|
|:-----|:----------|
|all|Build all source files and create an exploded target directory that can be hosted on a web server|
|clean|Delete all generated content|
|css|Concatenate CSS/LESS input files into a single stylesheet|
|img|Copy source image files to target image directory|
|js|Run js-filter,js-compress,js-concat targets|
|js-filter|Copy source JavaScript files and run through filters to replace any Ant variables defined in source|
|js-compress|Use Google Closure to combine and compress input files|
|js-concat|Concatenate compressed JavaScript files with other uncompressed JavaScript files that should not be modified, e.g. custom AngularJS files|
|manifest|Copy and filter application manifest file|
|static|Copy all static input files to output directory|
|target|Creates build directory|
|test|Run test cases|
|zip|Zips up exploded target directory for distribution|
