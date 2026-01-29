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

optionally edit the `config.yaml` files in the various `piral-module-*` directories to show the JS loading being controlled via yaml.
