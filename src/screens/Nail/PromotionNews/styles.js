import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
  // header
  PromotionBackground: {
    position: 'relative',
  },
  PromotionHeader: {
    position: 'absolute',
    width: '100%',
    left: 15
  },
  // Tab view
  tabBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		backgroundColor: '#573183',
		borderRadius: 50,
		paddingVertical: 2,
		marginBottom: 10,
		width: '60%',
		alignSelf: 'center'
  },
  tabItem: {
		flex: 1,
    alignItems: 'center',
		borderRadius: 50,
		paddingVertical: 6,
		marginHorizontal: 4,
		textAlign: 'center',
		color: '#fff'
	},
	tabItemActive: {
		backgroundColor: '#c3105f',
	},
  // style for PromotionNews
  PromotionList: {},
  PromotionItem: {
    marginTop: 10,
    maxHeight: 220,
    // box shadow
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#f3f3f3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  PromotionItemImage: {
    maxHeight: 160,
    resizeMode: 'cover',
  },
  PromotionItemText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  // PromotionList: {},
  // PromotionList: {},
  // PromotionList: {},
});
