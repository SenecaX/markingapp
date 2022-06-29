import AddStudentForm from "../../components/marking/AddStudentForm";
import { useNavigation } from "@react-navigation/native";
import { postStudent } from "../../util/httpMarking";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

function TestPapers(props) {
  useEffect(() => {}, []);

  const SignedUploadButton = () => {
    // useRequestPreSend(async ({ options }) => {
    //   const timestamp = Date.now();

    //   const response = await fetch(
    //     "https://api.cloudinary.com/v1_1/dpwvv3be4/upload",
    //     {
    //       method: "POST",
    //       body: {
    //         //  param
    //         upload_preset: UPLOAD_PRESET,
    //         timestamp,
    //       },
    //     }
    //   );
    //   console.log("response :>> ", response);

    //   const responseJson = await response.json();
    //   console.log("responseJson :>> ", responseJson);

    //   return {
    //     options: {
    //       destination: {
    //         params: {
    //           signature: responseJson.signature,
    //           upload_preset: UPLOAD_PRESET,

    //           timestamp,
    //           api_key: API_KEY,
    //         },
    //       },
    //     },
    //   };
    // });

    // useItemFinishListener((item) => {
    //   console.log(
    //     `item ${item.id} finished uploading, response was: `,
    //     item.uploadResponse,
    //     item.uploadStatus
    //   );
    // });

    return <UploadButton />;
  };

  function download() {
    console.log("download");
    FileSystem.downloadAsync(
      "https://res.cloudinary.com/dpwvv3be4/image/upload/v1656257729/nmxe8qd1ozufpepiyjqm.webp"
      // FileSystem.documentDirectory + "small.mp4"
    )
      .then(({ uri }) => {
        console.log("uri :>> ", uri);
        console.log("Finished downloading to ", uri);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrator mode</Text>

      <Uploady
        destination={{
          url: `https://api.cloudinary.com/v1_1/dpwvv3be4/upload`,

          params: {
            upload_preset: "pdfovy6l",
          },
        }}
      >
        {/* <UploadButton /> */}
        {/* <SignedUploadButton /> */}
      </Uploady>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default TestPapers;
