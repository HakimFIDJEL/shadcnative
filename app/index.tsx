import { ComponentPressable } from "@/components/ComponentPressable";
import Header from "@/components/Header";
import { KeyboardDismissButton } from "@/components/KeyboardDismissButton";
import { RootView } from "@/components/RootView";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Keyboard, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const myComponents = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "button",
  "card",
  "checkbox",
  "collapsible",
  "context-menu",
  "dialog",
  "dropdown-menu",
  "hover-card",
  "input",
  "label",
  "menubar",
  "popover",
  "progress",
  "radio-group",
  "select",
  "separator",
  "skeleton",
  "switch",
  "tabs",
  "text",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
];

export default function Screen() {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const [filteredComponents, setFilteredComponents] =
    useState<Array<string>>(myComponents);

  // Keyboard functions
  const onShowKeyboard = () => {
    setInputFocus(true);
  };

  const onDismissKeyboard = () => {
    setInputFocus(false);
    Keyboard.dismiss();
  };

  // Filter function
  const handleFilter = (search: string) => {
    setSearch(search);

    const searchResults = myComponents.filter((item) => {
      const itemData = item.toLowerCase().replace("-", " ");
      const searchData = search.toLowerCase();

      return itemData.includes(searchData);
    });

    setFilteredComponents(searchResults);
  };

  // Scroll functions
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <RootView className="relative flex-1">
      {/* Content */}
      <View className="flex-1">
        {/* Header */}
        <Header title="Showcase" scrollY={scrollY} />

        {/* Component list */}
        <Animated.FlatList
          // Scroll
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          // Header
          ListHeaderComponent={
            <View className={cn("border-0 shadow-none mb-4", "py-1 gap-2")}>
              {/* Title */}
              <Text className={cn("text-4xl", "font-semibold")}>Showcase</Text>

              {/* Search bar */}
              <Input
                placeholder="Components"
                value={search}
                onChangeText={handleFilter}
                onPress={onShowKeyboard}
                onBlur={onDismissKeyboard}
                returnKeyType="done"
                onSubmitEditing={onDismissKeyboard}
                clearButtonMode="while-editing"
              />
            </View>
          }
          // Separator
          ItemSeparatorComponent={() => <Separator />}
          // Footer
          ListFooterComponent={<View className="h-8" />}
          // ClassName
          contentContainerClassName={"px-4 gap-0"}
          data={filteredComponents}
          keyboardDismissMode="on-drag"
          renderItem={({ item, index }) => (
            <ComponentPressable
              name={item}
              className={cn(
                index === 0 && "rounded-t-lg border-t",
                index === filteredComponents.length - 1 &&
                  "rounded-b-lg border-b",
              )}
            />
          )}
        />
      </View>

      {/* Hide keyboard button */}
      <KeyboardDismissButton
        inputFocus={inputFocus}
        onDismissKeyboard={onDismissKeyboard}
      />
    </RootView>
  );
}
