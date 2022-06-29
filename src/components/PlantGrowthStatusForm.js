import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { post } from "../util/http";

function PlantGrowthStatusForm({
  onSubmit,
  onCancel,
  defaultValues,
  showBtns,
  diary,
}) {
  const [inputs, setInputs] = useState({
    name: {
      value: defaultValues ? defaultValues.typeName : "",
      isValid: true,
    },
    week: {
      value: defaultValues ? defaultValues.weekNum : "",
      isValid: true,
    },
    lightSchedule: {
      value: defaultValues ? defaultValues.lightSchedule : "",
      isValid: true,
    },
    pH: {
      value: defaultValues ? defaultValues.pH : "",
      isValid: true,
    },
    airHumidity: {
      value: defaultValues ? defaultValues.airHumidity : "",
      isValid: true,
    },
    potSize: {
      value: defaultValues ? defaultValues.potSize : "",
      isValid: true,
    },
    watering: {
      value: defaultValues ? defaultValues.watering : "",
      isValid: true,
    },
    vegetationLights: {
      value: defaultValues ? defaultValues.vegetationLights : "",
      isValid: true,
    },
    floweringLights: {
      value: defaultValues ? defaultValues.floweringLights : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const data = {
      name: inputs.name.value,
      week: inputs.week.value,
      lightSchedule: inputs.lightSchedule.value,
      pH: inputs.pH.value,
      airHumidity: inputs.airHumidity.value,
      potSize: inputs.potSize.value,
      watering: inputs.watering.value,
      floweringLights: inputs.floweringLights.value,
      vegetationLights: inputs.vegetationLights.value,
    };

    const nameIsValid = data.name.length > 0;
    const weekIsValid = data.week.length > 0;
    const lightScheduleIsValid = data.lightSchedule.length > 0;
    const pHIsValid = data.pH.length > 0;
    const airHumidityIsValid = data.airHumidity.length > 0;
    const potSizeIsValid = data.potSize.length > 0;
    const wateringIsValid = data.watering.length > 0;
    const vegetationLightsIsValid = data.vegetationLights.length > 0;
    const floweringLightsIsValid = data.floweringLights.length > 0;

    if (!nameIsValid) {
      setInputs((curInputs) => {
        return {
          name: { value: curInputs.name.value, isValid: nameIsValid },
          week: { value: curInputs.week.value, isValid: weekIsValid },
          lightSchedule: {
            value: curInputs.lightSchedule.value,
            isValid: lightScheduleIsValid,
          },
          pH: { value: curInputs.pH.value, isValid: pHIsValid },
          airHumidity: {
            value: curInputs.airHumidity.value,
            isValid: airHumidityIsValid,
          },
          potSize: { value: curInputs.potSize.value, isValid: potSizeIsValid },
          watering: {
            value: curInputs.watering.value,
            isValid: wateringIsValid,
          },
          vegetationLights: {
            value: curInputs.vegetationLights.value,
            isValid: vegetationLightsIsValid,
          },
          floweringLights: {
            value: curInputs.floweringLights.value,
            isValid: floweringLightsIsValid,
          },
        };
      });
      // return;
    }

    diary.diary.week.push(data);

    onSubmit(diary);
  }

  // const formIsInvalid =
  //   !inputs.name.isValid ||
  //   !inputs.name.isValid ||
  //   !inputs.week.isValid ||
  //   !inputs.lightSchedule.isValid ||
  //   !inputs.pH.isValid ||
  //   !inputs.airHumidity.isValid ||
  //   !inputs.potSize.isValid ||
  //   !inputs.vegetationLights.isValid ||
  //   !inputs.floweringLights.isValid ||
  //   !inputs.watering.isValid;

  const formIsInvalid = false;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.inputContainer}>
          <CustomInput
            label="name"
            // invalid={!inputs.name.isValid}
            style={styles.errorInput}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "name"),
              value: inputs.name.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="week"
            // invalid={!inputs.week.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "week"),
              value: inputs.week.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="lightSchedule"
            // invalid={!inputs.lightSchedule.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "lightSchedule"),
              value: inputs.lightSchedule.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="airHumidity"
            // invalid={!inputs.airHumidity.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "airHumidity"),
              value: inputs.airHumidity.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="pH"
            // invalid={!inputs.pH.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "pH"),
              value: inputs.pH.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View style={styles.container}>
          <CustomInput
            label="potSize"
            // invalid={!inputs.potSize.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "potSize"),
              value: inputs.potSize.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="watering"
            // invalid={!inputs.watering.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "watering"),
              value: inputs.watering.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View style={styles.container}>
          <CustomInput
            label="vegetationLights"
            // invalid={!inputs.vegetationLights.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "vegetationLights"),
              value: inputs.vegetationLights.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View>
          <CustomInput
            label="floweringLights"
            // invalid={!inputs.floweringLights.isValid}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "floweringLights"),
              value: inputs.floweringLights.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        {showBtns && (
          <View style={styles.btnContainer}>
            <Button onPress={submitHandler} title="Submit"></Button>
            <Button onPress={onCancel} title="Cancel"></Button>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    margin: 8,
    fontSize: 8,
  },
  errorInput: {
    color: "red",
  },
  inputContainer: {
    width: 300,
  },
});

export default PlantGrowthStatusForm;
