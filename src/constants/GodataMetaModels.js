export const GODATA_OUTBREAK_MODEL = 
{"Outbreak": {
    "name": "string",
    "description": "string",
    "disease": "string",
    "countries": [
      {
        "id": "string"
      }
    ],
    "locationIds": [
      "string"
    ],
    "startDate": "2021-11-16T12:36:30.265Z",
    "endDate": "2021-11-16T12:36:30.265Z",
    "longPeriodsBetweenCaseOnset": 0,
    "periodOfFollowup": 0,
    "frequencyOfFollowUp": 1,
    "frequencyOfFollowUpPerDay": 0,
    "generateFollowUpsOverwriteExisting": false,
    "generateFollowUpsKeepTeamAssignment": true,
    "generateFollowUpsTeamAssignmentAlgorithm": "LNG_REFERENCE_DATA_CATEGORY_FOLLOWUP_GENERATION_TEAM_ASSIGNMENT_ALGORITHM_ROUND_ROBIN_ALL_TEAMS",
    "generateFollowUpsDateOfLastContact": false,
    "intervalOfFollowUp": "string",
    "noDaysAmongContacts": 0,
    "noDaysInChains": 0,
    "noDaysNotSeen": 0,
    "noLessContacts": 0,
    "noDaysNewContacts": 1,
    "fieldsToDisplayNode": [
      "string"
    ],
    "caseInvestigationTemplate": [],
    "contactInvestigationTemplate": [],
    "contactFollowUpTemplate": [],
    "labResultsTemplate": [],
    "caseIdMask": "9999999999",
    "contactIdMask": "9999999999",
    "arcGisServers": [
      {
        "name": "string",
        "url": "string",
        "type": "LNG_REFERENCE_DATA_OUTBREAK_MAP_SERVER_TYPE_TILE_TILE_ARC_GIS_REST",
        "styleUrl": "string",
        "styleUrlSource": "string"
      }
    ],
    "reportingGeographicalLevelId": "string",
    "isContactLabResultsActive": false,
    "contactOfContactIdMask": "9999999999",
    "isContactsOfContactsActive": false,
    "isDateOfOnsetRequired": true,
    "applyGeographicRestrictions": false,
    "id": "string",
    "createdAt": "2021-11-16T12:36:30.265Z",
    "createdBy": "string",
    "updatedAt": "2021-11-16T12:36:30.265Z",
    "updatedBy": "string",
    "createdOn": "string",
    "deleted": false,
    "deletedAt": "2021-11-16T12:36:30.265Z"
  }
}
export const GODATA_CASE_MODEL = 
{
    "firstName": "string",
    "gender": "string",
    "isDateOfOnsetApproximate": true,
    "wasContact": false,
    "outcomeId": "string",
    "safeBurial": false,
    "burialPlaceName": "string",
    "burialLocationId": "string",
    "classification": "string",
    "riskLevel": "string",
    "riskReason": "string",
    "transferRefused": false,
    "questionnaireAnswers": {},
    "questionnaireAnswersContact": {},
    "vaccinesReceived": [
      {
        "vaccine": "string",
        "date": "2021-11-16T12:36:30.307Z",
        "status": "string"
      }
    ],
    "pregnancyStatus": "string",
    "id": "string",
    "outbreakId": "string",
    "visualId": "string",
    "middleName": "string",
    "lastName": "string",
    "dob": "2021-11-16T12:36:30.307Z",
    "age": {
      "years": 0,
      "months": 0
    },
    "occupation": "string",
    "documents": [
      {
        "type": "string",
        "number": "string"
      }
    ],
    "addresses": [
      {
        "typeId": "LNG_REFERENCE_DATA_CATEGORY_ADDRESS_TYPE_USUAL_PLACE_OF_RESIDENCE",
        "country": "string",
        "city": "string",
        "addressLine1": "string",
        "postalCode": "string",
        "locationId": "string",
        "geoLocation": {
          "lat": 0,
          "lng": 0
        },
        "geoLocationAccurate": false,
        "date": "2021-11-16T12:36:30.307Z",
        "phoneNumber": "string",
        "emailAddress": "string"
      }
    ],
    "dateOfReporting": "2021-11-16T12:36:30.307Z",
    "isDateOfReportingApproximate": false,
    "dateOfLastContact": "2021-11-16T12:36:30.307Z",
    "dateOfInfection": "2021-11-16T12:36:30.307Z",
    "dateOfOnset": "2021-11-16T12:36:30.307Z",
    "dateBecomeCase": "2021-11-16T12:36:30.307Z",
    "dateRanges": [
      {
        "typeId": "string",
        "centerName": "string",
        "locationId": "string",
        "comments": "string",
        "startDate": "2021-11-16T12:36:30.307Z",
        "endDate": "2021-11-16T12:36:30.307Z"
      }
    ],
    "classificationHistory": [
      {
        "classification": "string",
        "startDate": "2021-11-16T12:36:30.307Z",
        "endDate": "2021-11-16T12:36:30.307Z"
      }
    ],
    "dateOfOutcome": "2021-11-16T12:36:30.307Z",
    "dateOfBurial": "2021-11-16T12:36:30.307Z",
    "followUpTeamId": "string",
    "deletedByParent": "string",
    "hasRelationships": false,
    "relationshipsRepresentation": [
      {
        "id": "string",
        "active": true,
        "otherParticipantType": "string",
        "otherParticipantId": "string",
        "target": true,
        "source": true
      }
    ],
    "notDuplicatesIds": [
      "string"
    ],
    "usualPlaceOfResidenceLocationId": "string",
    "duplicateKeys": {
      "name": [
        "string"
      ],
      "document": [
        "string"
      ]
    },
    "responsibleUserId": "string",
    "createdAt": "2021-11-16T12:36:30.307Z",
    "createdBy": "string",
    "updatedAt": "2021-11-16T12:36:30.307Z",
    "updatedBy": "string",
    "createdOn": "string",
    "deleted": false,
    "deletedAt": "2021-11-16T12:36:30.309Z"
  }
export const GODATA_CONTACT_MODEL = 
[
    {
      "contact": {
        "firstName": "string",
        "gender": "string",
        "riskLevel": "string",
        "riskReason": "string",
        "outcomeId": "string",
        "safeBurial": false,
        "wasCase": false,
        "active": true,
        "vaccinesReceived": [
          {
            "vaccine": "string",
            "date": "2021-11-16T12:36:30.332Z",
            "status": "string"
          }
        ],
        "pregnancyStatus": "string",
        "questionnaireAnswers": {},
        "questionnaireAnswersCase": {},
        "id": "string",
        "outbreakId": "string",
        "visualId": "string",
        "middleName": "string",
        "lastName": "string",
        "dob": "2021-11-16T12:36:30.332Z",
        "age": {
          "years": 0,
          "months": 0
        },
        "occupation": "string",
        "documents": [
          {
            "type": "string",
            "number": "string"
          }
        ],
        "addresses": [
          {
            "typeId": "LNG_REFERENCE_DATA_CATEGORY_ADDRESS_TYPE_USUAL_PLACE_OF_RESIDENCE",
            "country": "string",
            "city": "string",
            "addressLine1": "string",
            "postalCode": "string",
            "locationId": "string",
            "geoLocation": {
              "lat": 0,
              "lng": 0
            },
            "geoLocationAccurate": false,
            "date": "2021-11-16T12:36:30.332Z",
            "phoneNumber": "string",
            "emailAddress": "string"
          }
        ],
        "dateOfReporting": "2021-11-16T12:36:30.332Z",
        "isDateOfReportingApproximate": false,
        "dateOfLastContact": "2021-11-16T12:36:30.332Z",
        "followUpHistory": [
          {
            "status": "string",
            "startDate": "2021-11-16T12:36:30.332Z",
            "endDate": "2021-11-16T12:36:30.332Z"
          }
        ],
        "dateOfOutcome": "2021-11-16T12:36:30.332Z",
        "dateOfBurial": "2021-11-16T12:36:30.332Z",
        "dateBecomeContact": "2021-11-16T12:36:30.332Z",
        "followUp": {
          "originalStartDate": "2021-11-16T12:36:30.332Z",
          "startDate": "2021-11-16T12:36:30.332Z",
          "endDate": "2021-11-16T12:36:30.332Z",
          "status": "string"
        },
        "followUpTeamId": "string",
        "deletedByParent": "string",
        "hasRelationships": false,
        "relationshipsRepresentation": [
          {
            "id": "string",
            "active": true,
            "otherParticipantType": "string",
            "otherParticipantId": "string",
            "target": true,
            "source": true
          }
        ],
        "notDuplicatesIds": [
          "string"
        ],
        "usualPlaceOfResidenceLocationId": "string",
        "duplicateKeys": {
          "name": [
            "string"
          ],
          "document": [
            "string"
          ]
        },
        "responsibleUserId": "string",
        "createdAt": "2021-11-16T12:36:30.332Z",
        "createdBy": "string",
        "updatedAt": "2021-11-16T12:36:30.332Z",
        "updatedBy": "string",
        "createdOn": "string",
        "deleted": false,
        "deletedAt": "2021-11-16T12:36:30.332Z"
      },
      "relationship": {
        "outbreakId": "string",
        "persons": [
          {
            "id": "string",
            "type": "string",
            "target": true,
            "source": true
          }
        ],
        "contactDate": "2021-11-16T12:36:30.332Z",
        "contactDateEstimated": false,
        "certaintyLevelId": "string",
        "exposureTypeId": "string",
        "exposureFrequencyId": "string",
        "exposureDurationId": "string",
        "socialRelationshipTypeId": "string",
        "socialRelationshipDetail": "string",
        "clusterId": "string",
        "comment": "string",
        "active": true,
        "deletedByParent": "string",
        "dateOfFirstContact": "2021-11-16T12:36:30.332Z",
        "id": "string",
        "createdAt": "2021-11-16T12:36:30.332Z",
        "createdBy": "string",
        "updatedAt": "2021-11-16T12:36:30.332Z",
        "updatedBy": "string",
        "createdOn": "string",
        "deleted": false,
        "deletedAt": "2021-11-16T12:36:30.332Z"
      }
    }
  ]
export const GODATA_CONTACT_OF_CONTACT_MODEL = 
{
    "firstName": "string",
    "gender": "string",
    "riskLevel": "string",
    "riskReason": "string",
    "outcomeId": "string",
    "safeBurial": false,
    "active": true,
    "vaccinesReceived": [
      {
        "vaccine": "string",
        "date": "2021-11-16T12:36:30.524Z",
        "status": "string"
      }
    ],
    "pregnancyStatus": "string",
    "id": "string",
    "outbreakId": "string",
    "visualId": "string",
    "middleName": "string",
    "lastName": "string",
    "dob": "2021-11-16T12:36:30.524Z",
    "age": {
      "years": 0,
      "months": 0
    },
    "occupation": "string",
    "documents": [
      {
        "type": "string",
        "number": "string"
      }
    ],
    "addresses": [
      {
        "typeId": "LNG_REFERENCE_DATA_CATEGORY_ADDRESS_TYPE_USUAL_PLACE_OF_RESIDENCE",
        "country": "string",
        "city": "string",
        "addressLine1": "string",
        "postalCode": "string",
        "locationId": "string",
        "geoLocation": {
          "lat": 0,
          "lng": 0
        },
        "geoLocationAccurate": false,
        "date": "2021-11-16T12:36:30.524Z",
        "phoneNumber": "string",
        "emailAddress": "string"
      }
    ],
    "dateOfReporting": "2021-11-16T12:36:30.524Z",
    "isDateOfReportingApproximate": false,
    "dateOfLastContact": "2021-11-16T12:36:30.524Z",
    "followUpHistory": [
      {
        "status": "string",
        "startDate": "2021-11-16T12:36:30.524Z",
        "endDate": "2021-11-16T12:36:30.524Z"
      }
    ],
    "dateOfOutcome": "2021-11-16T12:36:30.524Z",
    "dateOfBurial": "2021-11-16T12:36:30.524Z",
    "dateBecomeContact": "2021-11-16T12:36:30.524Z",
    "followUp": {
      "originalStartDate": "2021-11-16T12:36:30.524Z",
      "startDate": "2021-11-16T12:36:30.524Z",
      "endDate": "2021-11-16T12:36:30.524Z",
      "status": "string"
    },
    "followUpTeamId": "string",
    "deletedByParent": "string",
    "hasRelationships": false,
    "relationshipsRepresentation": [
      {
        "id": "string",
        "active": true,
        "otherParticipantType": "string",
        "otherParticipantId": "string",
        "target": true,
        "source": true
      }
    ],
    "notDuplicatesIds": [
      "string"
    ],
    "usualPlaceOfResidenceLocationId": "string",
    "duplicateKeys": {
      "name": [
        "string"
      ],
      "document": [
        "string"
      ]
    },
    "responsibleUserId": "string",
    "createdAt": "2021-11-16T12:36:30.524Z",
    "createdBy": "string",
    "updatedAt": "2021-11-16T12:36:30.524Z",
    "updatedBy": "string",
    "createdOn": "string",
    "deleted": false,
    "deletedAt": "2021-11-16T12:36:30.524Z"
  }
export const GODATA_ORG_UNIT_MODEL = 'Go.Data Organisation Unit'

export const DHIS_PROGRAM_MODEL = 
{"Program":{
  "lastUpdated": "2021-11-06T07:16:13.865",
  "id": "DM9n1bUw8W8",
  "created": "2021-11-06T06:59:13.086",
  "name": "COVID-19 Contact Registration & Follow-up",
  "shortName": "COVID19 - Contacts",
  "completeEventsExpiryDays": 0,
  "description": "A tracker programme to record contacts of people who are suspected or confirmed to have  been exposed to COVID",
  "ignoreOverdueEvents": false,
  "skipOffline": false,
  "featureType": "POINT",
  "minAttributesRequiredToSearch": 1,
  "displayFrontPageList": true,
  "onlyEnrollOnce": false,
  "programType": "WITH_REGISTRATION",
  "accessLevel": "OPEN",
  "sharing": {
    "owner": "vUeLeQMSwhN",
    "external": false,
    "users": {},
    "userGroups": {
      "DoYehxUvmwT": {
        "access": "r-r-----",
        "id": "DoYehxUvmwT"
      },
      "k8Fk0kuhOeK": {
        "access": "r-rw----",
        "id": "k8Fk0kuhOeK"
      },
      "w4iJeNKy9br": {
        "access": "rwr-----",
        "id": "w4iJeNKy9br"
      }
    },
    "public": "--------"
  },
  "version": 33,
  "maxTeiCountToReturn": 0,
  "selectIncidentDatesInFuture": false,
  "displayIncidentDate": false,
  "selectEnrollmentDatesInFuture": false,
  "expiryDays": 0,
  "useFirstStageDuringRegistration": false,
  "relatedProgram": {
    "id": "uYjxkTbwRNf"
  },
  "categoryCombo": {
    "id": "bjDvmb4bfuf"
  },
  "lastUpdatedBy": {
    "code": "admin",
    "displayName": "admin admin",
    "name": "admin admin",
    "id": "M5zQapPyTZI",
    "username": "admin"
  },
  "createdBy": {
    "displayName": "Admin WHO",
    "name": "Admin WHO",
    "id": "vUeLeQMSwhN",
    "username": "who"
  },
  "trackedEntityType": {
    "id": "MCPQUTHX1Ze"
  },
  "style": {
    "icon": "group_discussion_meeting_negative"
  },
  "programTrackedEntityAttributes": [],
  "notificationTemplates": [],
  "translations": [],
  "organisationUnits": [],
  "programSections": [],
  "attributeValues": [],
  "programStages": [
    {
      "id": "sAV9jAajr8x"
    },
    {
      "id": "oWMZsYe2Fc4"
    }
  ]
}
}