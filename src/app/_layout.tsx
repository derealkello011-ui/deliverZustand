import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="screens/Home"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="screens/Inbox"
        options={{
          title: 'Inbox',
          headerBackTitle: 'Back'
        }}
      />
    </Stack>
  );
}
