"use strict";
exports.__esModule = true;
var Path = require("path");
var recursive = require("recursive-readdir");
var Fs = require("fs");
var xregexp = require("xregexp");
var root = Path.resolve(__dirname, '..');
recursive(root, ['!*.js'], function (error, files) {
    files.forEach(function (file) {
        var fileContent = Fs.readFileSync(file, 'utf-8');
        var regex = xregexp(/require\(["']([^"']*)["']\)/);
        var modifiedFileContent = xregexp.replace(fileContent, regex, function (wholeRequire, modulePath) {
            try {
                require(modulePath);
                return wholeRequire;
            }
            catch (error) {
                var newRequirePath = Path.relative(file + "/..", root + "/" + modulePath);
                if (newRequirePath[0] !== '.')
                    newRequirePath = './' + newRequirePath;
                return "require(\"" + newRequirePath + "\")";
            }
        }, 'all');
        Fs.writeFileSync(file, modifiedFileContent, 'utf-8');
    });
});
