# 🔥 Initial Refactorization of Frontend Application (ReactJS Version)

## Changes in `frontend/public/index.html`

1. Change the `content` of `<meta>` Tag HTML Element

```html
<meta
      name="description"
      content="Project created using ReactJS, TypeScript & Tailwind CSS"
    />
```

2. Change the `title` Tag HTML Element

```html
<title>Project</title>
```

## Visit Favicon Icon Manipulation Website

[Favicon Icon Generator](https://favicon.io/)

![Favicon Icon Generator Website](/documentation/images/Favicon-Icon-Generator.png)

`😎 → ICO` has been used in this project.

From the `Categories` Dropdown List, select Object to generate the Favicon Icon Image.

![Emoji To ICO Selection](/documentation/images/Emoji-ICO-Selection.png)

Scrolling down and finding out the relevant icon that matches with the context of the application is very important.

**Sample**

![Icon Selection](/documentation/images/Icon-Selection.png)

Click `Download` to download the Icon

**Sample**

![Icon Selection](/documentation/images/Download-Icon.png)

After the download has been completed, extract the files from the ZIP File.

**Sample**

![File Details](/documentation/images/File-Details.png)

Rename the following files : 

| Old Name | New Name | 
| -------- | -------- | 
| android-chrome192x192.png | logo192.png | 
| android-chrome512x512.png | logo512.png |

Copy <b>ALL</b> Image Files except `about.txt` and `site.webmanifest` to `frontend/public/` Directory.

## Refactorization of Files & Folders

Update the file name of the `href` Attribute to `apple-touch-icon.png` like the following:

```html
<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
```

Open `manifest.json` File in `frontend/public/` Directory

Update the `manifest.json` like below : 

```json
{
  "short_name": "PRJ",
  "name": "Project",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "48x48",
      "type": "image/x-icon"
    },
    {
      "src": "favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## Update `logo.svg`

1. Visit [PNG To SVG Converter](https://www.pngtosvg.com/) Website.

2. Scroll down and Click `Choose File`

![Convert PNG to SVG](/documentation/images/PNG-SVG-Converter.png)

3. Select `logo512.png`

**Sample**

![Select PNG File](/documentation/images/File-Selection.png)

4. Click on `Generate` by scrolling down

**Sample**

![Generate SVG](/documentation/images/Generate-SVG.png)

5. Download Generated SVG File

**Sample**

![Download Generated SVG](/documentation/images/Download-Generated-SVG.png)

6. Rename the downloaded file to `logo.svg`

7. Move the file to `frontend/src/` Directory

## Code Refactorization 🧑‍💻

Refactor the code of `App.tsx` file like the following : 

✅&emsp;Delete the code block inside `<header>` Tag

✅&emsp;Remove the Unnecessary Imports (Logo Image File Import)

✅&emsp;Rename the `<div></div>` to `<main></main>` HTML Semantic Tag Element

✅&emsp;Change the normal function to JavaScript `Arrow` Function

✅&emsp;Use Named Export

![App.tsx](/documentation/images/code.png)

✅&emsp;Refactor the code of `App.test.tsx` file by using `Named Export` as shown below : 

![App.test.tsx](/documentation/images/code-app-test.png)

✅&emsp;Refactor the code of `index.tsx` file by using `Named Export` as shown below : 

![index.tsx](/documentation/images/code-index.png)