# LERERO FRONTEND

### Setup
Clone repo:

```
git@github.com:Worldskills-Romania/Lerero-Frontend.git
```

### Branch Name
```
Master --> only for live production. Don't commit and push on this branch. Branch update only from pull-request.
Develop --> only for live staging. Don't commit and push on this branch. Branch update only from pull-request.
Eko --> This example branch development for each developer for all jobs
Fix-*** --> Branch for bug fixing, the name adapts to the type of error and bug. Example: Fix-login
```

### Deploy to Staging
1. Add staging repo
    ```
   git remote add staging_repo ssh://staginglererowor@staging.lereroworld.com/home/staginglererowor/public_html/lerero_learning
   ```
2. Pull from staging_repo
   ```git pull staging_repo```
3. Pull from development repo in github (lerero_frontend) to get the latest source code
   ```git pull your_lerero_repo```
4. Build lerero_frontend project
   ```npm run build```
5. Export lerero_frontend project (this is still static & will be update later)
   ```npm run export```
6. Copy everything from ```out``` directory of lerero_frontend to staging local repo directory
7. Push from staging local repo to staging repo
   ```git push staging_repo```
8. See the result on ```https://staging.lereroworld.com/lerero_learning```