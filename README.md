# LeaseDeployDashboard

## [Demo](https://czuniga10.github.io/LeaseDeployDashboard/)

## Updating Data:

* Update/replace values within the objects in the files located at ```dashboard/src/data``` with the data that matches within Service Now's Active CCSX tickets for said team. 

ex.

```
{
    "cart":    
        [
            {
                "id": "CCSSX0003678",
                "desc": "CCM Welcome Letter Release 1",
                "stories": ["CART-26"],
                "status": "Production Deployment",
                "approval": "Not Yet Requested"
            },
            {
                "id": "CCSSX0003931",
                "desc": "LeaseTermsService (Remove UncaughtExceptionHandler Logging)",
                "stories": ["CART-657"],
                "status": "Ready for RC",
                "approval": "Not Yet Requested"
            },
            ......
```

* Once the json data blobs are up to date, in the command line on path ```\LeaseDepoyDashboard\dashboard``` run ```npm run build``` and after it builds, run ```npm run deploy```. 
* Once the command line responds with Published, go to [https://czuniga10.github.io/LeaseDeployDashboard/](https://czuniga10.github.io/LeaseDeployDashboard/)