import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	AccountContent: {},
	AccountTop: {
		marginTop: -15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	AccountInfo: {
		maxWidth: '60%',
	},
	AccountFullName: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '600'
	},
	AccountEmail: {
		color: '#fff',
		fontSize: 15
	},
	AccountAvatar: {
		width: 120,
		height: 120,
		backgroundColor: '#fff',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	AccountAvatarImage: {
		width: 55,
		height: 55,
		resizeMode: 'contain'
	},
	AccountAvatarEdit: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
		position: 'absolute',
		bottom: 2,
		right: 3
	},
	AccountBody: {
		marginTop: 15
	},
	AccountItem: {
		borderBottomColor: '#edece7',
		borderBottomWidth: 1,
		position: 'relative',
		paddingVertical: 8,
		paddingRight: 40,
	},
	AccountLabel: {},
	AccountLabelText: {
		color: '#737373',
		fontSize: 15,
		marginBottom: 5
	},
	AccountValue: {},
	AccountValueText: {
		color: '#000',
		fontSize: 20,
		fontWeight: '700'
	},
	AccountItemEdit: {
		width: 20,
		height: 20,
		position: 'absolute',
		top: '50%',
		right: 0
	},
	AccountItemEditImage: {
		width: 20,
		height: 20,
		resizeMode: 'contain'
	},
	AccountFooter: {},
	AccountButtonLogOut: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20
	},
	AccountButtonText: {
		color: '#ae085a',
		fontSize: 20,
		fontWeight: '700'
	},
	// Model
	AccountModel: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10,
  },
  AccountModelContent: {
		// width: '100%',
	},
	AccountModelLabel: {},
	AccountModelLabelText: {
    color: '#fff',
		fontSize: 20,
		marginBottom: 10,
  },
	AccountModelValue: {},
	AccountModelValueText: {
    color: '#fff',
		fontSize: 20,
		width: '100%',
		borderColor: '#edece7',
		borderWidth: 2,
		borderRadius: 10,
		paddingVertical: 5
  },
});
