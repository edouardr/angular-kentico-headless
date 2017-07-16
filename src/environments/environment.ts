// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  kenticoCloud: {
    endpoint: 'https://deliver.kenticocloud.com/',
    projectid: '06f8ee7-e19a-46e7-acd8-d8e8f2abe5d6'
  }
};
