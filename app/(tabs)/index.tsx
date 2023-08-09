import * as React from "react";

import {
  ScrollView,
  SafeAreaView,
  Platform,
  RefreshControl,
} from "react-native";
import Lottie from "lottie-react-native";

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          autoPlay
          loop={false}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
