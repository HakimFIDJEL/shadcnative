import ComponentHeader from "@/components/ComponentHeader";
import { RootView } from "@/components/RootView";
import ComponentRegistry from "@/constants/components-registry";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Component() {
  const { name } = useLocalSearchParams();

  return (
    <RootView className="relative flex-1 bg-background">
      {/* Content */}
      <View className="flex-1">
        {/* Header */}
        <ComponentHeader title={name.toString().replace("-", " ")} />

        {/* Component */}
        <View className="flex-1 p-4">
          <ComponentRegistry name={name.toString()} />
        </View>
      </View>
    </RootView>
  );
}
