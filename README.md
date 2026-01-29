# Microfrontend demo

1. clone the repository
1. Run `ddev start` to bring up a local development environment
1. Run `ddev composer install`
1. Run `ddev sake dev/build flush=1`
1. run `ddev launch` and verify the site is working - including logging in with the credentials in `.env`
1. change into the `piral-app` directory and run `nvm use && yarn && yarn build`
1. Verify that you can visit the 'Micro Admin' section of the CMS and get a basic Header displayed
1. change to the `piral-module-one` directory and run `yarn && yarn build`
1. Verify that on the Micro Admin section you now have some page content
1. change to the `piral-module-two` directory and run `yarn && yarn build`
1. Verify that on the Micro Admin the page content has changed to have new green text
1. change to the `piral-module-form` directory and run `yarn && yarn build`
1. Verify that the Micro Admin section has a "Form Module" link with a form in it
1. change to the `piral-module-form-textarea` directory and run `yarn && yarn build`
1. Verify that on the form now has a "Description" textarea field

optionally edit the `_config/config.yaml` files in the various `piral-module-*` directories to show the JS loading being controlled via yaml.
Presumably we can simplify that config somewhat so you just need to add the name (key) and link (as `module:client/dist/thing.js` formatted value) by default.

`piral-app` demonstrates setting up the general container - basically the base layer we'd have in `silverstripe/admin`

`piral-module-one` and `piral-module-two` demonstrate adding content via a pilet and using the piral built-in "extension" concept. We might use that as-is or we might want to use something closer to our PHP extension API.

`piral-module-form` and its sub-pilets demonstrate providing custom form fields. We're using hardcoded "extension" names here but these could just as easily be dynamic names based on a form schema, similar to how the existing react injector names are dynamically discovered (but hopefully a lot more straight forward).
