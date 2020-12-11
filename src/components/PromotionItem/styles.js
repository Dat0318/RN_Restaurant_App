import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews

	PromotionItemImage: {
		maxHeight: 160,
		resizeMode: 'cover'
	},
	PromotionItemText: {
		fontSize: 16,
		fontWeight: '600',
		marginTop: 10,
		paddingVertical: 2,
		paddingHorizontal: 10
	},

	// style for PromotionNewsDetails
	Promotion: {},
	PromotionBanner: {
		maxHeight: 220,

		position: 'relative'
	},
	PromotionBannerImage: {
		maxHeight: 240,
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12
	},
	LogInArrow: {
		position: 'absolute',
		top: 15,
		left: 15,
		width: 40,
		height: 20,
		backgroundColor: 'red'
	},
	arrowRight: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	PromotionBody: {
		paddingHorizontal: 15,
		paddingVertical: 10
	},
	PromotionTitle: {
		fontSize: 20,
		fontWeight: '700'
	},
	PromotionSubTitle: {
		fontSize: 18,
		fontWeight: '700',
		marginTop: 8
	},
	PromotionContent: {
		fontSize: 17,
		marginTop: 8
	},
	PromotionImage: {
		maxHeight: 180,
		resizeMode: 'cover',
		marginTop: 15
	}
});
