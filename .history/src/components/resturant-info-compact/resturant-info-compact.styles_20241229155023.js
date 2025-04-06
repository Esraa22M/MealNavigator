import styled from "styled-components/native";
import { Image, View } from "react-native";

import WebView from "react-native-webview";
import { Card } from "react-native-paper";
export const ItemContainer = styled(Card)`
	padding: 10px;
	width: 150px;
	align-items: center;
	min-height:200px;
	background-color:white;
	justify-content:space-between;
`;
export const CompactWebviewWrapper = styled(View)`
	border-radius: 10px;
    width: 120px;
	height: 100px;
	overflow: "hidden";

`;
export const CompactWebview = styled(WebView)`
	width: 120px;
	height: 100px;
	
`;
export const CompactInfoImage = styled(Image)`
	border-raduis: 10px;
	width: 120px;
	height: 100px;
`;
