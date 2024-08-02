# Backend

The backend is where the business logic lives. Free of the glitter and glue of the User Interface frontend, this is where data gets transformed.

in our cases, the backend will coordinate the image-to-text process.

**Note** You will not be writing an AI to convert images to text! You will _use_ a third-party service - AWS Textract. The backend merely has to wire together the various third party services.

## Code provided

Have a read through the code. It's probably unfamiliar. That's ok. Deep breath and all that.

Provided is a "boilerplate" lambda serverless code base – it has one "hello-world" endpoint that returns "Hello World" as text. It acts as a template for a lambda function; that's how they all look and wire-up to AWS.

Feel free to use this code to develop your lambda (recommended).

You are free to create the lambda some other way. One choice is to create the lambda using Python/boto-3 directly.

What you need to think about is what function your lambda must perform.

## Using the serverless offline plugin

The serverless offline plugin for Node.js allows you to emulate AWS Lambda and API Gateway on a local machine.

By using the serverless offline plugin, you can test your serverless applications without deploying them every time you make a change. This makes for a faster and better developer experience.

The plugin starts an HTTP server locally to handle request lifecycles and invoke handlers. Typically, this is run locally on a developer’s machine or in a shared development environment.

### Why use the serverless offline plugin?

By having these applications running locally on a developer’s machine or in a development environment, users can quickly view logs and debug their code locally rather than in the cloud, where they’re usually running production workloads. In addition, by not having to continuously deploy changes online to stay current, serverless offline allows development teams to operate at their own pace. This means that developers can freely make changes to their code and run tests locally without worrying about impacting the rest of their team.

# Prerequisites

NPM should be installed.
Open up a terminal and type `npm install -g serverless` to install Serverless.

`npm install -g serverless`

If you get permissions errors, you may need to use `sudo npm install -g serverless`

## Free AWS Account Setup

You will need to set up a free-tier AWS profile.

Follow the steps listed here to set it up through the aws-cli: https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

Install the packages using `npm install`

`npm install`

# Run lambda locally

Use the command serverless offline to run your lambda.

`serverless offline`

sls offline can be used for short as well

`sls offline`

This allows you to test-run your code with the lambda function running on your laptop, instead of in the AWS Cloud. That's convenient for iterating quickly.

**NOTE - Possible HTTPS error locally**

You may not be able to connect locally with localhost of HTTPS - try using http://127.0.0.1:3000/dev/hello-world

## Deploy your function to AWS Lambda

To demo the code on a browser, you're going to need your lambda function(s) deploying to AWS in the Cloud. That's because the ones running on your local computer are _not accessible_ from the public internet. That would be one huge security hole!

Here's how to deploy either all your functions - or just a single function - to AWS.

### Deploy all functions in your project

Run `sls deploy` to deploy all functions in your script.

Passing the environment as a parameter is usually preferrable to keep track of the environment you're deploying to. The default environment can also be called out in the serverless.yml file as in this one.

`sls deploy --stage dev`

> Make a note of the endpoint(s) provided in the console when your deployment is successful as these are the endpoints you will be calling from your frontend.

### Deploy a single function in your project

Run `sls deploy --function functionName` to only deploy a single function.

`sls deploy --function functionName`

> Make a note of the endpoint provided in the console when your deployment is successful as this is the endpoint you will be calling from your frontend.

## About AWS lambda

AWS Lambda is a service that lets you run your code without provisioning or managing servers. It's often referred to as a "serverless" compute service. It's not really "without any servers", it's just that some nice people at Amazon manage the servers for you.

You should recall our "Pizza as a Service" model from the other day.

Here's how Lambda it (more or less) works:

1. You write a function in one of the supported languages (like Python, Node.js, Java, Go, etc.). The example provided uses vanilla JavaScript.
2. You upload this function to AWS Lambda.
3. You define what _events_ should trigger your function. This could be anything from an HTTP request via API Gateway, changes to data in an S3 bucket, a new message in a queue, or even scheduled events like a cron job.
4. When the specified event occurs, AWS Lambda automatically runs your function. It takes care of all the necessary infrastructure, scaling up or down as needed based on the load.

So, with AWS Lambda you can focus purely on writing and deploying your code without worrying about the underlying servers or infrastructure.

### Serverless functions are a general principle

Note that all major Cloud providers offer a similar product:

- Azure Functions
- Google Cloud Functions

Different syntax, but they do the same thing in broadly the same way.

## Technical Assistance

Here are some useful relevant links for the backend work

### SLS Zone

https://sls.zone/

### Textract

https://www.honeybadger.io/blog/amazon-textract-ocr-lambda/

- https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-textract/
- https://docs.aws.amazon.com/textract/latest/dg/service_code_examples.html
