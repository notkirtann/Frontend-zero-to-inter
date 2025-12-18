# Notes of Bootstrap
Bootstrap is a popular front-end framework for developing responsive and mobile-first websites. It provides a collection of CSS and JavaScript components that help streamline the design and development process.
Here is a simple example of a landing page using Bootstrap:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Landing Page using Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/media.css">
  </head>
  <body>
    <h1 class="p-4 mx-5 my-5 m-t-1">Hola Bootstrap</h1>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```
This code sets up a basic HTML document that includes Bootstrap's CSS and JavaScript files via CDN. The `<h1>` element demonstrates the use of Bootstrap's utility classes for padding and margin.

## BreakPoints  
Bootstrap mainly works on six screens sizes:
- Extra small (xs): <576px
- Small (sm): ≥576px    
- Medium (md): ≥768px
- Large (lg): ≥992px
- Extra large (xl): ≥1200px
- Extra extra large (xxl): ≥1400px
You can use these breakpoints to create responsive designs that adapt to different screen sizes. For example, you can apply different styles or layouts based on the screen size using Bootstrap's grid system and utility classes.
## Containers
Bootstrap provides three types of containers to wrap your content:
- `.container`: A responsive fixed-width container that adjusts its width based on the screen size.
- `.container-fluid`: A full-width container that spans the entire width of the viewport.   
- `.container-{breakpoint}`: A responsive container that is fixed-width until the specified breakpoint is reached, after which it becomes full-width.
You can use these containers to structure your layout and ensure that your content is properly aligned and spaced.
## Grid System
Bootstrap's grid system is based on a 12-column layout and allows you to create responsive layouts using rows and columns. You can define the number of columns an element should span at different breakpoints using classes like `.col-{breakpoint}-{number}`. For example, `.col-md-6` would make an element span 6 columns (half the width) on medium-sized screens and larger.
### Column Classes
- `.col`: Auto-width column that adjusts based on content.
- `.col-{number}`: Fixed-width column that spans the specified number of columns (1-12).
- `.col-{breakpoint}-{number}`: Fixed-width column that spans the specified number of columns at the given breakpoint.
### Row Classes
- `.row`: A container for columns that ensures proper alignment and spacing.
### Gutter Classes
- `.g-0` to `.g-5`: Control the spacing (gutter) between columns.
- `.gx-0` to `.gx-5`: Control horizontal gutter spacing.
- `.gy-0` to `.gy-5`: Control vertical gutter spacing.
### Auto-layout Columns
- `.col`: Automatically adjusts the width of columns based on the number of columns present in the row.

```html
<h1 class="text-md-center text-lg-end text-xs-start">Hola Bootstrap</h1>
    <div class="row">
      <div class="col-xxl-1 col-md-3">Hola</div>
      <div class="col-xxl-6 col-md-6">madridista</div>
      <div class="col-xxl-2 col-md-3">como esta</div>
      <div class="col-xxl-3 col-md-12"> muchas gracias</div>
    </div>
    <hr>
    <div class="row justify-content-around">
        <div class="col col-md-3 pb-4 mb-4 bg-black text-white font-monospace">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit impedit quisquam deserunt natus incidunt nostrum excepturi porro neque consectetur, laborum explicabo.</div>
        <div class="col col-md-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit impedit quisquam deserunt natus incidunt nostrum excepturi porro neque consectetur, laborum explicabo.</div>
        <div class="col col-md-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit impedit quisquam deserunt natus incidunt nostrum excepturi porro neque consectetur, laborum explicabo.</div>
        <div class="col col-md-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit impedit quisquam deserunt natus incidunt nostrum excepturi porro neque consectetur, laborum explicabo.</div>
        <div class="col col-md-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit impedit quisquam deserunt natus incidunt nostrum excepturi porro neque consectetur, laborum explicabo.</div>
        <div class="col col-md-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit impedit quisquam deserunt natus incidunt nostrum excepturi porro neque consectetur, laborum explicabo.</div>
    </div>
```
Explanation: The above code demonstrates the use of Bootstrap's grid system to create a responsive layout. The first row contains four columns with different widths based on the screen size. The second row uses the `justify-content-around` class to evenly space out six columns, each containing some placeholder text.
#### Other Features of Grid System
- Nesting Columns: You can nest columns within other columns to create more complex layouts.
- Offsetting Columns: You can offset columns to create space on the left side using classes like `.offset-{breakpoint}-{number}`.

## Utility Classes
Bootstrap provides a wide range of utility classes that allow you to quickly style elements without writing custom CSS. Some common utility classes include:
- Spacing: `.m-{side}-{size}` for margin and `.p-{side}-{size}` for padding, where `{side}` can be `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (left and right), `y` (top and bottom), or blank (all sides), `{size}` ranges from 0 to 5 and `mx-auto` centers an element horizontally.
- Text Alignment: `.text-start`, `.text-center`, `.text-end` for aligning text.
- Display: `.d-{value}` where `{value}` can be `none`, `block`, `inline`, `inline-block`, `flex`, etc.
- Colors: `.text-{color}` and `.bg-{color}` for text and background colors.
- Flexbox: Classes like `.d-flex`, `.justify-content-{value}`, and `.align-items-{value}` for flexbox layouts.
These utility classes help you quickly apply common styles and layouts to your elements without the need for custom CSS.

## other Utilities
- Positioning: Classes like `.position-relative`, `.position-absolute`, and `.position-fixed for controlling element positioning.
- Sizing: Classes like `.w-25`, `.w-50`, `.w-75`, `.w-100`, and `.h-100` for setting width and height.
- image: Classes like `.img-fluid` for responsive images and `.rounded` for rounded corners.


## Other Features
- Forms: Bootstrap provides pre-styled form controls, validation styles, and layout options for creating responsive forms.
- Modals: You can create modal dialogs using Bootstrap's modal component, which includes options for headers, footers, and various sizes.

## Components
Bootstrap includes a variety of pre-designed components that you can use to enhance your website. Some popular components include:
- Navbar: A responsive navigation bar that can be customized with links, dropdowns, and branding.
- Buttons: Pre-styled buttons with various sizes, colors, and states.
