import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	BookingText: {
		color: '#290c47',
		fontSize: 25
	},
	ServicesList: {
		marginTop: 5
	},
	// Select List
	SelectList: {
		paddingHorizontal: 15,
		borderColor: '#f3f3f3',
		borderWidth: 1,
		marginBottom: 20,
		// box shadow
		borderRadius: 10,
		backgroundColor: '#fff',
		shadowColor: '#f3f3f3',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4
	},
	SelectTop: {
		borderBottomWidth: 1,
		borderBottomColor: '#d1cbdd',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingBottom: 10,
		paddingTop: 10,
		marginBottom: 8
	},
	SelectTopTime: {
		color: '#3c2b57',
		fontSize: 20,
		fontWeight: '700'
	},
	SelectTopPrice: {
		color: '#3c2b57',
		fontSize: 20,
		fontWeight: '700'
	},
	ButtonCost: {
		position: 'relative',
		paddingVertical: 5,
		paddingLeft: 20,
		paddingRight: 15,
		width: '85%',
		borderRadius: 50,
		backgroundColor: '#3c2b57'
	},
	ButtonCostText: {
		color: '#fff',
		fontSize: 17,
		opacity: 0.75
	},
	ButtonCostClose: {
		position: 'absolute',
		top: 50,
		right: 18,
		translateY: -39
	},
	ButtonCostCloseImage: {
		width: 12,
		height: 12,
		resizeMode: 'cover'
	},
	SelectItem: {
		flexDirection: 'row',
		paddingBottom: 10,
		paddingTop: 10
	},
	SelectAddItem: {
		paddingBottom: 0,
		paddingTop: 0
	},
	SelectAddText: {
		color: '#ae085a',
		fontSize: 18,
		fontWeight: '600'
	},
	SelectIcon: {
		width: '10%'
	},
	SelectImage: {
		width: 25,
		height: 25,
		resizeMode: 'contain'
	},
	SelectContent: {
		width: '90%',
		marginRight: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	SelectText: {
		color: '#000',
		fontSize: 18,
		fontWeight: '600'
	},
	SelectChangeText: {
		color: '#888195'
	},
	SelectTextSmall: {
		color: '#000'
	},
	SelectBottom: {
		borderTopWidth: 1,
		borderTopColor: '#d1cbdd',
		paddingBottom: 9,
		paddingTop: 9,
		marginTop: 8
	},
	BottomItem: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingBottom: 9
	},
	BottomItemLeft: {},
	BottomItemLeftText: {
		color: '#000',
		opacity: 0.7,
		fontSize: 18,
		paddingRight: 18
	},
	BottomItemRight: {},
	BottomItemRightText: {
		fontSize: 18,
		color: '#000',
		opacity: 0.9
	},
	RedColor: {
		color: '#ae085a',
		fontWeight: '700'
	},
	// Button confirm
	ButtonConfirm: {
		paddingVertical: 13,
		width: '100%',
		borderRadius: 50,
		backgroundColor: '#c3105f',
		marginBottom: 30
	},
	ButtonConfirmText: {
		color: '#fff',
		fontSize: 17,
		textAlign: 'center'
	}
	// PromotionList: {},
	// PromotionList: {},
	// PromotionList: {},
});
