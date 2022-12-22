# WhatsApp-button component (*Custom App*)
This WhatsApp-button component receives aphone number and a messagge to establish direct comunication with the user.

![WhatsApp-button](/assets/img/WhatsApp-button.JPG)
![Going to WhatsApp](/assets/img/WhatsApp-button2.JPG)

## Configuration 

This app was built from the [vtex-apps/react-app-template](https://github.com/vtex-apps/react-app-template) and the initial configuration steps are as follows:

### Step #1 - `Manifest.json` edition:
After opening the application in your code editor, the first step is to edit the following information in the Manifest.json file which is a fundamental configuration file for tha app.

- `vendor`: Name of the VTEX account that develops, maintains, and distributes the app.
- `name`: App name. You choose the name, but be careful to avoid special characters (with the exception - hyphens).
- `version`: Current version of the App. VTEX IO uses Semantic Versioning 2.0.0.
- `title`: Distribution name of the app. This name will be displayed on the Apps section in the admin and, also on the VTEX App Store.
- `description`: Brief description of the app functionality of the app.
- `builders`: List of Builders that facilitate the developmentof the app, abstracting service configurations.
- `dependencies`: List of apps that the app you are developing depends on for proper functioning. At the beginning of the process, it is very important to incorporate the new app's basic information in the `manifest.json` file in order to make it your own instead of it staying another example version provided by VTEX. To do that:
 1. Replace the account in the vendor field with the VTEX account you are using for development.
 2. Replace the value in the name field with the name you want. Remember that the name defined in this field will be the name of your new app.
 3. Replace the values in the title and description fields with something that matches the app you are developing.
 4. Add the store@0.x builder to the builder list to allow the creation of new blocks, as follows:
```json
{
  "builders": {
    + "store": "0.x"
  }
}
```
 5. If you want to import any React components previously developed for your new app, update the dependencies list with the name of the app that runs the desired component, for example:
```json
{
  "dependencies": {
    + "vtex.styleguide": "9.x"
  }
}
```
 This will allow you to later import the app component added in `dependencies` into your code via the `import {componentName} from 'vtex.styleguide'` structure, for example.


### Step #2 - `node-modules` folder installation:
Being located in the `react folder` of your app, run the yarn (recommended) command in your terminal to install the modules you need to use this template.


### Step #2 - application usage:
To use this custom app in your `store`, you must declare it as a `dependencie` in the manifest.json file of the store as follows, `"vendorName.componentName" : "version"`, for example:
```json
{
  "dependencies": {
    + "itgloberspartnercl.help-button": "0.x"
  }
}
```
Then just declare the custom component by typing the interface property name in the desired place of your store and it will be rendered.

---- 

`Note`: If your custom app doesn't render to the store even though the terminal doesn't throw any errors, unlink the store and `link it again` making sure the custom app is linked first.


## Contributors ✨
***Angie Vanessa Moreno Palacios***
