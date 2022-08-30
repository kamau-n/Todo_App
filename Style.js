import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

        backgroundColor: "silver"
    },
    header: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 100,
        color: "yellow",





    },
    top: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5



    },
    logo: {
        fontSize: 20

    },
    sb: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignItems: "center",
        overflow: "hidden",

    },
    sb_field: {
        color: "black",
        flex: 1,

    },
    header2: {
        marginLeft: 5,
        fontSize: 15,
        marginVertical: 18

    },

    body: {
        borderTopColor: "#36454F",
        borderTopWidth: 1,
        margin: 5



    },
    tasks: {

        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "white"




    },
    task_text: {
        fontSize: 15,
        fontWeight: "900",
        textDecorationLine: "line-through"




    }


})