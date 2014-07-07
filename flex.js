/**
 * FlexJS 1.0.0
 * Dynamic responsive design based on JSON object.
 *
 flex([
 {
     parent: 960, // size of parent
     child: 200, // size of child
     selector: '.TEST1', // output selector
     property: 'width' // output property
     // .TEST1 {width: 20.833333333%;}
 },
 {
     parent: 'window', // size from window
     child: 54, // size of child
     selector: '.TEST2', // output selector
     property: 'width' // output property
     // .TEST2 {width: XXX%;}
 },
 {
     parent: 960, // size of parent
     child: 'body > .p', size from selector
     selector: '.TEST3', // output selector
     property: 'height' // output property
     // .TEST3 {width: XXX%;}
 },
 {
     parent: 'body', size from selector
     child: 'body > .p', size from selector
     selector: '.TEST4', // output selector
     property: 'width'  // output property
     // .TEST4 {width: XXX%;}
 }
 ]);
 *
 * Nicolas RAIBAUD
 * 07/07/14
 * */
(function (window) {

    'use strict';

    window.flex = function (rules) {
        var sheet;

        sheet = document.styleSheets[0];

        rules.forEach(function (rule, index, array) {
            var property, value;

            property = rule.property || 'width',
                value = function (parent, child) {
                    var parentSize, childSize;

                    function getSize(value) {
                        var size;

                        if (value === 'window') {
                            size = window['inner' + (property.charAt(0).toUpperCase() + property.slice(1))];
                        } else if (typeof value === 'string') {
                            size = parseInt(window.getComputedStyle(document.querySelector(value), null).getPropertyValue(property));
                        } else {
                            size = value;
                        }

                        return size;
                    }

                    parentSize = getSize(parent);
                    childSize = getSize(child);

                    return childSize / parentSize;
                }(rule.parent, rule.child);

            sheet.insertRule(rule.selector + '{ ' + property + ':' + (value * 100) + '%; }', index + 1);
        });
    };

})(this);