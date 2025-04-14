// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // backendImmoReport: 'https://app.itwiththebest.com:1102',
  // backend: 'https://app.itwiththebest.com:1102', // Put your backend here
  // assistantApp: 'https://admin.propero.io',
  backend: 'http://localhost:9000', // Put your backend here
  assistantApp: 'http://localhost:4500',
  backendImmoReport: 'http://localhost:9000', // Put your backend here
  //  backendImmoReport: 'http://localhost:3100', // Put your backend here

  dateFormat: 'dd-MM-yyyy',

  fakeLogin: false,
  debug: true,
  info: true,
  error: true,
  log: true,

  company: {
    name: "SC LogicLand SRL", //{{PARAM_COMPANY_NAME}}
    j: "",                    //{{PARAM_COMPANY_J}}
    cui: "",
    management: "s",
    registerLocation: "s2",
    website: "propero.io",
    address: {
      no: "",
      street: "",
      building: "",
      floor: "",
      apartament: "",
      city: "",
      county: "",
      country: ""
    },
    contactInfo: {
      person: "",
      telephone: "",
      email: "",
      contactTelephone: "+40 743 366 261",
      contactEmail: "contact@propero.io",
      privacyEmail: "privacy@propero.io",
      salesEmail: "sales@propero.io",
      dpoEmail: "dpo@propero.io",
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.




// export const environment = {
//   production: true,
//   backendImmoReport: 'https://app.itwiththebest.com:1102',
//   backend: 'https://app.itwiththebest.com:1102', // Put your backend here
//   assistantApp: 'https://propero.io',


//   dateFormat: 'dd-MM-yyyy',

//   fakeLogin: false,
//   debug: true,
//   info: true,
//   error: true,
//   log: true,
// };
