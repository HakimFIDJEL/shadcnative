import { cn } from "@/lib/utils";
import { Eclipse } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { Text } from "./ui/text";

type Props = {
    title: string,
    active: boolean,
    setActive: (a: boolean) => void,
}

export default function Header({ title, active, setActive }: Props) {
    return (
        <View className={cn(
            'flex items-center flex-row align-middle justify-between',
            'px-2 py-1',

            active && 'border-b border-border'
        )}>
            <View className="size-9"/>
            {active && (
                <Text className={cn(
                    'text-foreground font-semibold',
                    
                )}>
                    {title}
                </Text>
            )}
            <ThemeToggle className="self-end"/>
        </View>
    );
}

type ThemeToggleProps = {
    className?: string,
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className={cn(
        'size-9 rounded-full',
        className
        )}>
      <Icon as={Eclipse} className="size-5" />
    </Button>
  );
}
