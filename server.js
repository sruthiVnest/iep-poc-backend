const express = require('express');
const app = express();
const port = 3000;
const cors=require('cors');
app.use(cors());//for fixing CORS error
app.use(express.json()); // for parsing application/json
 
// Mock endpoints
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});
 
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});
 
app.get('/api/users/:id', (req, res) => {
const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
});
 //mock data for grid

 app.get('/api/gridData', (req, res) => {
  res.json([
    {
        "NCR NUMBER": "E1909572",
        "PART NO": "SMU83535",
        "PART ID": "PALE RUOTA TURBINA 2STG A.P.  FR",
        "PRODUCT DESCRIPTION": "Gas Turbine - MS 5002 E",
        "NC AREA": "Cell/B&B",
        "DEV DESCRIPTION NOTE (English Translation)": "Balzi,            Marta  - 27-09-2019 - Above mentioned S/Ns were found with aluminum seal thickness on dovetail under tolerance.~*~Manelli,            Giovanni  - 25-09-2019 -  Selected serial numbers: D14K0412, D14K0413, D14K0440, D14K0448, D14K0506, D14K0547, D14K0446, D14K0458, D14K0522, D14K0618, D14K0619, D14K0633, D14K0658, D14K0670, D14K0675, D14K0679, D14K0681, D14K0689, D14K0690, D14K0699, D14K0702, D14K0704, D14K0706, D14K0720, D14K0722, D14K0728, D14K0733, D14K0741, D14K0744, D14K0754, D14K0778, D14K0800, D14K0813, D14K0514, D14K0828, D14K0535, D14K0540, D14K0713, D14K0714, D14K0759, D14K0820, D14K0981, D14K1014, D14K1022, D14K1025, D14K1087, D14K1128, D14K1137, D14K1144, D14K0933, D14K0937, D14K0951, D14K0986, D14K0989, D14K1048, D14K0887, D14K0903, D14K0906, D14K0952, D14K1012, D14K1064, D14K1309, D14K1316, D14K1320, D14K1327, D14K1344, D14K1385, D14K1414, D14K1624, D14K1244, D14K1801, D14K1511, D14K0829, D14K0537, D14K0801, D14K0819, D14K0880, D14K0896, D14K0967, D14K0988, D14K1026, D14K1152, D14K1292, D14K1295, D14K1330, D14K1335, D14K1373, D14K1379, D14K1387, D14K1400, D14K1494, D14K1519, D14K1613~*~",
        "DISPOSITION NOTE (English Translation)": "Bertolini,        Daniele - 19-05-2020 - Buckets strippped and recoated.. ~*~Balzi,        Marta  - 27-09-2019 - Assigned serial numbers to Repair: D14K0412, D14K0413, D14K0440, D14K0448, D14K0506, D14K0547, D14K0446, D14K0458, D14K0522, D14K0618, D14K0619, D14K0633, D14K0658, D14K0670, D14K0675, D14K0679, D14K0681, D14K0689, D14K0690, D14K0699, D14K0702, D14K0704, D14K0706, D14K0720, D14K0722, D14K0728, D14K0733, D14K0741, D14K0744, D14K0754, D14K0778, D14K0800, D14K0813, D14K0514, D14K0828, D14K0535, D14K0540, D14K0713, D14K0714, D14K0759, D14K0820, D14K0981, D14K1014, D14K1022, D14K1025, D14K1087, D14K1128, D14K1137, D14K1144, D14K0933, D14K0937, D14K0951, D14K0986, D14K0989, D14K1048, D14K0887, D14K0903, D14K0906, D14K0952, D14K1012, D14K1064, D14K1309, D14K1316, D14K1320, D14K1327, D14K1344, D14K1385, D14K1414, D14K1624, D14K1244, D14K1801, D14K1511, D14K0829, D14K0537, D14K0801, D14K0819, D14K0880, D14K0896, D14K0967, D14K0988, D14K1026, D14K1152, D14K1292, D14K1295, D14K1330, D14K1335, D14K1373, D14K1379, D14K1387, D14K1400, D14K1494, D14K1519, D14K1613~*~",
        "CREATED USER DATE": "2019-09-24T22:00:00.000Z",
        "OPN DYS": 237,
        "WORKING COSTING PROJECT": "1608553",
        "DEVIATION NUMBER": 207989,
        "DISPOSITION CODE": "Bertolini,        Daniele - 19-05-2020 - Buckets strippped and recoated.. ~*~Balzi,        Marta  - 27-09-2019 - Assigned serial numbers to Repair: D14K0412, D14K0413, D14K0440, D14K0448, D14K0506, D14K0547, D14K0446, D14K0458, D14K0522, D14K0618, D14K0619, D14K0633, D14K0658, D14K0670, D14K0675, D14K0679, D14K0681, D14K0689, D14K0690, D14K0699, D14K0702, D14K0704, D14K0706, D14K0720, D14K0722, D14K0728, D14K0733, D14K0741, D14K0744, D14K0754, D14K0778, D14K0800, D14K0813, D14K0514, D14K0828, D14K0535, D14K0540, D14K0713, D14K0714, D14K0759, D14K0820, D14K0981, D14K1014, D14K1022, D14K1025, D14K1087, D14K1128, D14K1137, D14K1144, D14K0933, D14K0937, D14K0951, D14K0986, D14K0989, D14K1048, D14K0887, D14K0903, D14K0906, D14K0952, D14K1012, D14K1064, D14K1309, D14K1316, D14K1320, D14K1327, D14K1344, D14K1385, D14K1414, D14K1624, D14K1244, D14K1801, D14K1511, D14K0829, D14K0537, D14K0801, D14K0819, D14K0880, D14K0896, D14K0967, D14K0988, D14K1026, D14K1152, D14K1292, D14K1295, D14K1330, D14K1335, D14K1373, D14K1379, D14K1387, D14K1400, D14K1494, D14K1519, D14K1613~*~",
        "DEV DESCRIPTION NOTE": "Balzi,            Marta  - 27-09-2019 - Above mentioned S/Ns were found with aluminum seal thickness on dovetail under tolerance.~*~Manelli,            Giovanni  - 25-09-2019 -  Selected serial numbers: D14K0412, D14K0413, D14K0440, D14K0448, D14K0506, D14K0547, D14K0446, D14K0458, D14K0522, D14K0618, D14K0619, D14K0633, D14K0658, D14K0670, D14K0675, D14K0679, D14K0681, D14K0689, D14K0690, D14K0699, D14K0702, D14K0704, D14K0706, D14K0720, D14K0722, D14K0728, D14K0733, D14K0741, D14K0744, D14K0754, D14K0778, D14K0800, D14K0813, D14K0514, D14K0828, D14K0535, D14K0540, D14K0713, D14K0714, D14K0759, D14K0820, D14K0981, D14K1014, D14K1022, D14K1025, D14K1087, D14K1128, D14K1137, D14K1144, D14K0933, D14K0937, D14K0951, D14K0986, D14K0989, D14K1048, D14K0887, D14K0903, D14K0906, D14K0952, D14K1012, D14K1064, D14K1309, D14K1316, D14K1320, D14K1327, D14K1344, D14K1385, D14K1414, D14K1624, D14K1244, D14K1801, D14K1511, D14K0829, D14K0537, D14K0801, D14K0819, D14K0880, D14K0896, D14K0967, D14K0988, D14K1026, D14K1152, D14K1292, D14K1295, D14K1330, D14K1335, D14K1373, D14K1379, D14K1387, D14K1400, D14K1494, D14K1519, D14K1613~*~",
        "DISPOSITION NOTE": "Bertolini,        Daniele - 19-05-2020 - Buckets strippped and recoated.. ~*~Balzi,        Marta  - 27-09-2019 - Assigned serial numbers to Repair: D14K0412, D14K0413, D14K0440, D14K0448, D14K0506, D14K0547, D14K0446, D14K0458, D14K0522, D14K0618, D14K0619, D14K0633, D14K0658, D14K0670, D14K0675, D14K0679, D14K0681, D14K0689, D14K0690, D14K0699, D14K0702, D14K0704, D14K0706, D14K0720, D14K0722, D14K0728, D14K0733, D14K0741, D14K0744, D14K0754, D14K0778, D14K0800, D14K0813, D14K0514, D14K0828, D14K0535, D14K0540, D14K0713, D14K0714, D14K0759, D14K0820, D14K0981, D14K1014, D14K1022, D14K1025, D14K1087, D14K1128, D14K1137, D14K1144, D14K0933, D14K0937, D14K0951, D14K0986, D14K0989, D14K1048, D14K0887, D14K0903, D14K0906, D14K0952, D14K1012, D14K1064, D14K1309, D14K1316, D14K1320, D14K1327, D14K1344, D14K1385, D14K1414, D14K1624, D14K1244, D14K1801, D14K1511, D14K0829, D14K0537, D14K0801, D14K0819, D14K0880, D14K0896, D14K0967, D14K0988, D14K1026, D14K1152, D14K1292, D14K1295, D14K1330, D14K1335, D14K1373, D14K1379, D14K1387, D14K1400, D14K1494, D14K1519, D14K1613~*~",
        "IMPUTATION CODE": "199",
        "CAUSE CODE": "L04",
        "DEVIATION CODE": "Balzi,            Marta  - 27-09-2019 - Above mentioned S/Ns were found with aluminum seal thickness on dovetail under tolerance.~*~Manelli,            Giovanni  - 25-09-2019 -  Selected serial numbers: D14K0412, D14K0413, D14K0440, D14K0448, D14K0506, D14K0547, D14K0446, D14K0458, D14K0522, D14K0618, D14K0619, D14K0633, D14K0658, D14K0670, D14K0675, D14K0679, D14K0681, D14K0689, D14K0690, D14K0699, D14K0702, D14K0704, D14K0706, D14K0720, D14K0722, D14K0728, D14K0733, D14K0741, D14K0744, D14K0754, D14K0778, D14K0800, D14K0813, D14K0514, D14K0828, D14K0535, D14K0540, D14K0713, D14K0714, D14K0759, D14K0820, D14K0981, D14K1014, D14K1022, D14K1025, D14K1087, D14K1128, D14K1137, D14K1144, D14K0933, D14K0937, D14K0951, D14K0986, D14K0989, D14K1048, D14K0887, D14K0903, D14K0906, D14K0952, D14K1012, D14K1064, D14K1309, D14K1316, D14K1320, D14K1327, D14K1344, D14K1385, D14K1414, D14K1624, D14K1244, D14K1801, D14K1511, D14K0829, D14K0537, D14K0801, D14K0819, D14K0880, D14K0896, D14K0967, D14K0988, D14K1026, D14K1152, D14K1292, D14K1295, D14K1330, D14K1335, D14K1373, D14K1379, D14K1387, D14K1400, D14K1494, D14K1519, D14K1613~*~",

        "NCR STATUS": "Closed",
        "YEAR": 2019,
        "MONTH": 9,
        "LAST WEEK UPDATE": "",
        "WEEK OPEN": "FW39-2019",
        "NCR TYPE": "NON ENG"
    }
])});
//mock data for node tree
app.get('/api/getCurrentProjects',(req,res)=>{
  res.json([{
    "data": {
        "favourites": [
            {
                "groupId": "a850c381-4c6b-5a59-dda1-1e37b24eca3d",
                "groupName": "1104088-NCIC III Ammonia",
                "favourites": [
                    {
                        "projectId": "aa0b2de0-07cc-a1fc-572e-3b6201ac5fcd",
                        "contractName": "8844180-641-193 MOH+X-tend",
                        "jobNumber": [
                            "8844180"
                        ]
                    },
                    {
                        "projectId": "ca55616f-5fcc-efef-d201-cb47d392fe07",
                        "contractName": "031999999",
                        "jobNumber": [
                            "0319999"
                        ]
                    },
                    {
                        "projectId": "e32e6075-21fc-3fe2-136f-ccef1dd65676",
                        "contractName": "8840726-OLNG - UCP upgrade Tr1,2,3+GTG 2542557",
                        "jobNumber": [
                            "8840726",
                            "8840727",
                            "8840728",
                            "8840729",
                            "8840730",
                            "8840731",
                            "8840732",
                            "8840733"
                        ]
                    },
                    {
                        "projectId": "45c27ab7-d198-ce0c-7ec1-9be4856d2c51",
                        "contractName": "1707428-Cogeneration IV",
                        "jobNumber": [
                            "1707428",
                            "1707429"
                        ]
                    },
                    {
                        "projectId": "eb2cda2a-aa42-572b-f4db-965b657033a7",
                        "contractName": "1900976-Perdaman: Syngas and Ammonia Project",
                        "jobNumber": [
                            "1103993",
                            "1103994",
                            "1900976",
                            "1900977"
                        ]
                    },
                    {
                        "projectId": "8c422dd5-4893-143a-d2e3-57fd77623de2",
                        "contractName": "1105363-Yara Sluiskil CO2 liquefaction plant - NH3 Package",
                        "jobNumber": [
                            "1105363"
                        ]
                    },
                    {
                        "projectId": "9b97c9b3-6006-71b3-2f8a-cdd237105db5",
                        "contractName": "1608614-Supply contract for the supply of JUPITER-MODEL1 PHASE COMPONENTS dated 05-12-2014",
                        "jobNumber": [
                            "1608548",
                            "1608549",
                            "1608550",
                            "1608551",
                            "1608552",
                            "1608553",
                            "1608555",
                            "1608556",
                            "1608557",
                            "1608558",
                            "1608559",
                            "1608560",
                            "1608561",
                            "1608562",
                            "1608563",
                            "1608564",
                            "1608565",
                            "1608566",
                            "1608567",
                            "1608569",
                            "1608570",
                            "1608571",
                            "1608572",
                            "1608573",
                            "1608574",
                            "1608575",
                            "1608576",
                            "1608577",
                            "1608578",
                            "1608579",
                            "1608585",
                            "1608586",
                            "1608587",
                            "1608588",
                            "1608589",
                            "1608590",
                            "1608591",
                            "1608592",
                            "1608593",
                            "1608594",
                            "1608595",
                            "1608596",
                            "1608597",
                            "1608598",
                            "1608599",
                            "1608600",
                            "1608601",
                            "1608602",
                            "1608603",
                            "1608604",
                            "1608605",
                            "1608606",
                            "1608607",
                            "1608608",
                            "1608609",
                            "1608610",
                            "1608611",
                            "1608612",
                            "1608613",
                            "1608614",
                            "1608615",
                            "1608616",
                            "1608617",
                            "1608618",
                            "1608619",
                            "1608621"
                        ]
                    }
                ],
                "isPTGroup": false
            },
            {
                "groupId": "0c41042f-3a46-795e-6392-bf18cd335b8d",
                "groupName": "1709043-Leviathan Tex",
                "favourites": [
                    {
                        "projectId": "9b97c9b3-6006-71b3-2f8a-cdd237105db5",
                        "contractName": "1608614-Supply contract for the supply of JUPITER-MODEL1 PHASE COMPONENTS dated 05-12-2014",
                        "jobNumber": [
                            "1608548",
                            "1608549",
                            "1608550",
                            "1608551",
                            "1608552",
                            "1608553",
                            "1608555",
                            "1608556",
                            "1608557",
                            "1608558",
                            "1608559",
                            "1608560",
                            "1608561",
                            "1608562",
                            "1608563",
                            "1608564",
                            "1608565",
                            "1608566",
                            "1608567",
                            "1608569",
                            "1608570",
                            "1608571",
                            "1608572",
                            "1608573",
                            "1608574",
                            "1608575",
                            "1608576",
                            "1608577",
                            "1608578",
                            "1608579",
                            "1608585",
                            "1608586",
                            "1608587",
                            "1608588",
                            "1608589",
                            "1608590",
                            "1608591",
                            "1608592",
                            "1608593",
                            "1608594",
                            "1608595",
                            "1608596",
                            "1608597",
                            "1608599",
                            "1608600",
                            "1608601",
                            "1608602",
                            "1608603",
                            "1608604",
                            "1608605",
                            "1608606",
                            "1608607",
                            "1608608",
                            "1608609",
                            "1608610",
                            "1608611",
                            "1608612",
                            "1608613",
                            "1608614",
                            "1608615",
                            "1608616",
                            "1608617",
                            "1608618",
                            "1608619",
                            "1608621"
                        ]
                    },
                    {
                        "projectId": "a6e57d53-5082-93e2-b06c-1ce2fd7d55b1",
                        "contractName": "1704091-P84",
                        "jobNumber": [
                            "1704092",
                            "1704093",
                            "1704094",
                            "1704095",
                            "1704096",
                            "1704091"
                        ]
                    }
                ],
                "isPTGroup": false
            },
            {
                "groupId": "84da65ef-97db-2f4d-1d33-aeab74c48486",
                "groupName": "New user group 2025 1",
                "favourites": [
                    {
                        "projectId": "a6e57d53-5082-93e2-b06c-1ce2fd7d55b1",
                        "contractName": "1704091-P84",
                        "jobNumber": [
                            "1704092",
                            "1704094",
                            "1704095",
                            "1704091"
                        ]
                    },
                    {
                        "projectId": "3e5fc7c5-641d-1fc7-76c4-1ee4ce73aacf",
                        "contractName": "1105214-YCI METHANOL PLANT",
                        "jobNumber": [
                            "1105214",
                            "1105215",
                            "8201234",
                            "1900866"
                        ]
                    },
                    {
                        "projectId": "25115de7-520c-aedb-e6a1-8a62634970f9",
                        "contractName": "1800335-Hurl GTG",
                        "jobNumber": [
                            "2990268",
                            "1800335"
                        ]
                    },
                    {
                        "projectId": "2ee70088-942c-bd8f-809c-cb23e708015d",
                        "contractName": "1703671-Sverdrup",
                        "jobNumber": [
                            "2991691"
                        ]
                    }
                ],
                "isPTGroup": false
            }
        ]
    }
  }
  ])
})
app.get('/api/getISPO',(req,res)=>{
  res.json([{
    "data": {
        
                "activities": [

            {

                "id": 7604284,

                "PROJECT_ID": "5843920",

                "PRIMARY_RESOURCE_NAME": "",

                "ACT_ID": "M111CTRLNET",

                "ACTIVITY_NAME": "ENG-Network Specification",

                "STEP_ID": "",

                "STEP_NAME": "",

                "EARLY_DATE": "11-26-2018",

                "IMPACTED_NCM": null,

                "IMPACTED_NCR": null,

                "LATE_FINISH": "09-07-2018",

                "PROMISE_DATE": null,

                "COMMENT": null,

                "ACKNOWLEDGE": null,

                "ACKNOWLEDGE_DATE": null,

                "PROJECT_NAME": "5843920-iHMI for Hides units",

                "ROLE": "CTRL",

                "PRIMARY_RESOURCE_SSO": null,

                "LONG_DUMMY": "M111CTRLNET010_5843920",

                "ACT_TYPE": "530",

                "REAL_CODE": "SMO0110098",

                "EARLY_STATUS": "COMPLETEDONTIME",

                "ACTUAL_FINISH": "11-16-2018",

                "TYPE": "Activity",

                "EARLY_DUE_WEEK": "",

                "AGING": "Completed",

                "UNIFIER_PROJECT_STATUS": "Active",

                "P6-PROJ_CONTR_DELIVERY_DATE": null,

                "PROJECT_PHASE": "ACTIVE",

                "CONTRACT_NUMBER": "M_5843920",

                "PL": "TPS",

                "SUB_PL": "SI",

                "RAC_DT": "11-26-2018",

                "PLANNING_DATE": "11-26-2018",

                "TRAIN_TYPE": "GT+CC",

                "SYSTEM_DATE": "05-27-2020",

                "ORGANIZATION_NAME": "OG TPS-TECH-System Integration ICE",

                "JOB_TYPE": "5843",

                "DIVISION": "ICE",

                "EXCLUDE": "0",

                "FUNCTION": "TECH",

                "DOC_TYPE": null,

                "LATE_STATUS": "COMPLETEDLATE",

                "MAIN_FUNCTION": "ENG",

                "ITEM_AGGREGATION": "G",

                "RCA": null,

                "PO_NUMBER": null,

                "VDR_EARLY_DATE": null,

                "PO_SPECIFICATION_ID": null,

                "SIGN-OFF_STATUS": null,

                "VENDOR": null,

                "APPROVE_TYPE": null,

                "DOCUMENT_DUE_DATE": null,

                "UNIFIER_DOCUMENT_STATUS": "",

                "UNIFIER_REVISION_STATUS": "",

                "DOC_EMISSION_CODE": "",

                "PM": "Daniele Contrafatto",

                "PROJECT_TYPE": null,

                "DELAY_CUSTOMER": "",

                "CUSTOMER_DOC": "",

                "RETURN_DATE_ACTUAL": "",

                "LAST_SUBMISSION": "",

                "FIRST_SUBMISSION": "",

                "DWG_ISSUE_NUMBER_FINAL": "",

                "PP": "Giuseppe Dongiovanni",

                "ADDITIONAL_CUSTOMER_DOC": "",

                "PE": "Leszek Kulawski",

                "DOC_RETURN_CODE": "",

                "RETURN_DATE_PLANNED": "",

                "PROJECT_STATUS_Primavera": null,

                "TEAM LEADER": null,

                "GENERAL": null,

                "Sub_Division": null,

                "FLAG": null,

                "WA_IN_JOT_REQUIRED": null,

                "SORT_DATE": "2018-11-26",

                "dummy": null,

                "configurator": false,

                "latefinishwarning": false

            },

            {

                "id": 7726450,

                "PROJECT_ID": "5843920",

                "PRIMARY_RESOURCE_NAME": "",

                "ACT_ID": "M111CTRLNET",

                "ACTIVITY_NAME": "ENG-Network Specification",

                "STEP_ID": "M111J0019",

                "STEP_NAME": "REMOTE HMI",

                "EARLY_DATE": "11-26-2018",

                "IMPACTED_NCM": null,

                "IMPACTED_NCR": "F2356436, Y2351877, Y2359298",

                "LATE_FINISH": "09-07-2018",

                "PROMISE_DATE": null,

                "COMMENT": null,

                "ACKNOWLEDGE": null,

                "ACKNOWLEDGE_DATE": null,

                "PROJECT_NAME": "5843920-iHMI for Hides units",

                "ROLE": "CTRL",

                "PRIMARY_RESOURCE_SSO": null,

                "LONG_DUMMY": "M111CTRLNET010_M111J0019_5843920",

                "ACT_TYPE": "",

                "REAL_CODE": "SMO0110098",

                "EARLY_STATUS": "COMPLETEDONTIME",

                "ACTUAL_FINISH": "11-16-2018",

                "TYPE": "Step",

                "EARLY_DUE_WEEK": "",

                "AGING": "",

                "UNIFIER_PROJECT_STATUS": "Active",

                "P6-PROJ_CONTR_DELIVERY_DATE": null,

                "PROJECT_PHASE": "ACTIVE",

                "CONTRACT_NUMBER": "M_5843920",

                "PL": "TPS",

                "SUB_PL": "SI",

                "RAC_DT": "11-26-2018",

                "PLANNING_DATE": "11-26-2018",

                "TRAIN_TYPE": "GT+CC",

                "SYSTEM_DATE": "05-27-2020",

                "ORGANIZATION_NAME": "OG TPS-TECH-System Integration ICE",

                "JOB_TYPE": "5843",

                "DIVISION": "ICE",

                "EXCLUDE": "1",

                "FUNCTION": "TECH",

                "DOC_TYPE": null,

                "LATE_STATUS": "COMPLETEDLATE",

                "MAIN_FUNCTION": "ENG",

                "ITEM_AGGREGATION": "",

                "RCA": null,

                "PO_NUMBER": null,

                "VDR_EARLY_DATE": null,

                "PO_SPECIFICATION_ID": null,

                "SIGN-OFF_STATUS": null,

                "VENDOR": null,

                "APPROVE_TYPE": null,

                "DOCUMENT_DUE_DATE": null,

                "UNIFIER_DOCUMENT_STATUS": "",

                "UNIFIER_REVISION_STATUS": "",

                "DOC_EMISSION_CODE": "",

                "PM": "Daniele Contrafatto",

                "PROJECT_TYPE": null,

                "DELAY_CUSTOMER": "",

                "CUSTOMER_DOC": "",

                "RETURN_DATE_ACTUAL": "",

                "LAST_SUBMISSION": "",

                "FIRST_SUBMISSION": "",

                "DWG_ISSUE_NUMBER_FINAL": "",

                "PP": "Giuseppe Dongiovanni",

                "ADDITIONAL_CUSTOMER_DOC": "",

                "PE": "Leszek Kulawski",

                "DOC_RETURN_CODE": "",

                "RETURN_DATE_PLANNED": "",

                "PROJECT_STATUS_Primavera": null,

                "TEAM LEADER": null,

                "GENERAL": null,

                "Sub_Division": null,

                "FLAG": null,

                "WA_IN_JOT_REQUIRED": null,

                "SORT_DATE": "2018-11-26",

                "dummy": "M111CTRLNET",

                "configurator": true,

                "latefinishwarning": false

            },

            {

                "id": 7603328,

                "PROJECT_ID": "5843920",

                "PRIMARY_RESOURCE_NAME": "",

                "ACT_ID": "M111CTRLPAN",

                "ACTIVITY_NAME": "ENG-CONTROL PANEL SPECIFICATION & SPARE PARTS",

                "STEP_ID": "",

                "STEP_NAME": "",

                "EARLY_DATE": "12-05-2018",

                "IMPACTED_NCM": null,

                "IMPACTED_NCR": null,

                "LATE_FINISH": "10-05-2018",

                "PROMISE_DATE": null,

                "COMMENT": null,

                "ACKNOWLEDGE": null,

                "ACKNOWLEDGE_DATE": null,

                "PROJECT_NAME": "5843920-iHMI for Hides units",

                "ROLE": "CTRL",

                "PRIMARY_RESOURCE_SSO": null,

                "LONG_DUMMY": "M111CTRLPAN010_5843920",

                "ACT_TYPE": "530",

                "REAL_CODE": "RQO5032139",

                "EARLY_STATUS": "COMPLETEDONTIME",

                "ACTUAL_FINISH": "12-03-2018",

                "TYPE": "Activity",

                "EARLY_DUE_WEEK": "",

                "AGING": "Completed",

                "UNIFIER_PROJECT_STATUS": "Active",

                "P6-PROJ_CONTR_DELIVERY_DATE": null,

                "PROJECT_PHASE": "ACTIVE",

                "CONTRACT_NUMBER": "M_5843920",

                "PL": "TPS",

                "SUB_PL": "SI",

                "RAC_DT": "12-05-2018",

                "PLANNING_DATE": "12-05-2018",

                "TRAIN_TYPE": "GT+CC",

                "SYSTEM_DATE": "06-05-2020",

                "ORGANIZATION_NAME": "OG TPS-TECH-System Integration ICE",

                "JOB_TYPE": "5843",

                "DIVISION": "ICE",

                "EXCLUDE": "0",

                "FUNCTION": "TECH",

                "DOC_TYPE": null,

                "LATE_STATUS": "COMPLETEDLATE",

                "MAIN_FUNCTION": "ENG",

                "ITEM_AGGREGATION": "G",

                "RCA": null,

                "PO_NUMBER": null,

                "VDR_EARLY_DATE": null,

                "PO_SPECIFICATION_ID": null,

                "SIGN-OFF_STATUS": null,

                "VENDOR": null,

                "APPROVE_TYPE": null,

                "DOCUMENT_DUE_DATE": null,

                "UNIFIER_DOCUMENT_STATUS": "",

                "UNIFIER_REVISION_STATUS": "",

                "DOC_EMISSION_CODE": "",

                "PM": "Daniele Contrafatto",

                "PROJECT_TYPE": null,

                "DELAY_CUSTOMER": "",

                "CUSTOMER_DOC": "",

                "RETURN_DATE_ACTUAL": "",

                "LAST_SUBMISSION": "",

                "FIRST_SUBMISSION": "",

                "DWG_ISSUE_NUMBER_FINAL": "",

                "PP": "Giuseppe Dongiovanni",

                "ADDITIONAL_CUSTOMER_DOC": "",

                "PE": "Leszek Kulawski",

                "DOC_RETURN_CODE": "",

                "RETURN_DATE_PLANNED": "",

                "PROJECT_STATUS_Primavera": null,

                "TEAM LEADER": null,

                "GENERAL": null,

                "Sub_Division": null,

                "FLAG": null,

                "WA_IN_JOT_REQUIRED": null,

                "SORT_DATE": "2018-12-05",

                "dummy": null,

                "configurator": false,

                "latefinishwarning": false

            },

            {

                "id": 7726451,

                "PROJECT_ID": "5843920",

                "PRIMARY_RESOURCE_NAME": "",

                "ACT_ID": "M111CTRLPAN",

                "ACTIVITY_NAME": "ENG-CONTROL PANEL SPECIFICATION & SPARE PARTS",

                "STEP_ID": "M111C0016",

                "STEP_NAME": "UCP PANEL PERSONALIZATION",

                "EARLY_DATE": "12-05-2018",

                "IMPACTED_NCM": null,

                "IMPACTED_NCR": "G1892254, F1892035, F1890623, F1889464, F1884991, F2025440, F2019108, F2131155, F1902728, F1902117, F1901832",

                "LATE_FINISH": "10-05-2018",

                "PROMISE_DATE": null,

                "COMMENT": null,

                "ACKNOWLEDGE": null,

                "ACKNOWLEDGE_DATE": null,

                "PROJECT_NAME": "5843920-iHMI for Hides units",

                "ROLE": "CTRL",

                "PRIMARY_RESOURCE_SSO": null,

                "LONG_DUMMY": "M111CTRLPAN010_M111C0016_5843920",

                "ACT_TYPE": "",

                "REAL_CODE": "RQO5032139",

                "EARLY_STATUS": "COMPLETEDONTIME",

                "ACTUAL_FINISH": "12-03-2018",

                "TYPE": "Step",

                "EARLY_DUE_WEEK": "",

                "AGING": "",

                "UNIFIER_PROJECT_STATUS": "Active",

                "P6-PROJ_CONTR_DELIVERY_DATE": null,

                "PROJECT_PHASE": "ACTIVE",

                "CONTRACT_NUMBER": "M_5843920",

                "PL": "TPS",

                "SUB_PL": "SI",

                "RAC_DT": "12-05-2018",

                "PLANNING_DATE": "12-05-2018",

                "TRAIN_TYPE": "GT+CC",

                "SYSTEM_DATE": "06-05-2020",

                "ORGANIZATION_NAME": "OG TPS-TECH-System Integration ICE",

                "JOB_TYPE": "5843",

                "DIVISION": "ICE",

                "EXCLUDE": "1",

                "FUNCTION": "TECH",

                "DOC_TYPE": null,

                "LATE_STATUS": "COMPLETEDLATE",

                "MAIN_FUNCTION": "ENG",

                "ITEM_AGGREGATION": "",

                "RCA": null,

                "PO_NUMBER": null,

                "VDR_EARLY_DATE": null,

                "PO_SPECIFICATION_ID": null,

                "SIGN-OFF_STATUS": null,

                "VENDOR": null,

                "APPROVE_TYPE": null,

                "DOCUMENT_DUE_DATE": null,

                "UNIFIER_DOCUMENT_STATUS": "",

                "UNIFIER_REVISION_STATUS": "",

                "DOC_EMISSION_CODE": "",

                "PM": "Daniele Contrafatto",

                "PROJECT_TYPE": null,

                "DELAY_CUSTOMER": "",

                "CUSTOMER_DOC": "",

                "RETURN_DATE_ACTUAL": "",

                "LAST_SUBMISSION": "",

                "FIRST_SUBMISSION": "",

                "DWG_ISSUE_NUMBER_FINAL": "",

                "PP": "Giuseppe Dongiovanni",

                "ADDITIONAL_CUSTOMER_DOC": "",

                "PE": "Leszek Kulawski",

                "DOC_RETURN_CODE": "",

                "RETURN_DATE_PLANNED": "",

                "PROJECT_STATUS_Primavera": null,

                "TEAM LEADER": null,

                "GENERAL": null,

                "Sub_Division": null,

                "FLAG": null,

                "WA_IN_JOT_REQUIRED": null,

                "SORT_DATE": "2018-12-05",

                "dummy": "M111CTRLPAN",

                "configurator": true,

                "latefinishwarning": false

            }


        ]
    }
  }
  ])
})
// Start server
app.listen(port, () => {
console.log(`Mock service running at http://localhost:${port}`);
});