<h1 align="center"> GetPlaced </h1> <br>
<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="GitPoint" title="GitPoint" src="https://i.imgur.com/ic7EmsU.png" width="450">
  </a>
</p>

<p align="center">
  GitHub in your pocket. Built with React Native + Expo.
</p>

<p align="center">
  <a href="">
    <img alt="Download on the App Store" title="App Store" src="http://i.imgur.com/0n2zqHD.png" width="140">
  </a>

  <a href="">
    <img alt="Get it on Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents


- [Introduction](#demo)
- [Features](#features)
- [Technologies Used](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots-)
- [Videos](#videos-)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The Job Finder App is a React Native application built using Expo, targeting Android, iOS, and Web platforms. It allows users to search and view job listings, bookmark their favorite jobs, and view cached content even without an internet connection.

**Available for both iOS and Android.**

<p align="center">
  <img src = "https://i.imgur.com/3LPgOVt.jpeg" width=350>
</p>

## Features

A few of the things you can do with GetPlaced:

* Paginated Job Listings: The app fetches job data from the provided API in a paginated approach, allowing users to scroll through multiple pages of job listings.
* Job Details: Clicking on a job card navigates the user to a detailed view of the job, displaying relevant information.
* Bookmarking: Users can bookmark their favorite jobs, and these bookmarked jobs are displayed in a separate "Bookmarks" tab.
* Offline Support: The app caches job and bookmark data, allowing users to view the content even when they are offline.
* Responsive Design: The app is built using Expo, ensuring a consistent and responsive user experience across Android, iOS, and Web platforms.
* Error Handling: The app handles various application states, such as loading, error, and empty data, and displays appropriate feedback to the user.


## Technologies Used

* React Native: A JavaScript library for building native mobile applications.
* Expo: A toolchain built around React Native to develop, build, and deploy iOS, Android, and web apps from the same codebase.
* React Navigation: A library for handling navigation in React Native applications.
* Async Storage: A built-in API in React Native for storing data locally on the user's device.
* NetInfo: A React Native API that provides information about the user's network connection status.
* Axios: A popular HTTP client for making API requests
* Styled Components: A library for writing CSS-in-JS, allowing for component-level styling.



## Installation
### To run the Job Finder App on your local machine, follow these steps:

```
# Clone the repository:
git clone https://github.com/your-username/job-finder-app.git

# Navigate to the project directory:
cd tabs-app

# Install the dependencies:
npm install

# Start the Expo development server:
npx expo start

# Follow the instructions in the terminal to run the app on your desired platform (Android, iOS, or Web).
```

## Usage
* When you open the app, you'll see the "Jobs" tab, which displays a list of job listings fetched from the API.
* Tap on a job card to view the job details.
* To bookmark a job, tap the bookmark icon on the job card or the job details screen.
* Bookmark jobs are displayed in the "Bookmarks" tab.
* If you're offline, the app will display the cached job and bookmark data.

## Screeshots

<p align="center" direction="flex">
  <img src = "https://i.imgur.com/3LPgOVt.jpeg" width=350>
  <img src = "https://i.imgur.com/bBOHV8D.jpeg" width=350>
  <img src = "https://i.imgur.com/qFyHA8J.jpeg" width=350>
</p>


# Videos

### Home page View---
https://github.com/Akshat171/Jop-Portal-App/assets/81281246/3e31a853-add2-417d-bc37-1b90efd7f0e0



### About page View---
https://github.com/Akshat171/Jop-Portal-App/assets/81281246/23ef82f2-0c53-4c7f-92fc-60305d1617c0




### Bookmark page View---
https://github.com/Akshat171/Jop-Portal-App/assets/81281246/686c0b49-e668-48d9-b2bf-bda8c570597e



### LocalStorage while netoff--- 
https://github.com/Akshat171/Jop-Portal-App/assets/81281246/7e4d9d23-0ff3-48d3-b95c-b43464cc6381




## Feedback

Feel free to send feedback or [file an issue](https://github.com/Akshat171/Jop-Portal-App/issues/new). Feature requests are always welcome. If you wish to contribute, please take a quick look at the [guidelines](./CONTRIBUTING.md)!

## Contributing

### Contributions to the Job Finder App are welcome! If you'd like to contribute, please follow these steps:

* Fork the repository.
* Create a new branch for your feature or bug fix.
* Make your changes and test them thoroughly.
* Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.
