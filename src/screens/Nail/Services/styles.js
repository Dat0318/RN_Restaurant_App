import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	ServicesBannerContain: {
		position: 'relative'
	},
	ServicesBanner: {
		borderRadius: 12,
		height: 120
	},
	ServicesBannerContent: {
		position: 'absolute',
		top: 50,
		left: 50,
		translateX: 50,
		translateY: -25
	},
	ServicesBannerText: {
		color: '#fff',
		fontSize: 24,
		fontWeight: '600',
		textAlign: 'center'
	},
	BackgroundServices: {
		backgroundColor: '#fff',
		borderRadius: 12,
		overflow: 'hidden',
		marginBottom: 10
	},
	ServicesList: {
		marginTop: 5
	},
	ServicesItem: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#edece7'
	},
	borderNone: {
		borderBottomWidth: 0
	},
	ServicesItemTitle: {
		width: '50%',
		paddingHorizontal: 10
	},
	ServicesItemText: {
		maxWidth: '80%',
		fontWeight: '700'
	},
	ServicesItemContent: {
		width: '35%',
		color: '#ae085a'
	},
	ServicesItemPrice: {
		color: '#ae085a',
		textAlign: 'right'
	},
	ServicesItemTime: {
		color: '#dbdbdb',
		textAlign: 'right'
	},
	ServicesItemIcon: {
		width: '15%',
		marginTop: 10,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	ServicesItemImageIcon: {
		width: 21,
		height: 21,
		resizeMode: 'cover'
	},
	// Select List
	SelectList: {
		paddingHorizontal: 15,
		borderColor: '#f3f3f3',
		borderWidth: 1,
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
		elevation: 12
	},
	ButtonInvisible: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 10,
		paddingBottom: 5
	},
	ButtonInvisibleImage: {
		width: 33,
		height: 15,
		resizeMode: 'contain'
	},
	SelectItem: {
		flexDirection: 'row',
		paddingBottom: 6,
		paddingTop: 6
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
		alignItems: 'center'
	},
	SelectText: {
		color: '#ae085a',
		fontSize: 16,
		fontWeight: '600'
	},
	SelectTextSmall: {
		color: '#000',
		opacity: 0.6
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
	ButtonConfirm: {
		paddingVertical: 10,
		width: '100%',
		borderRadius: 50,
		backgroundColor: '#c3105f',
		marginTop: 10,
		marginBottom: 10
	},
	ButtonConfirmText: {
		color: '#fff',
		fontSize: 17,
		textAlign: 'center',
		opacity: 0.85
	}
	// SelectContent: {},
});
