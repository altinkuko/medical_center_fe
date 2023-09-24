# MedicalCenterFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --skip-tests` to generate a new component.
Run `ng generate service service-name --skip-tests` to generate a new service.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Add Bootstrap


Install ngx-bootstrap and bootstrap:

npm install ngx-bootstrap bootstrap --save

This line installs Bootstrap 3 nowadays, but can install Bootstrap 4 in the future. Keep in mind ngx-bootstrap supports both versions.

    Open src/app/app.module.ts and add:

    import { AlertModule } from 'ngx-bootstrap';
    ...
    @NgModule({
    ...
    imports: [AlertModule.forRoot(), ... ],
    ... 
    })

    Open angular-cli.json (for angular6 and later file name changed to angular.json ) and insert a new entry into the styles array:

    "styles": [
    "styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],