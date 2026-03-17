import Header from '@/components/Header';
import { RootView } from '@/components/RootView';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { KeyboardOff } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

export default function Screen() {
  const { colorScheme } = useColorScheme();

  const [active, setActive] = useState<boolean>(false);
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const inputAccessoryViewID = 'uniqueID';

  const onShowKeyboard = () => {
    setInputFocus(true);
  }

  const onDismissKeyboard = () => {
    setInputFocus(false);
    Keyboard.dismiss();
  }

  return (
    <RootView className='relative flex-1'>

      {/* Content */}
      <View className="flex-1">
        {/* Header */}
        <Header 
          title="Showcase"
          active={active}
          setActive={setActive}
        />

        {/* Body */}
        <Card className={cn(
          'border-0 shadow-none',
          'px-4 py-1 gap-2',
        )}>
          {/* Title */}
          <Text className={cn(
            "text-4xl",
            "font-semibold"
          )}>
            Showcase
          </Text>


          {/* Search bar */}
          <Input 
            placeholder='Components' 
            value={search}
            onChangeText={(v) => setSearch(v)}
            onPress={onShowKeyboard}
            onBlur={onDismissKeyboard}
            returnKeyType="done"
            onSubmitEditing={onDismissKeyboard}
          />
        </Card>
      </View>


      {/* Hide keyboard button */}
      <KeyboardAvoidingView 
        behavior="padding" 
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} 
      >
        {inputFocus && (
          <Animated.View 
            entering={FadeInDown.duration(300)}
            exiting={FadeOutDown.duration(100)}
            className="flex-row justify-end p-4"
          >
            <Button
              variant="outline"
              onPress={onDismissKeyboard}
              className={cn(
                "rounded-full",
              )}
            >
              <Icon as={KeyboardOff} size={20} />
            </Button>
          </Animated.View>
        )}
      </KeyboardAvoidingView>
    </RootView>
  );
}
