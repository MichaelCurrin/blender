# Food Blender
> Choose fruit and vegetables and blend them into a colorful mix

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/food-blender-site?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/food-blender-site/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/food-blender-site/">
        <img src="/sample-1.jpg" alt="Sample screenshot" title="Sample screenshot" width="400" />
    </a>
</div>

<br>

<div align="center">

[![Play online](https://img.shields.io/badge/Play_online_🎮-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/food-blender-site/)

</div>


## About

A simple online game/toy. 

Made with Jekyll and bit of CSS and vanilla JS.


## Features

- Simple, fun web-based toy which I made for a friend. It is not quiet a game as their no way to win.
- SVG images for splats and critters.
- JavaScript for interactivity
- CSS to blend the colors (results vary based on browser).
- Static site built on Jekyll and hosted on Github Pages.


## Related projects

If you like this project please checkout this AntiStress mobile app which I found much later but is similar - explore and play with objects on the screen and some interact.

- https://www.jindoblu.com/antistress-relaxation-toys/


## Setup and run locally

1. Install Ruby - see [instructions](https://gist.github.com/MichaelCurrin/fb758aea4d35e03b9ed093afddf4e7ec)
1. Install [Jekyll](https://jekyllrb.com/) globally.
1. Clone the repo.
    ```bash
    $ git clone github.com:MichaelCurrin/food-blender-site.git
    $ cd food-blender-site
    ```
1. Start the Jekyll dev server (this has live-reload enabled).
    ```bash
    $ make serve
    ```
1. Open in the browser:
    - http://127.0.0.1:4000/food-blender-site/


## Deploy
> Remote setup on GitHub Pages

1. Fork the project.
2. Go to the repo's settings.
3. Setup the Github Pages section using `master` branch.
4. Click on the URL which pages under GitHub Pages section.


## Development

Place an SVG in the [assets/img/critters](/assets/img/critters/) directory and the image will become part of the random critter choice when clicking the _Protein_ button.


## Credits

SVG images are sourced from [svgsilh.com](https://svgsilh.com) and used freely under Creative Commons license.

- Splats
    - https://svgsilh.com/image/42890.html
    - https://svgsilh.com/image/297562.html
- Bugs
    - https://svgsilh.com/image/31674.html
    - https://svgsilh.com/image/34372.html
    - https://svgsilh.com/image/148773.html
    - https://svgsilh.com/image/160380.html
    - https://svgsilh.com/image/151393.html
    - https://svgsilh.com/image/954411.html
    - https://svgsilh.com/image/2029633.html


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).

Please link back to this repo if you use part of the content or idea here and you must include a copy of this license if you use a significant portion of code.
