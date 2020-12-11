import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
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
		marginBottom: 8,
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
	SelectItem: {
		flexDirection: 'row',
		paddingBottom: 7,
		paddingTop: 7
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
	SelectTextSmall: {
		color: '#000'
	},
	SelectBottom: {
		borderTopWidth: 1,
		borderTopColor: '#d1cbdd',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingBottom: 9,
		paddingTop: 9,
		marginTop: 8
	},
	SelectBottomLeft: {
		flexDirection: 'row'
	},
	ButtonModify: {
		marginTop: 5,
		marginBottom: 5,
	},
	ButtonModifyText: {
		color: '#ae085a',
		fontSize: 18,
		paddingRight: 18,
	},
	ButtonCancel: {
		marginTop: 5,
		marginBottom: 5,
	},
	ButtonCancelText: {
		color: '#000',
		fontSize: 18
	},
	SelectBottomRight: {},
	ButtonUnconfirmed: {},
	ButtonUnconfirmedText: {
		color: '#fff',
		fontSize: 18,
		borderRadius: 7,
		backgroundColor: '#b0afa9',
		paddingHorizontal: 15,
		paddingVertical: 6
	},
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
