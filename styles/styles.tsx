import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from "../constants";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const componentStyles= StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:COLORS.lightWhite,
        width: "100%",
    },
    headerContainer:{
        flexDirection:'row',
        padding:10,
        backgroundColor:COLORS.lightWhite,
        borderColor: "#ff0000",
        borderWidth:2,
        justifyContent:'space-between',
        alignItems:'center',
        margin:10
    },
   

    searchContainer:{
      backgroundColor:COLORS.lightWhite,
      padding:10,
      borderColor:'#ff0000',
      justifyContent:'space-between',
      alignItems:'center',
      borderWidth:2,
      margin:5
    },
    searchInputContainer:{
      flexDirection:'row',
      borderColor:COLORS.black,
      borderWidth:1,
      padding:3,
      borderRadius:10,
      alignItems:'center'
    },
    searchInput:{
        flex:1,
        fontSize:18,
        color:COLORS.gray,
        borderTopColor:COLORS.white,
        borderBottomColor:COLORS.white,
        borderLeftColor:COLORS.white,
        borderWidth:1,
    },

    sectionContainer:{
        borderColor:"#ff0000",
        borderWidth:1,
        margin:10,
        padding:10,
    },
    
    menuBox:{
      flex:1,
      margin:5,
      padding:10,
      height:130,
      borderRadius:10,
      backgroundColor:COLORS.blue,
      flexDirection:'column'
    },
    menuBoxImage:{
      width:60,
      height:60,
      resizeMode:'cover',
      borderRadius:10
    },
    menuBoxTitle:{
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        fontWeight:'700'
    },

    latestSearchesContainer:{
      margin:3,
      height:900,
      borderColor:COLORS.white,
      borderWidth:2
    },
    
    separatorLine:{
      height: 2,
      width: '100%',
      backgroundColor:COLORS.black, 
      marginTop: 10,
      marginBottom: 10,
      opacity:0.3
    },

    sectionTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight:'700'
    },

    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding:10,
        margin:10,
        borderColor:"#ff0000",
        borderWidth:2
    },
    footerTitle:{
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight:'700',
        opacity:0.4
    },

    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    headerButton:{
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color:COLORS.primary
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export {styles,componentStyles};