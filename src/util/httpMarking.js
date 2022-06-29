import axios from "axios";
import _ from "lodash";

const BACKEND_URL =
  "https://backend-dde8e-default-rtdb.europe-west1.firebasedatabase.app/";

export async function post(data) {
  const response = await axios.post(BACKEND_URL + "/marking.json", data);
  const id = response.data.name;
  return id;
}

export async function getDiariesWidgetInfo() {
  const response = await axios.get(BACKEND_URL + "/marking.json");

  const marking = [];

  for (const key in response.data) {
    const object = {
      title: response.data[key].markingInfo.name,
      week: "Week " + response.data[key].week.length,
      // imgSrc: require("../../assets/duck.jpeg"),
      key: response.data[key].markingInfo.name,
    };
    marking.push(object);
  }

  return marking;
}

export async function getDiariesByName(name) {
  const response = await axios.get(BACKEND_URL + "/marking.json");

  const marking = [];

  for (const key in response.data) {
    const object = {
      title: response.data[key].markingInfo.name,
      week: "Week " + response.data[key].week.length,
      // imgSrc: require("../../assets/duck.jpeg"),
      key: response.data[key].markingInfo.name,
    };
    marking.push(object);

    marking.filter((d) => d.key === name);
  }

  return marking;
}

export async function getDiaries() {
  const response = await axios.get(BACKEND_URL + "/marking.json");

  const marking = [];

  for (const key in response.data) {
    const object = {
      markingInfo: {
        name: response.data[key].markingInfo.name,
        roomType: response.data[key].markingInfo.roomType,
        wateringType: response.data[key].markingInfo.wateringType,
        mediumType: response.data[key].markingInfo.mediumType,
      },
      week: [
        {
          weekNum: response.data[key].week[0].weekNum,
          type: response.data[key].week[0].type,
          typeName: response.data[key].week[0].typeName,
          vegetationLights: response.data[key].week[0].vegetationLights,
          floweringLights: response.data[key].week[0].floweringLights,
          lightSchedule: response.data[key].week[0].lightSchedule,
          pH: response.data[key].week[0].pH,
          airHumidity: response.data[key].week[0].airHumidity,
          potSize: response.data[key].week[0].potSize,
          watering: response.data[key].week[0].watering,
        },
      ],
    };
    marking.push(object);
  }

  return marking;
}

export function put(id, data) {
  return axios.put(BACKEND_URL + `/marking/${id}.json`, data);
}

export function deleting(id) {
  return axios.delete(BACKEND_URL + `/marking/${id}.json`);
}

export async function postStudentMarking(data) {
  const response = await axios.post(BACKEND_URL + "/student.json", data);
  const id = Math.floor(Math.random() * 10) + 10000;
  return id;
}

// POST CLASS

// GET CLASSES
// export async function getClasses() {
//   const response = await axios.get(BACKEND_URL + "/class.json");

//   const marking = [];

//   for (const key in response.data) {
//     const object = {
//       id: key,
//       grade: response.data[key].markingInfo.name,
//       section: response.data[key].markingInfo.name,
//     };
//     marking.push(object);
//   }

//   return marking;
// }

// POST Student
export async function postStudent(data) {
  const response = await axios.post(BACKEND_URL + "/student.json", data);
  const id = response.data.name + response.data.surname;
  return id;
}

// GET section grade
export async function getGrade() {
  const response = await axios.get(BACKEND_URL + "/grade.json");

  const marking = [];

  for (const key in response.data) {
    const object = {
      id: key,
      grade: response.data[key].grade,
      section: response.data[key].section,
    };
    marking.push(object);
  }

  return marking;
}

// POST Marking
export async function postMarking(data) {
  const response = await axios.post(BACKEND_URL + "/marking.json", data);
  const id = response.data.name + response.data.surname;
  return id;
}

// GET Marking
export async function getMarkings() {
  const response = await axios.get(BACKEND_URL + "/marking.json");

  const marking = [];

  for (const key in response.data) {
    const object = {
      id: key,
      grade: response.data[key].grade,
      section: response.data[key].section,
      student: response.data[key].student,
      subject: response.data[key].subject,
      term: response.data[key].term,
      marks1: isNaN(+response.data[key].marks1)
        ? 0
        : +response.data[key].marks1,
      marks2: isNaN(+response.data[key].marks2)
        ? 0
        : +response.data[key].marks2,
      marks3: isNaN(+response.data[key].marks3)
        ? 0
        : +response.data[key].marks3,
    };
    marking.push(object);
  }

  return marking;
}

// POST GRADE
export async function postGrade(data) {
  const response = await axios.post(BACKEND_URL + "/grade.json", data);
  const id = response.data.section + response.data.section;
  return id;
}

// GET GRADE
// GET SECTION
// POST STUDENT

// get student
export async function getAllStudentsFromBack() {
  const response = await axios.get(BACKEND_URL + "/student.json");

  const students = [];

  for (const key in response.data) {
    const object = {
      id: key,
      grade: response.data[key].grade,
      section: response.data[key].section,
      name: response.data[key].name,
      surname: response.data[key].surname,
    };
    students.push(object);
  }

  return students;
}
