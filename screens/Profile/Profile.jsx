import React, { useEffect } from "react";
import { View } from "react-native";
import { Button, Card, Avatar, Title, Paragraph } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { isSignedIn } from "../../redux/actions";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

function Profile({ navigation }) {
  const dispatch = useDispatch();
  let fullname = useSelector((state) => state.fullname);
  let phonenumUser = useSelector((state) => state.phonenumUser);
  let userId = useSelector((state) => state.userId);
  function HandleLogOut() {
    console.log("logout run");
    dispatch(isSignedIn(false, "", ""));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Card>
        <Card.Title
          title={"User ID:" + userId}
          subtitle="Customer"
          left={LeftContent}
        />
        <Card.Content>
          <Title>{fullname}</Title>
          <Paragraph>Phone number: {phonenumUser}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://cdn.icon-icons.com/icons2/1622/PNG/512/3741756-bussiness-ecommerce-marketplace-onlinestore-store-user_108907.png",
          }}
        />
        <Card.Actions>
          <Button onPress={() => HandleLogOut()}>Log out</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default Profile;
