import { StyleSheet } from 'react-native';

export const StyleInternal = StyleSheet.create({
	// style for PromotionNews
	NotificationsList: {
		backgroundColor: '#fff',
		paddingBottom: 10,
		marginBottom: 10,
		paddingLeft: 10,
		borderColor: '#edece7',
		borderWidth: 1,
		//box shadow
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
	NotificationItem: {
		flexDirection: 'row'
	},
	NotificationImage: {
		width: '10%',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center'
	},
	NotificationImageMain: {
		width: 30,
		height: 30,
		resizeMode: 'cover'
	},
	NotificationImageActive: {
		width: 15,
		height: 15,
		resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: 15,
	},
	NotificationContent: {
		width: '90%',
		paddingHorizontal: 10,
		paddingVertical: 14,
		borderBottomColor: '#edece7',
		borderBottomWidth: 1,
		justifyContent: 'center'
	},
	NotificationTitle: {
		fontWeight: '700',
		fontSize: 17
	},
	NotificationText: {
    fontSize: 13,
    color: '#585858',
	}
});
