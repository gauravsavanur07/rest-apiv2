# rest-apiv2
Anyone seeing the endpoints have been shutdown due to AWS Costs.However its locally hosted on my database.You can download my previous version code api changes to see these changes
API End-points -
endpoints:
 
  POST - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant
  
  GET - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant/{id}
  
  GET - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant
  
  PUT - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant/{id}
  
  DELETE - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant/{id}
  
Tech Stack - Node.js,Python,MongoDB Atlas,AWS Lambda,API Gateway

Github Workflow
Creating a Branch
Now that you are ready to work on the project the first thing you need to do is create a branch and name it after the feature you are working. For example let's say you wanted to create a button you would create a branch by running the command git branch create-button. This will create a copy of the codebase that you can work on without having to worry about messing up the master branch.

After you create a branch you can move in to it with git checkout create-button. You can check what branch you are currently in by running git status

Commiting your Changes
Once you have finnished working on the feature you need to commit your changes locally, to this you need to firts add the file you modified to the staging area using the command git add path/to/file. Once the file is added to the staging area you can now commit your changes using the command git commit path/to/file -m"detailed description of what you changed".

To confirm you have commited all your changes localy run git status.

Push Changes to Github
After you have confimed that you have commited everything you are now ready to push your branch to github, to do this you need to run the command git push origin name-of-branch.

Testing 
Postman 
Mocha - It comes with tons of great features, the website shows a long list but here are the ones I like the most:
simple async support, including promises.
async test timeout support.
before, after, before each, after each hooks (very useful to clean the environment where each test!).

Serverless.yaml
The Serverless Framework – Build applications comprised of microservices that run in response to events, auto-scale for you, and only charge you when they run. This lowers the total cost of maintaining your apps, enabling you to build more logic, faster.

The Framework uses new event-driven compute services, like AWS Lambda, Google Cloud Functions, and more. It's a command-line tool, providing scaffolding, workflow automation and best practices for developing and deploying your serverless architecture. It's also completely extensible via plugins.


NLP Algorithm -Golang Library -allergies mapping excel csv file - webscraping branch 
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4419999/
https://github.com/abadojack/whatlanggo
