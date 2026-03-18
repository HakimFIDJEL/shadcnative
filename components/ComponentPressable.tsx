import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react-native";
import { Pressable } from "react-native";
import { Card } from "./ui/card";
import { Icon } from "./ui/icon";
import { Text } from "./ui/text";

type Props = {
  name: string;
  className?: string;
};

export function ComponentPressable({ name, className }: Props) {
  const formattedName = name.replace("-", " ");

  return (
    <Pressable>
      <Card
        className={cn(
          "capitalize flex-row justify-between items-center py-2.5 px-4 border-0 rounded-none",
          "border-x",
          className,
        )}
      >
        <Text className="capitalize flex-1">{formattedName}</Text>
        <Icon as={ChevronRight} className="text-muted-foreground" />
      </Card>
    </Pressable>
  );
}
