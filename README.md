Serverless online portfolio.   Written primarily in React.js this project provides the ability to create and maintain your own online portfolio.   When hosted in 
AWS S3 as a static website and leveraging GitHub + CodeBuild + Lambda for build and deploy this will be a completely serverless application.  




## Technologies used

apt-get
Git
GitHub
SSH
HTML
CSS
Font Awesome
Google Fonts

## Build Flow:

Currently configured using AWS CodeBuild and Lambda for build and deploy.  

# On Check In:

  CodeBuild (build with webpack, test with jest/enzyme) --->  S3 Staging Bucket --->  Lambda Deploy  ---> SNS to developer  ---> Deploy to S3 Deploy Bucket




## Commands:

Command details can be found in package.json

Build:   npm run webpack  or npm run webpack-watch to continuously build on dev machine

Test:   npm test or npm run test-watch  -  Tests are written leveraging Airbnb Enzyme + Jest


## Contents:

deploy.py  -  Lambda deploy function.   Will take a .zip file from a staging S3 bucket, unpack and deploy the appropriate code to a target deploy S3 bucket. 

package.json  -  webpack package file

buildspec.yml  -  AWS CodeBuild specification


## Notes
  When upgrading to babel-core 7.0.0 had to use npm install --save-dev "babel-core@^7.0.0-bridge.0" in accordance to this thread:  https://github.com/babel/babel/issues/8482
