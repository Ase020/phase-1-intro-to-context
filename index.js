const array = ["Felix", "Olali", "Developer", 2];
const arrayOfArray = [
   ["Felix", "Olali", "Developer", 2],
   ["Hymie", "Bahati", "Manager", 1],
   ["John", "Obilo", "Soldier", 3],
];
const employeeObj = {
   firstName: "Felix",
   familyName: "Olali",
   title: "Developer",
   payPerHour: 2,
   timeInEvents: [],
   timeOutEvents: [],
};
const timestamp = "2014-02-28 1400";

// createEmployeeRecord
function createEmployeeRecord(array) {
   const employeeObj = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
   };
   return employeeObj;
}

// createEmployeeRecords
function createEmployeeRecords(arrayOfArray) {
   return arrayOfArray.map((array) => createEmployeeRecord(array));
}

// createTimeInEvent
function createTimeInEvent(employeeObj, timestamp) {
   employeeObj.timeInEvents = [{ type: "TimeIn", date: timestamp.slice(0, 10), hour: parseFloat(timestamp.slice(11, 15)) }];
   return employeeObj;
}

// createTimeOutEvent
function createTimeOutEvent(employeeObj, timestamp) {
   employeeObj.timeOutEvents = [{ type: "TimeOut", date: timestamp.slice(0, 10), hour: parseFloat(timestamp.slice(11, 15)) }];
   return employeeObj;
}

// hoursWorkedOnDate
function hoursWorkedOnDate(employeeObj, timestamp) {
   createTimeInEvent(employeeObj, timestamp);
   createTimeOutEvent(employeeObj, "2014-02-28 1600");
   const hoursWorked = Math.floor((employeeObj.timeOutEvents[0].hour - employeeObj.timeInEvents[0].hour) / 100);
   return hoursWorked;
}

// wagesEarnedOnDate
function wagesEarnedOnDate(employeeObj) {}

console.log(hoursWorkedOnDate(employeeObj, timestamp));

// // hoursWorkedOnDate
// function hoursWorkedOnDate(employeeObj,date) {
//    //    for (let i = 0; i < employeeObj.timeInEvents.length; i++) {
//    const timeWorked = Math.floor((employeeObj.timeOutEvents[0].hour - employeeObj.timeInEvents[0].hour) / 100);
//    return timeWorked;
//    //    }
// }

// // allWagesFor
// function allWagesFor(arrayOfObj) {

// //    let timeWorkedArr = [];
// //    for (let i = 0; i < arrayOfObj.timeInEvents.length; i++) {
// //       wagesEarnedOnDate(arrayOfObj);
// //    }
// //    return timeWorkedArr;
//    //    const totalHours = timeWorkedArr.reduce((total, num) => total + num, 0);
//    //    return totalHours * arrayOfObj.payPerHour;
// }

// console.log(
//    wagesEarnedOnDate({
//       firstName: array[0],
//       familyName: array[1],
//       title: array[2],
//       payPerHour: array[3],
//       timeInEvents: [
//          { type: "TimeIn", date: "2023-03-21", hour: 1100 },
//          { type: "TimeIn", date: "2023-03-22", hour: 1200 },
//       ],
//       timeOutEvents: [
//          { type: "TimeOut", date: "2023-03-21", hour: 1432 },
//          { type: "TimeOut", date: "2023-03-22", hour: 1432 },
//       ],
//    })
// );
