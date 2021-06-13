import React from "react";

function Profile({ naivgation }) {
  return (
    <View>
      <Text>Customer Name: {}</Text>
      <Text>Customer Phone Number: {}</Text>
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}

export default Profile;
