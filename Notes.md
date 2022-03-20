# Notes

## When the user runs a Task (Default Locations Task)

```json
(taskObjectId = [
    "http://localhost:8080/api/organisationUnits.json",
    "http://localhost:8000/api/locations/import",
    "?paging=false&fields=*,geography&?order=level:asc",
    {
        "name": "string",
        "synonyms": ["string"],
        "identifiers": [
            {
                "code": "string",
                "description": "string"
            }
        ],
        "active": true,
        "populationDensity": 0,
        "parentLocationId": "string",
        "geoLocation": {
            "lat": 0,
            "lng": 0
        },
        "geographicalLevelId": "string",
        "id": "string",
        "createdAt": "2021-12-07T05:31:50.310Z",
        "createdBy": "string",
        "updatedAt": "2021-12-07T05:31:50.310Z",
        "updatedBy": "string",
        "createdOn": "string",
        "deleted": false,
        "deletedAt": "2021-12-07T05:31:50.310Z"
    },
    false,
    "r7C9X0r5TkF",
    "Go.Data Location",
    "organisationUnits"
])
```

0 - Sender API http://localhost:8080/api/organisationUnits.json
1 - Receiver API http://localhost:8000/api/locations/import
2 - Sender API filters ?paging=false&fields=\*,geography&?order=level:asc
3 - Sender API payload model [object Object]
4 - is DHIS2 receiver false
5 - mappings object Id r7C9X0r5TkF
6 - task type Go.Data Location
7 - jsoncollectionname organisationUnits

## Check cases at DHIS instance

```
http://localhost:8080/api/32/trackedEntityInstances.json?ouMode=ALL
```
