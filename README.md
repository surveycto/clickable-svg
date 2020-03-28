# Clickable SVG

![](extras/clickable-svg.jpg)

## Description

This plug-in allows you to click on a part of an image and record which part was clicked. Clicking on a named region (either a path or a group of paths with an ID) in an .svg image will select that region, and fill in the text field with the ID of the region. To help indicate which region is currently selected, all regions will start out at 40% opacity. When selected, a region will return to 100% opacity.

[![Download now](extras/download-button.png)](https://github.com/surveycto/clickable-svg/raw/master/clickable-svg.fieldplugin.zip)

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
| `numbers` appearance | No |
| `numbers-decimal` appearance | No |
| `numbers-phone` appearance | No |

## How to use

1. Create a text field.
1. Attach an .svg image file to that text field (using the media:image field property).
1. Attach this plug-in to the text field.
1. When you fill out the form and click on a region in the image, the ID value of that region will be entered into the text field and stored as the response data.

**Notes about your .svg file**  
Each selectable region must have a unique ID attribute. If you create your .svg file using Adobe Illustrator or Vectr, this should be done automatically. If you create your .svg file using Inkscape, or you are using an .svg file that you got from somewhere else, you may need to edit it yourself to make sure that only the selectable regions have ID attributes. Check out the [test-form](extras/test-form) and the two associated .svg files to see examples. See below for links to some other resources which might help you.

## More resources

* **Example form**  
Use this example form to quickly learn the basics of how this field plug-in works.  
[Download example form package](https://github.com/surveycto/clickable-svg/raw/master/extras/example-form/example-form-package-clickable-svg.zip)
* **Free tools for creating .svg files**  
[https://vectr.com/](https://vectr.com/)  
[https://inkscape.org/](https://inkscape.org/)  
[https://www.sketch.com/](https://www.sketch.com/)  
* **How to Optimize and Export SVGs in Adobe Illustrator**  
[https://www.sitepoint.com/crash-course-optimizing-and-exporting-svgs-in-adobe-illustrator/](https://www.sitepoint.com/crash-course-optimizing-and-exporting-svgs-in-adobe-illustrator/)
* **Developer documentation**  
Instructions and resources for developing your own field plug-ins.  
[https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
* **User documentation**  
How to get started using field plug-ins in your SurveyCTO form.  
[https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html](https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)