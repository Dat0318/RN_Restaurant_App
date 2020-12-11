import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	PromotionList: {},
	PromotionItem: {
		marginTop: 10,
		maxHeight: 270,
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
	PromotionItemImage: {
		maxHeight: 200,
		resizeMode: 'cover'
	},
	PromotionItemText: {
		fontSize: 16,
		fontWeight: '700',
		marginTop: -55,
		paddingVertical: 2,
		paddingHorizontal: 10
	},
	PromotionTimeArea: {
		position: 'relative'
	},
	PromotionTime: {
		position: 'absolute',
		top: 10,
		left: 10,
		maxWidth: 215,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'linear-gradient(rgba(104, 105, 128, 0.7), transparent 0%)',
		paddingVertical: 2,
		paddingHorizontal: 10,
		borderRadius: 12,
		flex: 1,
		width: '100%'
	},
	PromotionTimeText: {
		color: '#fff',
		fontSize: 25,
		fontWeight: '700',
		flex: 1,
    width: '100%',
		flexWrap: 'nowrap'
	},
	PromotionTimeTextSmall: {
		color: '#fff',
		fontSize: 10,
		flex: 1,
		width: '100%',
		flexWrap: 'nowrap'
	},
	PromotionDays: {
		flex:1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
	},
	PromotionHours: {
		flex:1,
    flexDirection: 'column',
	},
	PromotionMinutes: {
		flex:1,
		flexDirection: 'column',
	},
	PromotionSecond: {
		flex:1,
		flexDirection: 'column',
	}
	// PromotionList: {},
});
