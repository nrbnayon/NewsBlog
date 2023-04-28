import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/Dashboard/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
import CounterScreen from "./src/Screens/CounterScreen";
import Login from "./src/Screens/Login/Login";
import SignUp from "./src/Screens/Signup/Signup";
import ForgetPassword from "./src/Screens/ForgetPassword/Forgetpassword";
feature/nkh/backend-api
const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={SignUp} />
        <stack.Screen name="Counter" component={CounterScreen} />
        <stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
