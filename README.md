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


### Deploy to Staging (SSR)
1. Add staging repo

    ```
   git remote add staging_repo ssh://staginglererowor@staging.lereroworld.com/home/staginglererowor/public_html
   ```

2. Pull latest source code from lerero_frontend repo

```https://staging.lereroworld.com/lerero_learning```

3. Push to staging repo

``` git push staging_repo ```

4. Execute npm run start at staging server

5. See result in
```https://staging.lereroworld.com/lerero_learning```

