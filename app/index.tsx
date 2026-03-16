import Header from '@/components/Header';
import { RootView } from '@/components/RootView';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';


export default function Screen() {
  const { colorScheme } = useColorScheme();

  const [active, setActive] = useState(false);

  return (
    <RootView>

      {/* Header */}
      <Header 
        title="Showcase"
        active={active}
        setActive={setActive}
      />

    </RootView>
  );
}
