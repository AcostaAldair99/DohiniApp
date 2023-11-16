import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from "../constants";

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

    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
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
        gap: 10
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