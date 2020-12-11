import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	BackgroundServices: {
		overflow: 'hidden',
		marginBottom: 10,
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
	}
	// SelectContent: {},
});
