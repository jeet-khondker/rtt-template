# NodeJS Upgrade 🔥 Using Command Line Interface (CLI)

Upgrade of NodeJS is required when installation of new library package has a dependency on the latest NodeJS version. Instead of uninstalling NodeJS from the system and re-installing it, the latest NodeJS version can be downloaded and installed into the system using the Command Line Interface (CLI).

The following steps show how to use them : 

## `n`

`n` is a NodeJS Version Management Tool which needs to be installed globally either with `npm` or `yarn` package manager.

### Installation of `n` using NodeJS Pakage Manager `npm`

```sh
npm install global n
```

#### Installation of `n` using Yarn Pakage Manager

```sh
yarn global add n
```

### Upgrade to the latest stable version of NodeJS Using `n`

```sh
sudo n stable
```

### Enter the MacOS Password : 

```sh
Password : ***********
```

## ✅ NodeJS Version Confirmation

After successful installation, verify the version of NodeJS by confirming the versions in the terminal.

```sh
node -v
```

 > NodeJS now has been upgraded to its latest stable version.