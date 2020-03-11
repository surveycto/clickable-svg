# Clickable SVG

![](extras/clickable-svg.jpg)

## Description

This plug-in allows you to click on a part of an image and record which part was clicked. Clicking on a named region (either a path or a group of paths with an ID) in an .svg image will select that region, and fill in the text field with the ID of the region. To help indicate which region is currently selected, all regions will start out at 40% opacity. When selected, a region will return to 100% opacity.

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

**Note:** since the ID values from within the .svg image will be used to update the field response, it is recommended that you make sure they are named appropriately. Each clickable region should have a unique ID. Check out the [test-form](extras/test-form) and the two associated .svg files to see examples. See below for links to some other resources which might help you.

## More resources

* **Test form**  
[extras/test-form](extras/test-form)
* **How to Optimize and Export SVGs in Adobe Illustrator**  
[https://www.sitepoint.com/crash-course-optimizing-and-exporting-svgs-in-adobe-illustrator/](https://www.sitepoint.com/crash-course-optimizing-and-exporting-svgs-in-adobe-illustrator/)
* **Developer documentation for field plug-ins**  
More instructions for developing and using field plug-ins. [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)