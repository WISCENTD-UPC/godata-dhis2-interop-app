export const GODATA_DHIS_OUTBREAK_MODEL = 
[{"godataValue":[[{"conversionType":"Go.Data Outbreak"}],[{"godata":"name","dhis2":"name","props":{"conversion":"true","values":{}}},{"godata":"startDate","dhis2":"created","props":{"conversion":"true","values":{}}},{"godata":"longPeriodsBetweenCaseOnset","dhis2":"12","props":{"conversion":"false","values":{}}},{"godata":"periodOfFollowup","dhis2":"14","props":{"conversion":"false","values":{}}},{"godata":"frequencyOfFollowUp","dhis2":"2","props":{"conversion":"false","values":{}}},{"godata":"frequencyOfFollowUpPerDay","dhis2":"1","props":{"conversion":"false","values":{}}},{"godata":"generateFollowUpsOverwriteExisting","dhis2":"true","props":{"conversion":"false","values":{}}},{"godata":"generateFollowUpsKeepTeamAssignment","dhis2":"true","props":{"conversion":"false","values":{}}},{"godata":"generateFollowUpsTeamAssignmentAlgorithm","dhis2":"LNG_REFERENCE_DATA_CATEGORY_FOLLOWUP_GENERATION_TEAM_ASSIGNMENT_ALGORITHM_ROUND_ROBIN_ALL_TEAMS","props":{"conversion":"false","values":{}}},{"godata":"generateFollowUpsDateOfLastContact","dhis2":"","props":{"conversion":"true","values":{}}},{"godata":"noDaysAmongContacts","dhis2":"5","props":{"conversion":"false","values":{}}},{"godata":"noDaysInChains","dhis2":"1","props":{"conversion":"false","values":{}}},{"godata":"noDaysNotSeen","dhis2":"0","props":{"conversion":"false","values":{}}},{"godata":"noLessContacts","dhis2":"2","props":{"conversion":"false","values":{}}},{"godata":"noDaysNewContacts","dhis2":"","props":{"conversion":"true","values":{}}},{"godata":"caseIdMask","dhis2":"5555555555","props":{"conversion":"false","values":{}}},{"godata":"contactIdMask","dhis2":"44444444444444","props":{"conversion":"false","values":{}}},{"godata":"reportingGeographicalLevelId","dhis2":"","props":{"conversion":"true","values":{}}},{"godata":"isContactLabResultsActive","dhis2":"","props":{"conversion":"true","values":{}}},{"godata":"contactOfContactIdMask","dhis2":"111111111111111","props":{"conversion":"false","values":{}}},{"godata":"isContactsOfContactsActive","dhis2":"true","props":{"conversion":"false","values":{}}},{"godata":"isDateOfOnsetRequired","dhis2":"no","props":{"conversion":"false","values":{}}},{"godata":"applyGeographicRestrictions","dhis2":"true","props":{"conversion":"false","values":{}}},{"godata":"id","dhis2":"id","props":{"conversion":"true","values":{}}},{"godata":"createdAt","dhis2":"created","props":{"conversion":"true","values":{}}},{"godata":"createdBy","dhis2":"createdBy.name","props":{"conversion":"true","values":{}}},{"godata":"updatedAt","dhis2":"lastUpdated","props":{"conversion":"true","values":{}}},{"godata":"updatedBy","dhis2":"lastUpdatedBy.displayName","props":{"conversion":"true","values":{}}},{"godata":"createdOn","dhis2":"created","props":{"conversion":"true","values":{}}},{"godata":"deleted","dhis2":"skipOffline","props":{"conversion":"true","values":{"true":"yes","fasle":"no","false":"no"}}}]]},{},{}]
export const GODATA_DHIS_LOCATION_MODEL = 
[{"godataValue":[[{"conversionType":"Go.Data Location"}],[{"godata":"name","dhis2":"name","props":{"conversion":"true","values":{}}},{"godata":"active","dhis2":"true","props":{"conversion":"false","values":{}}},{"godata":"populationDensity","dhis2":"0","props":{"conversion":"false","values":{}}},{"godata":"parentLocationId","dhis2":"parent.id","props":{"conversion":"true","values":{}}},{"godata":"geographicalLevelId","dhis2":"level","props":{"conversion":"true","values":{"Admin Level 1":"2","Admin Level 0":"1","Admin Level 2":"3","Admin Level 3":"4","Admin Level 4":"5"}}},{"godata":"id","dhis2":"id","props":{"conversion":"true","values":{}}},{"godata":"createdAt","dhis2":"openingDate","props":{"conversion":"true","values":{}}},{"godata":"createdBy","dhis2":"system","props":{"conversion":"false","values":{}}},{"godata":"updatedAt","dhis2":"lastUpdated","props":{"conversion":"true","values":{}}},{"godata":"updatedBy","dhis2":"system","props":{"conversion":"false","values":{}}},{"godata":"createdOn","dhis2":"created","props":{"conversion":"true","values":{}}},{"godata":"deleted","dhis2":"false","props":{"conversion":"false","values":{}}},{"godata":"deletedAt","dhis2":"","props":{"conversion":"false","values":{}}},{"godata":"geoLocation.lat","dhis2":"geometry.type","props":{"conversion":"geo","values":{}}},{"godata":"geoLocation.lng","dhis2":"geometry.type","props":{"conversion":"geo","values":{}}},{"godata":"identifiers.0.code","dhis2":"code","props":{"conversion":"true","values":{}}},{"godata":"identifiers.0.description","dhis2":"displayFormName","props":{"conversion":"true","values":{}}},{"godata":"synonyms.0","dhis2":"displayFormName","props":{"conversion":"true","values":{}}}]]},{},{}]
export const GODATA_DHIS_OUTBREAK_TASK = 
["http://localhost:8080/dhis/api/32/programs","https://godata-r12.who.int/api/outbreaks","?paging=false&fields=*",{"name":"string","description":"string","disease":"string","countries":[{"id":"string"}],"locationIds":["string"],"startDate":"2021-11-26T10:21:59.833Z","endDate":"2021-11-26T10:21:59.833Z","longPeriodsBetweenCaseOnset":0,"periodOfFollowup":0,"frequencyOfFollowUp":1,"frequencyOfFollowUpPerDay":0,"generateFollowUpsOverwriteExisting":false,"generateFollowUpsKeepTeamAssignment":true,"generateFollowUpsTeamAssignmentAlgorithm":"LNG_REFERENCE_DATA_CATEGORY_FOLLOWUP_GENERATION_TEAM_ASSIGNMENT_ALGORITHM_ROUND_ROBIN_ALL_TEAMS","generateFollowUpsDateOfLastContact":false,"intervalOfFollowUp":"string","noDaysAmongContacts":0,"noDaysInChains":0,"noDaysNotSeen":0,"noLessContacts":0,"noDaysNewContacts":1,"fieldsToDisplayNode":["string"],"caseInvestigationTemplate":[],"contactInvestigationTemplate":[],"contactFollowUpTemplate":[],"labResultsTemplate":[],"caseIdMask":"9999999999","contactIdMask":"9999999999","arcGisServers":[{"name":"string","url":"string","type":"LNG_REFERENCE_DATA_OUTBREAK_MAP_SERVER_TYPE_TILE_TILE_ARC_GIS_REST","styleUrl":"string","styleUrlSource":"string"}],"reportingGeographicalLevelId":"string","isContactLabResultsActive":false,"contactOfContactIdMask":"9999999999","isContactsOfContactsActive":false,"isDateOfOnsetRequired":true,"applyGeographicRestrictions":false,"id":"string","createdAt":"2021-11-26T10:21:59.833Z","createdBy":"string","updatedAt":"2021-11-26T10:21:59.833Z","updatedBy":"string","createdOn":"string","deleted":false,"deletedAt":"2021-11-26T10:21:59.833Z"},false,"","Go.Data Outbreak","programs"]
export const GODATA_DHIS_LOCATION_TASK = 
["http://localhost:8080/dhis/api/organisationUnits.json","https://localhost:8000/api/locations/import","?paging=false&fields=*,geography&?order=level:asc",{"name":"string","synonyms":["string"],"identifiers":[{"code":"string","description":"string"}],"active":true,"populationDensity":0,"parentLocationId":"string","geoLocation":{"lat":0,"lng":0},"geographicalLevelId":"string","id":"string","createdAt":"2021-12-07T05:31:50.310Z","createdBy":"string","updatedAt":"2021-12-07T05:31:50.310Z","updatedBy":"string","createdOn":"string","deleted":false,"deletedAt":"2021-12-07T05:31:50.310Z"},false,"","Go.Data Location","organisationUnits"]