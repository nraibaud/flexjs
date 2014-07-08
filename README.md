#why?
Because targeting all devices using media queries is hard or because having a size in a specific position or without a grid system is hard, this script will help you to adjust the width and height.

#How it works?
* Call a css file named flex.css (If not, the first found css, will be used)
* Define your rules as JSON object.
* Call the flex function.

#Properties

    parent: { // The parent object [optional]
        selector: '', // Parent selector [optional]['window'|'selector']['window']
        value: '', // Size from parent [optional][number,string]['100%']
        property: '' // Property to get [optional]['width'|'height']['width']
    },
    parent: { // The child object [optional]
        selector: '', // Child selector [optional]['window'|'selector']['window']
        value: '', // Size from child [optional][number,string]['100%']
        property: '' // Property to get [optional]['width'|'height']['width']
    },
    selector: '', // Output selector [required][string]
    property: '', // Output property [optional]['width'|'height']['width']
    operator: '' // Calculation operator [optional]['/'|'-']['/']
    
#Examples
