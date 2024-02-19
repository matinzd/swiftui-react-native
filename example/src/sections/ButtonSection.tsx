import React from 'react';
import {
  Button,
  Link,
  List,
  ShareLink,
  Text,
  useBinding,
} from 'swiftui-react-native';

export const ButtonSection = () => {
  const showAlert = useBinding(false);
  return (
    <List
      style={{ flex: 1 }}
      alert={{
        isPresented: showAlert,
        title: 'SwiftUI is Cool',
        message: 'So is React Native!',
        actions: [{ title: 'Cancel' }],
      }}
    >
      <Button
        title="Bordered"
        action={showAlert.toggle}
        buttonStyle="bordered"
      />
      <Button
        title="Borderless"
        action={showAlert.toggle}
        buttonStyle="borderless"
      />
      <Button
        title="Bordered Prominent"
        action={showAlert.toggle}
        buttonStyle="borderedProminent"
      />
      <Button buttonStyle="plain" title="Plain" action={showAlert.toggle} />
      <ShareLink item="https://www.apple.com" />
      <Link destination="https://www.apple.com">
        <Text>Link</Text>
      </Link>
    </List>
  );
};
