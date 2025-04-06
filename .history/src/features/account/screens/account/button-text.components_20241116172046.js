import { Text, View } from "react-native";
export const ButtonText = ()=>{return <RowView style={{justifyContent:'center', alignItems:'center'}}>
<Text style={{color:colors.brand.secondary}}>Login</Text>
<Spacer postion={"left"} size="small"><SimpleLineIcons name="login" color={colors.brand.secondary} /></Spacer>
</RowView>}