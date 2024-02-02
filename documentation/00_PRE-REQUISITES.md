# 🔥 Pre-Requisites & Initial Setup

The purpose of this file is to document the pre-requites and initial setup before setting up the ReactJS Application Project.

Please make sure you have all the following installed on your own machine.

> <b>Note</b> : <span style="color: #FF9A23">This document is subject to be refactored/updated based on the technical documentation of the specific tools/packages.</span>

## ✅ NodeJS Installation

### 👉🏻 For Windows OS Users

1. Visit the [NodeJS Website](https://nodejs.org/en)
2. Download the `LTS (Long Term Support) Version which is Recommended For Most Users` as it is more stable.
![NodeJS Website](/documentation/images/NodeJS.png)
3. Run the Windows OS Installer (`.msi`) file and follow the On-Screen Instructions.

### 👉🏻 For MacOS Users

1. Visit the [NodeJS Website](https://nodejs.org/en)
2. Download the `LTS (Long Term Support) Version which is Recommended For Most Users` as it is more stable.
![NodeJS Website](/documentation/images/NodeJS.png)
3. Run the MacOS Installer (`.pkg`) file and follow the On-Screen Instructions.

### 👉🏻 For Linux OS Users

The steps to install NodeJS on Linux OS may vary depending on your distribution. Below are the instructions for 2 common package managers `apt` (Debian/Ubuntu) and `yum` (CentOS/Fedora). You can adapt these instructions to your specific distribution's package manager.

#### <b>Using `apt` (Debian/Ubuntu)</b>

1. Open your terminal
2. Update the package list to ensure you have the latest information

```sh
sudo apt update
```

3. Install NodeJS and NPM

```sh
sudo apt install nodejs
sudo apt install npm
```

#### <b>Using `yum` (CentOS/Fedora)</b>

1. Open your terminal
2. Install NodeJS and NPM

```sh
sudo yum install nodejs
sudo yum install npm
```

## ✅ NodeJS Version Confirmation

After successful installation, verify NodeJS and NPM by confirming their versions in the terminal.

```sh
node -v
npm -v
```

## ✅ Yarn Installation

Yarn is a popular alternative package manager to NPM for managing JavaScript packages. It is more useful and convenient to maintain JavaScript packages within your project.

### 👉🏻 For Windows OS Users

1. Visit the [Yarn Website](https://classic.yarnpkg.com/en/docs/install#windows-stable)
2. Do the following as follows:
![Yarn Website](/documentation/images/Yarn-Website.png)
3. Download the Yarn Installer for Windows OS.
![Yarn Windows Installer](/documentation/images/Yarn-Windows-Installer.png)
4. Run the Installer and follow the on-screen instructions.

### 👉🏻 For MacOS Users

`Homebrew` is used to install Yarn package manager on MacOS.

1. Open your terminal.
2. Check whether `Homenrew` is installed in your local machine with the help of the following command. The below command will check the version of `Homebrew` in your local machine.

```sh
brew -v
```

3. [<b>Optional</b>] If `Homenrew` is not installed in your local machine, install it by following the instructions on the [Homebrew Website](https://brew.sh/)

4. After successfully installing `Homenrew`, run the following command to install `Yarn`.

```sh
brew install yarn
```

### 👉🏻 For  Linux OS Users

The steps to install `Yarn` can vary depending on your distribution. Below are instructions for 2 common package managers `apt` (Debian/Ubuntu) and `yum` (CentOS/Fedora). You can adapt these instructions to your specific distribution's package manager.

#### <b>Using `apt` (Debian/Ubuntu)</b>

1. Open your terminal.
2. Add the `Yarn` repository to your system

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

3. Update the package list

```sh
sudo apt update
```

4. Install `Yarn`
```sh
sudo apt install yarn
```

#### <b>Using `yum` (CentOS/Fedora)</b>

1. Open your terminal
2. Add the `Yarn` repository to your system

```sh
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```

3. Install `Yarn`

```sh
sudo yum install yarn
```

## ✅ Yarn Version Confirmation

After successful installation, verify Yarn by confirming the versions in the terminal.

```sh
yarn --version
```