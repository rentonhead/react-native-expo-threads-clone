import { ScrollView, SafeAreaView } from "react-native";
import Lottie from "lottie-react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Lottie
          source={require("../../lottie-animations/threads.json")}
          autoPlay
          loop={true}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
