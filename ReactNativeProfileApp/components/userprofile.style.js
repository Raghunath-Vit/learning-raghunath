import { StyleSheet } from "react-native";

export const styler= StyleSheet.create({
  container:{
    padding:20,
    backgroundColor:"white",
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:8,
    },
    shadowRadius:11.14,
    elevation:17,
  },
  header:{
    flexDirection:"row",
  },
  name:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:5,
  },
  texts:{
    flex:1,
  },
  profileImg:{
    width:70,
    height:70,
  },
  social:{
    flexDirection:"row",
    justifyContent:"center",
    padding:20,
  },
  socialBtn:{
    padding:10,
    backgroundColor:"#eee",
  },
});