#why?
Because targeting all devices using media queries is hard or because having a size in a specific position or without a grid system is hard, this script will help you to adjust the width and height.

#How it works?
* Call a css file named flex.css (If not, the first found css, will be used)
* Define your rules as JSON object.
* Call the flex function.
* You can set size base from % of computedStyle, computedStyle - number value, number value.
* You can calculate width or height between two different element even if they are parents.
* You can calculate width or height between two different values.
* You can calculate width or height between elements and values.
* You can calculate using / or - operator.
* You can choose unit % or px.

#Properties

    parent: { // The parent object [optional]
        selector: '', // Parent selector [optional]['window'|'selector'][null]
        value: '', // Size from parent [optional][number,string]['100%']
        property: '' // Property to get [optional]['width'|'height']['width']
    },
    child: { // The child object [optional]
        selector: '', // Child selector [optional]['window'|'selector'][null]
        value: '', // Size from child [optional][number,string]['100%']
        property: '' // Property to get [optional]['width'|'height']['width']
    },
    selector: '', // Output selector [required][string]
    property: '', // Output property [optional]['width'|'height']['width']
    operator: '' // Calculation operator [optional]['/'|'-']['/'],
    unit: '' // Unit of css value [optional]['%'|'px']['%']
    
#Examples
## .blocks .block height is equal to #block width
    flex([{
        parent: {
                selector:'#block'
            },
            child: {
                value:0
            },
            selector:'.blocks .block',
            property:'height',
            operator:'-',
            unit:'px'
        }]);


## .btn height is 5.925925926% of window width
    flex([{
        child: {
            selector:'window',
             value:'5.925925926%'
        },
        selector:'.btn',
        property:'height',
        unit:'px'
     }]);
             

## .blocks .block height is n% of .blocks height based on #block width
    flex([{
        parent: {
            selector:'.blocks',
             property:'height'
        },
        child: {
            selector:'#block'
        },
        selector:'.blocks .block',
        property:'height'
     }]);
     
## .blocks .block width is n% of window width
    flex([{
        parent: {
            selector:'window'
        },
        child: {
            value:200
        },
        selector:'.blocks .block'
     }]);
     
## body width is nPX of window width
    flex([{
        parent: {
            selector:'window'
        },
        child: {
            selector:'window',
            value:'25%'
        },
        selector:'body',
        unit:'px',
        operator:'-'
     }]);
     
#TODO
* Make it more dynamic using CSS calc().
* Remove and add methods to add and remove rules on the fly.
