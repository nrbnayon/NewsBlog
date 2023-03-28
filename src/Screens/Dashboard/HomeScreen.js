import React, { useState, useEffect } from "react";
import { Button, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

const HomeScreen = (props) => {
  const [news, setNews] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=91aa9f8762aa46b38223330261ea4c71")
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Button
            title="Go To Another Page"
            onPress={() => {
              props.navigation.navigate("List");
            }}
          />
          <Button
            title="Go To Counter Page"
            onPress={() => {
              props.navigation.navigate("Counter");
            }}
          />
          {news.map((article, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                props.navigation.navigate("Article", { article });
              }}
              style={styles.articleContainer}
            >
              <Image
                source={{ uri: article.urlToImage }}
                style={styles.articleImage}
                resizeMode="cover"
              />
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription}>{article.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => setMenuVisible(!menuVisible)}
          style={styles.menuButton}
        >
          <Icon name="menu" size={30} />
        </TouchableOpacity>

        {menuVisible && (
          <View style={styles.menuOptions}>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                props.navigation.navigate("Sports");
              }}
              style={styles.menuOption}
            >
              <Text>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                props.navigation.navigate("Politics");
              }}
              style={styles.menuOption}
            >
              <Text>Politics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                props.navigation.navigate("Social");
              }}
              style={styles.menuOption}
            >
              <Text>Social</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                props.navigation.navigate("Technology");
              }}
              style={styles.menuOption}
            >
              <Text>Technology</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity >
          <Icon name="home" size={25}  />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              props.navigation.navigate("Login");}}>
          <Icon name="person" size={25} />
</TouchableOpacity>
  </View>
</SafeAreaView>
);
};

export default HomeScreen;

const styles = {
container: {
flex: 1,
backgroundColor: "#fff",
},
scrollView: {
flex: 1,
},
contentContainer: {
padding: 16,
},
articleContainer: {
marginBottom: 16,
},
articleImage: {
width: "100%",
height: 200,
marginBottom: 8,
},
articleTitle: {
fontWeight: "bold",
fontSize: 16,
marginBottom: 4,
},
articleDescription: {
fontSize: 14,
marginBottom: 8,
},
contentContainer: {
  padding: 10,
},
menuContainer: {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
  padding: 10,
},
menuButton: {
  backgroundColor: "#f2f2f2",
  borderRadius: 20,
  padding: 10,
},
menuOptions: {
  backgroundColor: "#fff",
  borderRadius: 10,
  marginTop: 10,
  padding: 10,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
menuOption: {
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
},
menuOptionText: {
  fontSize: 18,
},
bottomNavigation: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  padding: 10,
  borderTopWidth: 1,
  borderTopColor: "#ccc",
},


};