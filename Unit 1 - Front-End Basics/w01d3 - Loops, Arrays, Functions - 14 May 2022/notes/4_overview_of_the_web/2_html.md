# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> HTML

## At the end of this lesson, you should:
1. Know what HTML is
2. How to write a simple web page

## What is HTML?
- HTML stands for Hyper Text Markup Language
- HTML describes the structure of the webpage.
- HTML consist of elements that tell the browser how to display the content.
- Some HTML elements come with preset styles

## Writing a simple web page
1. Create a html file: `my-first-page.html`
2. Open the file in an IDE and paste the code below. Once pasted, save the file.
3. Then, drag and drop the `my-first-page.html` file onto your browser
You will see your first web page!

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
```
Notes:
- The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
- The `<html>` element is the root element of an HTML page
- The `<head>` element contains meta information about the HTML page
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading
- The `<p>` element defines a paragraph

Now, try making a change in the `my-first-page.html` and refresh the page to see if your changes is updated or not.

[Click here for a full list of HTML elements](https://hostingcanada.org/html-cheat-sheet)