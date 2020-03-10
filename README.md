# Clickable SVG

![](extras/clickable-svg.jpg)

## Description

This plug-in allows you to click on a part of an image and record which part was clicked. Clicking on a path in an .svg image will select that path, and fill in the text field with the ID of that path.

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `text`|
| Default values | Yes |
| Constraint message | Uses default behavior |
| Required message | Uses default behavior |
| Read only | Yes *(shows the current value, if present)* |
| media:image | Yes (required) |
| media:audio | Yes |
| media:video | Yes |
| `numbers` appearance | Yes |
| `numbers-decimal` appearance | Yes |
| `numbers-phone` appearance | Yes |

## How to use

1. Create a text field.
1. Attach an .svg image to that text field (using the media:image field property).
1. Attach this plug-in to the text field.
1. When you fill out the form and click on a path in the .svg image, the ID value of that path will be entered into the text field and stored as the response data.

**Note:** make sure your .svg image has paths with unique IDs.

## More resources

* **Test form**  
[extras/test-form](extras/test-form)
* **Developer documentation for field plug-ins**  
More instructions for developing and using field plug-ins. [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)