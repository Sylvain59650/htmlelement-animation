# htmlelement-animation

  <div style="display:inline">
    <a target="_blank" title="build" href="https://travis-ci.org/Sylvain59650/htmlelement-animation"><img src="https://travis-ci.org/Sylvain59650/htmlelement-animation.png?branch=master" /></a>
    <a target="_blank" title="version" href="https://www.npmjs.com/package/htmlelement-animation"><img src="https://img.shields.io/npm/v/htmlelement-animation.svg" /></a>
    <a target="_blank" title="package" href="https://github.com/Sylvain59650/htmlelement-animation"><img src="https://img.shields.io/github/package-json/v/Sylvain59650/htmlelement-animation.svg" /></a>
    <a target="_blank" title="dependencies" href="https://david-dm.org/Sylvain59650/htmlelement-animation"><img src="https://img.shields.io/david/Sylvain59650/htmlelement-animation.svg" /></a>
    <a target="_blank" title="dependencies graph" href="http://npm.anvaka.com/#/view/2d/htmlelement-animation"><img src="https://img.shields.io/badge/dependencies-graph-blue.svg" /></a>
    <img src="https://img.shields.io/bundlephobia/min/htmlelement-animation.svg" />
    <img src="https://img.shields.io/badge/eslint-ok-blue.svg" />
 <a href="https://codeclimate.com/github/Sylvain59650/htmlelement-animation/maintainability"><img src="https://api.codeclimate.com/v1/badges/36921e2f2843a2f3af27/maintainability" /></a>
    <a target="_blank" title="tests" href="https://sylvain59650.github.io/htmlelement-animation/"><img src="https://img.shields.io/badge/tests-passing-brightgreen.svg" /></a>
    <img src="https://img.shields.io/npm/l/htmlelement-animation.svg" />
    <img src="https://hits.dwyl.com/Sylvain59650/htmlelement-animation.svg" />
  </div>



`htmlelement-animation` is a fork of `animate.css`

`animate.css` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.


## Installation

Install via npm:

```bash
$ npm install htmlelement-animation --save
```

or yarn:

```bash
$ yarn add htmlelement-animation
```


## Usage

To use htmlelement-animation in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```html
<head>
  <link rel="stylesheet" href="node_modules/htmlelement-animation/dist/htmlelement-animation.min.css" />
  <script src="node_modules/htmlelement-animation/dist/htmlelement-animation.min.js"></script>
</head>
```

currently, the complete library (htmlelement-animation.min.css (57 Ko) has 78 effects but if you want only one or two effects, you can use them by loading the file css corresponding to the name of the effect.


### Animations

To animate an element, add the class `animated` to an element. You can include the class `infinite` for an infinite loop. Finally you need to add one of the following classes to the element:

| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |
| `heartBeat`       |

Full example:

```html
<h1 class="animated infinite bounce delay-2s">Example</h1>
```

[Check out latest animations here!](https://daneden.github.io/animate.css/)

It's possible to change the duration of your animations, add a delay or change the number of times that it plays:

```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```

## Usage

You can do a whole bunch of other stuff with htmlelement-animation when you add classes css to elements. A simple example:

```javascript
$('#yourElement').addClass('animated bounceOutLeft');
```

You can also detect when an animation ends:


```javascript
$('#yourElement').animateCss('bounce');
or;
$('#yourElement').animateCss('bounce', function() {
  // Do something after animation
});
```

## Setting _Delay_ and _Speed_

### Delay Class

It's possible to add delays directly on the element's class attribute, just like this:

```html
<div class="animated bounce delay-2s">Example</div>
```

| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |

> _**Note**: The default delays are from 1 second to 5 seconds only. If you need custom delays, add it directly to your own CSS code._

### Slow, Slower, Fast, and Faster Class

It's possible to control the speed of the animation by adding these classes, as a sample below:

```html
<div class="animated bounce faster">Example</div>
```

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |

> _**Note**: The `animated` class has a default speed of `1s`. If you need custom duration, add it directly to your own CSS code._


## Accessibility

htmlelement-animation supports the [`prefers-reduced-motion` media query](https://webkit.org/blog/7551/responsive-design-for-motion/) so that users with motion sensitivity can opt out of animations. On supported platforms (currently only OSX Safari and iOS Safari), users can select "reduce motion" on their operating system preferences and it will turn off CSS transitions for them without any further work required.

## License

`htmlelement-animation` is licensed under the MIT license. 
`htmlelement-animation` is a fork of <a href="https://github.com/daneden/animate.css">animate.css</a>

`animate.css` is also licensed under the MIT license.

## Contributing

You can create pull requests to <a href="https://github.com/daneden/animate.css">animate.css</a>

<a href="https://sylvain59650.github.io/htmlelement-animation/index.html">API & DEMO</a>