import { StyleSheet } from "react-native";
export const styler = StyleSheet.create({
  root: {
    flexDirection: "row",  
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    width: 200,            
    borderRadius: 20,
    paddingLeft: 25,
    fontSize: 18,          
  },
  unit: {
    marginLeft: 10,        
    fontSize: 24,          
  },
});
