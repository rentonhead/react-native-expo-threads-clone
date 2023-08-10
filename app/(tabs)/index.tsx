import * as React from "react";

import {
  ScrollView,
  SafeAreaView,
  Platform,
  RefreshControl,
} from "react-native";
import Lottie from "lottie-react-native";
import { createRandomUser } from "@/utils/generate-dummy-data";
import { ThreadsContext } from "@/context/thread-context";
import { Text } from "@/components/Themed";

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext);
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
        {threads.map((thread) => (
          <Text key={thread.id}>{thread.author.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
