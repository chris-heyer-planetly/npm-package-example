# UI Library Example


### Getting Started
```
$ yarn

$ yarn start
```
This will start storybook which is also used as development environment for the stories.

### Release Process
This repository uses [`auto`](https://github.com/intuit/auto) to automatically generate releases and publish them to **npm**. Also storybook is build and published with github pages.

In order to create a release, simply tag your PR with https://github.com/chris-heyer-planetly/npm-package-example/labels/patch, https://github.com/chris-heyer-planetly/npm-package-example/labels/minor or https://github.com/chris-heyer-planetly/npm-package-example/labels/major label. Once the PR is merged, `auto` will generate the release.

### Further Ideas
- **Private Package**: Make the npm package private
- **Auto Updates**: Auto update dependency version in consumers with dependabot


### Links
- [UI Library Storybook](https://chris-heyer-planetly.github.io/npm-package-example/)
- [UI Library Consumer Github](https://github.com/chris-heyer-planetly/npm-package-consumer-example/)
- [UI Library NPM Package](https://www.npmjs.com/package/@cheyer/npm-package-example)


### References
- [How to publish Storybook Docs with Github Pages](https://dev.to/kouts/deploy-storybook-to-github-pages-3bij#:~:text=Enable%20GitHub%20Pages,docs%20folder%20in%20our%20repository.)
- [How to create UI library NPM package](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/)
