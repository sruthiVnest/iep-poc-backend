const express = require('express');
const app = express();
const port = 3000;
const cors=require('cors');
app.use(cors());//for fixing CORS error
app.use(express.json()); // for parsing application/json
 //get data from json file
 const data = require('./assets/jsonData/projecttreedata.json');
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
  res.json(data)
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