DalekJS + Travis CI = ?
=======================

This is a very reduced setup to run a test with
[DalekJS](http://dalekjs.com/pages/getStarted.html#firsttest)
on [Travis](https://travis-ci.org/).

We want tests to be run with [Firefox that is already
installed on Travis](http://docs.travis-ci.com/user/firefox/),
as we have major problems with sauce labs.

Setup
-----

```
git clone git@github.com:gr2m/dalek-travis-test.git
cd dalek-travis-test
npm install
```

You can either run tests with Grunt

```bash
grunt dalek
```

Or directly with [dalek-cli](http://dalekjs.com/pages/getStarted.html#install)

```
dalek dalek-test.js
```

Known Problem
-------------

Dalek cannot run tests using the firefox at the moment, due
to [dalekjs/dalek-browser-firefox#13](https://github.com/dalekjs/dalek-browser-firefox/issues/13#issuecomment-52111868).
This repo is supposed to serve as help to get it fixed, and
make it run on travis, too.
