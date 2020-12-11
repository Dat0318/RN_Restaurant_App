import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	ServicesList: {
		// borderRadius: 12,
		// backgroundColor: 'red',
		// overflow: 'hidden'
	},
	InputItem: {
		width: '100%',
		backgroundColor: '#fff',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	InputSearch: {
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(164, 151, 188, 0.6)',
		paddingVertical: 7,
		paddingHorizontal: 15
	},
	'InputSearch::placeholder': {
		fontSize: 25,
		fontWeight: 'bold'
	},
	TechnicianHeader: {
		marginHorizontal: 15,
		marginVertical: 10
	},
	// Select List
	BackgroundServices: {
		marginBottom: -15
	},
	TechnicianList: {
		borderColor: '#f3f3f3',
		borderWidth: 1,
		marginBottom: 20,
		height: 470,
		// box shadow
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
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
	TechnicianItem: {
		marginHorizontal: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#d1cbdd',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingBottom: 10,
		paddingTop: 10,
		marginBottom: 8
	},
	TechnicianItemLeft: {},
	TechnicianItemLeftText: {
		color: '#3c2b57',
		fontSize: 20,
		fontWeight: '700'
	},
	TechnicianItemRight: {},
	TechnicianItemRightIcon: {},
	TechnicianItemRightImage: {
		width: 25,
		height: 25,
		resizeMode: 'contain'
	},
	ButtonConfirm: {
		paddingVertical: 13,
		borderRadius: 50,
		backgroundColor: '#c3105f',
		// marginVertical: 15,
		marginHorizontal: 15,
		backgroundColor: 'red'
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
