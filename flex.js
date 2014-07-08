/**
     * FlexJS 1.0.0
     * Dynamic responsive design based on JSON object.
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
                            var parentSize, childSize, operator;

                            operator = rule.operator || '/';

                            function getSize(properties) {
                                var size, selector, value, property, elm;

                                properties = properties || {};

                                selector = properties.selector || null,
                                        value = properties.value || '100%',
                                        property = properties.property || 'width';

                                if (selector === 'window') {
                                    size = window['inner' + (property.charAt(0).toUpperCase() + property.slice(1))];
                                } else if (selector) {
                                    elm = document.querySelector(selector);
                                    size = parseInt(window.getComputedStyle(elm, null).getPropertyValue(property));
                                }
                                
                                if (typeof value === 'string' && selector) {
                                    size = (size * parseInt(value)) / 100;
                                } else if (selector) {
                                    size = size - value;
                                } else {
                                    size = value;
                                }

                                return size;
                            }

                            parentSize = getSize(parent);
                            childSize = getSize(child);

                            return operator === '/' ? childSize / parentSize * 100 + '%' : parentSize - childSize + 'px';
                        }(rule.parent, rule.child);

                console.log(value);

                sheet.insertRule(rule.selector + '{ ' + property + ':' + value + ' }', index + 1);
            });
        };

    })(this);
