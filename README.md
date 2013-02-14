<header>
  <h1>About</h1>
</header>
<section>
  <h2>Overview</h2>
  <p>
    ProjectJS is a combination of web technologies to enable streamlined software development for the web. It
    attempts
    to enable what is common in other software development environments:
  <ul>
    <li>Separation of source and target files</li>
    <li>Create an application rather than a loose bunch of files</li>
    <li>Build system</li>
    <li>Unit testing</li>
    <li>API documentation generation <em>(Soon to come)</em></li>
  </ul>
  </p>
  <p>
    The ProjectJS application itself is a sample of how to use these technologies together.  ProjectJS is nothing more
    than a combination of technologies used together to achieve the goals outlined above.
  </p>
</section>
<section>
  <h2>Getting started</h2>
  <h3>Using the project</h3>
  <p>
    To create a ProjectJS project you have to get a copy of the latest <a href="https://github.com/leonardseymore/ProjectJS">ProjectJS</a>
    template and use it as a template. <em>(A future release may have some scripts to help with this)</em>
  </p>
  <h3>Including 3rd party libraries</h3>
  <p>
    All of the resources you want to use in your project should be specified in the <a href="http://ant.apache.org/">Apache Ant</a>
    <em>build.xml</em> script. ProjectJS itself demonstrates this by pulling in some 3rd party libraries such as
    <a href="http://jquery.com/">JQuery</a>, <a href="http://angularjs.org/">AngularJS</a> and <a href="http://lesscss.org/">LESS</a>.
    You can remove and add to these libraries as you see fit to match your project. It is recommended to put all your
    libraries inside the <em>src/lib</em> directory.
  </p>
  <h3>Testing</h3>
  <p>
    Testing is enabled by a combination of technologies. If you want to use another testing framework that is up to you,
    ProjectJS simply provides one means to achieve testing.  By combining <a href="http://code.google.com/p/rhinounit/">rhinounit</a>
    with <a href="http://www.envjs.com/">Envjs</a> you can write tests as if they are running inside a browser.
  </p>
  <h3>Project layout</h3>
  <p>
    A project follows this layout to support
    <table class="table">
      <thead>
        <tr>
          <th>Folder</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>src</td>
          <td>Source files: e.g. static HTML, images, 3rd party libraries, JavaScript and CSS files</td>
        </tr>
        <tr>
          <td>tools</td>
          <td>Supporting tools: e.g. Google Closure</td>
        </tr>
        <tr>
          <td>src/css</td>
          <td>CSS and LESS files that are concatenated into a single LESS file</td>
        </tr>
        <tr>
          <td>src/img</td>
          <td>Image files and spritesheets</td>
        </tr>
        <tr>
          <td>src/js</td>
          <td>Input JavaScript files that are compressed by Google Closure and concatenated to generate a single
          application file</td>
        </tr>
        <tr>
          <td>src/lib</td>
          <td>3rd party libraries and supporting files</td>
        </tr>
        <tr>
          <td>src/static</td>
          <td>Static HTML, Text or any other files</td>
        </tr>
        <tr>
          <td>src/test</td>
          <td>Unit test files</td>
        </tr>
        <tr>
          <td>src/test/lib</td>
          <td>Tools and files to support testing</td>
        </tr>
      </tbody>
    </table>
  </p>
  <h3>Running Ant targets</h3>
  <p>
    A number of Ant targets have been defined and are described below,
    <table class="table">
      <thead>
      <tr>
        <th>Target</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>all</td>
        <td>Build all source files and create an exploded target directory that can be hosted on a web server</td>
      </tr>
      <tr>
        <td colspan="2">
          <pre class="example">
r4:projectjs leonardseymore$ ant
Buildfile: /Users/leonardseymore/src/trunk/projectjs/build.xml

target:

static:

manifest:
   [delete] Deleting: /Users/leonardseymore/src/trunk/projectjs/target/exploded/projectjs.appcache
     [copy] Copying 1 file to /Users/leonardseymore/src/trunk/projectjs/target/exploded

js-filter:

js-compress:
   [jscomp] Compiling 5 file(s) with 38 extern(s)
   [jscomp] /Users/leonardseymore/src/trunk/projectjs/src/lib/jquery-1.9.1/jquery-1.9.1.min.js:3: WARNING - If this if/for/while really shouldnt have a body, use {}
            ...
   [jscomp] /Users/leonardseymore/src/trunk/projectjs/target/filtered/js/projectjs.js:56: WARNING - Suspicious code. This code lacks side-effects. Is there a bug?
   [jscomp]       if (jqxhr.status == 408 || jqxhr.status == 504) { // network timeout exception
   [jscomp]       ^
   [jscomp] 0 error(s), 4 warning(s)

js-concat:

js:

css:

img:
     [copy] Copying 1 file to /Users/leonardseymore/src/trunk/projectjs/target/exploded/img

all:

BUILD SUCCESSFUL
Total time: 8 seconds
          </pre>
        </td>
      <tr>
        <td>clean</td>
        <td>Delete all generated content</td>
      </tr>
      <tr>
        <td colspan="2">
          <pre class="example">
r4:projectjs leonardseymore$ ant clean
Buildfile: /Users/leonardseymore/src/trunk/projectjs/build.xml

clean:
   [delete] Deleting directory /Users/leonardseymore/src/trunk/projectjs/target

BUILD SUCCESSFUL
Total time: 0 seconds
Total time: 4 seconds
          </pre>
        </td>
      </tr>
      <tr>
        <td>css</td>
        <td>Concatenate CSS/LESS input files into a single stylesheet</td>
      </tr>
      <tr>
        <td>img</td>
        <td>Copy source image files to target image directory</td>
      </tr>
      <tr>
        <td>js</td>
        <td>Run js-filter,js-compress,js-concat targets</td>
      </tr>
      <tr>
        <td>js-filter</td>
        <td>Copy source JavaScript files and run through filters to replace any Ant variables defined in source</td>
      </tr>
      <tr>
        <td>js-compress</td>
        <td>Use Google Closure to combine and compress input files</td>
      </tr>
      <tr>
        <td>js-concat</td>
        <td>Concatenate compressed JavaScript files with other uncompressed JavaScript files that should not be modified,
        e.g. custom AngularJS files</td>
      </tr>
      <tr>
        <td>manifest</td>
        <td>Copy and filter application manifest file</td>
      </tr>
      <tr>
        <td>static</td>
        <td>Copy all static input files to output directory</td>
      </tr>
      <tr>
        <td>target</td>
        <td>Creates build directory</td>
      </tr>
      <tr>
        <td>test</td>
        <td>Run test cases</td>
      </tr>
      <tr>
        <td colspan="2">
          <pre class="example">
r4:projectjs leonardseymore$ ant test
Buildfile: /Users/leonardseymore/src/trunk/projectjs/build.xml

test:
[rhinounit] Testsuite: appTest.js
[rhinounit] [  Envjs/1.6 (Rhino; U; Mac OS X x86_64 10.8.2; en-US; rv:1.7.0.rc2) Resig/20070309 PilotFish/1.2.13  ]
[rhinounit] Tests run: 1, Failures: 0, Errors: 0
[rhinounit]

BUILD SUCCESSFUL
Total time: 4 seconds
          </pre>
        </td>
      </tr>
      <tr>
        <td>zip</td>
        <td>Zips up exploded target directory for distribution</td>
      </tr>
      <tr>
        <td colspan="2">
          <pre class="example">
r4:projectjs leonardseymore$ ant zip
Buildfile: /Users/leonardseymore/src/trunk/projectjs/build.xml

target:

zip:
      [zip] Building zip: /Users/leonardseymore/src/trunk/projectjs/target/ProjectJS-0.0-DEV.zip

BUILD SUCCESSFUL
Total time: 0 seconds
          </pre>
        </td>
      </tr>
      </tbody>
    </table>
  </p>
</section>