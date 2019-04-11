# rest-apiv2
API End-points - 
endpoints:
 
  POST - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant
  
  GET - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant/{id}
  
  GET - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant
  
  PUT - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant/{id}
  
  DELETE - https://7osakzjq62.execute-api.us-east-1.amazonaws.com/dev/restaurant/{id}

Github Workflow
Creating a Branch
Now that you are ready to work on the project the first thing you need to do is create a branch and name it after the feature you are working. For example let's say you wanted to create a button you would create a branch by running the command git branch create-button. This will create a copy of the codebase that you can work on without having to worry about messing up the master branch.

After you create a branch you can move in to it with git checkout create-button. You can check what branch you are currently in by running git status

Commiting your Changes
Once you have finnished working on the feature you need to commit your changes locally, to this you need to firts add the file you modified to the staging area using the command git add path/to/file. Once the file is added to the staging area you can now commit your changes using the command git commit path/to/file -m"detailed description of what you changed".

To confirm you have commited all your changes localy run git status.

Push Changes to Github
After you have confimed that you have commited everything you are now ready to push your branch to github, to do this you need to run the command git push origin name-of-branch.
