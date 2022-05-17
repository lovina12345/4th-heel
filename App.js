import { StyleSheet,Text,View,ScrollView,SafeAreaView,FlatList,Image} from "react-native";
// import { FontAwesome, MaterialCommunityIcons, Ionicons,} from "@expo/vector-icons";
import React from "react";


const App = () => {
  const students = [
     {
       name: "Sandals Heels",
       email: "$50",
     profile: require("./assets/6.jpg"),
     },
    

    {
      name: "Block heels",
      email: "70$",
      profile: require("./assets/7.jpg"),
    },

    {
      name: "slippers heels",
      email: "$60",
      profile: require("./assets/8.jpg"),
    },

    {
      name: "Block heel",
      email: "$80",
      profile: require("./assets/9.jpg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={students}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 4,
              padding: 16,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                flex: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.profile}
                style={{ height: 140, width: 100, borderRadius: 15 }}
              />
            </View>
            <View
              style={{
                flex: 40,
                justifyContent: "space-evenly",
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20,}}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 16 , paddingLeft: 40,}}>{item.email}</Text>
            </View>
            <View
              style={{
                flex: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {/* <FontAwesome name="phone" size={24} color="#45bcff" />
              <MaterialCommunityIcons
                name="message-processing"
                size={24}
                color="#45bcff"
              />
              <Ionicons name="ios-ellipsis-vertical" size={24} color="black" /> */}
            </View> 
          </View>
        )}
      />  
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});


