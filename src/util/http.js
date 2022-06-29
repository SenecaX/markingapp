import axios from "axios";
import _ from "lodash";

const BACKEND_URL =
  "https://backend-dde8e-default-rtdb.europe-west1.firebasedatabase.app/";

export async function post(data) {
  const response = await axios.post(BACKEND_URL + "/diary.json", data);
  const id = response.data.name;
  return id;
}

export async function getDiariesWidgetInfo() {
  const response = await axios.get(BACKEND_URL + "/diary.json");

  const diary = [];

  for (const key in response.data) {
    // const object2 = {
    //   title: response.data[key].diaryInfo.name,
    //   week: "Week " + response.data[key].week.length,
    //   // imgSrc: require("../../assets/duck.jpeg"),
    //   key: response.data[key].diaryInfo.name,
    // };

    const object = {
      id: key,
      title: response.data[key].diaryInfo.name,
      week: "Week " + response.data[key].week.length,
      // imgSrc: require("../../assets/duck.jpeg"),
      key: response.data[key].diaryInfo.name,
      diaryInfo: {
        name: response.data[key].diaryInfo.name,
        roomType: response.data[key].diaryInfo.roomType,
        wateringType: response.data[key].diaryInfo.wateringType,
        mediumType: response.data[key].diaryInfo.mediumType,
      },

      week: populateWeek(response.data[key].week),

      // week: [
      //   {
      //     weekNum: response.data[key].week[0].weekNum,
      //     type: response.data[key].week[0].type,
      //     typeName: response.data[key].week[0].typeName,
      //     vegetationLights: response.data[key].week[0].vegetationLights,
      //     floweringLights: response.data[key].week[0].floweringLights,
      //     lightSchedule: response.data[key].week[0].lightSchedule,
      //     pH: response.data[key].week[0].pH,
      //     airHumidity: response.data[key].week[0].airHumidity,
      //     potSize: response.data[key].week[0].potSize,
      //     watering: response.data[key].week[0].watering,
      //   },
      // ],
    };

    diary.push(object);
  }

  function populateWeek(data) {
    let listOfWeeks = [];
    data.filter((week) => {
      listOfWeeks.push({
        weekNum: week.weekNum,
        type: week.type,
        typeName: week.typeName,
        vegetationLights: week.vegetationLights,
        floweringLights: week.floweringLights,
        lightSchedule: week.lightSchedule,
        pH: week.pH,
        airHumidity: week.airHumidity,
        potSize: week.potSize,
        watering: week.watering,
      });
    });

    return data;
  }

  return diary;
}

export async function getDiariesByKey(name) {
  const response = await axios.get(BACKEND_URL + "/diary.json");

  const diary = [];

  for (const key in response.data) {
    const object = {
      title: response.data[key].diaryInfo.name,
      week: "Week " + response.data[key].week.length,
      // imgSrc: require("../../assets/duck.jpeg"),
      key: response.data[key].diaryInfo.name,
    };
    diary.push(object);

    diary.filter((d) => d.key === name);
  }

  return diary;
}

export async function getDiaries() {
  const response = await axios.get(BACKEND_URL + "/diary.json");

  const diary = [];

  for (const key in response.data) {
    const object = {
      diaryInfo: {
        name: response.data[key].diaryInfo.name,
        roomType: response.data[key].diaryInfo.roomType,
        wateringType: response.data[key].diaryInfo.wateringType,
        mediumType: response.data[key].diaryInfo.mediumType,
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
    diary.push(object);
  }

  return diary;
}

export function putNewWeek(id, data) {
  return axios.put(BACKEND_URL + `/diary/${id}.json`, data);
}

export function deleting(id) {
  return axios.delete(BACKEND_URL + `/diary/${id}.json`);
}
