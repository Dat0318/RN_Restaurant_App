import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
	// common
	text: {
		color: '#fff',
		fontFamily: 'Myriad Pro',
		fontSize: 20,
		marginBottom: 5
	},
	textSmall: {
		fontSize: 15
	},
	buttonDefault: {
		backgroundColor: '#fff',
		padding: 7,
		paddingHorizontal: 20,
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center'
	},
	fontWeight: {
		fontWeight: 'bold'
	},
	borderRadius: {
		borderRadius: 12
	},
	image: {
		resizeMode: 'cover',
		width: '100%',
		height: '100%'
	},
	turnAround: {
		transform: [{ rotate: '180deg' }]
	},
	textUnderLine: {
		textDecorationLine: 'underline'
	},
	// Slider
	wrapper: {
		borderRadius: 12
		// overflow: 'hidden',
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		overflow: 'hidden'
	},
	imgBackground: {
		backgroundColor: 'transparent',
		position: 'absolute',
		resizeMode: 'cover'
	},
	// Common style for Home collection and dot from in styleInternal
	background_home: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		position: 'relative'
	},
	HomeCollectionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	HomeLeft: {
		position: 'relative'
	},
	heart_active: {
		position: 'absolute',
		right: -3,
		top: -5,
		width: 12
	},
	icon: {
		width: 25,
		height: 50,
		resizeMode: 'contain',
		position: 'relative'
	},
	notification: {},
	HomeCenter: {},
	HomeGroupButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#562b82',
		borderRadius: 50,
		overflow: 'hidden',
		paddingVertical: 2,
		paddingHorizontal: 2,
		width: 300,
		color: '#fff'
	},
	HomeButton: {
		paddingHorizontal: 20,
		paddingVertical: 7,
		borderRadius: 50
	},
	HomeButtonActive: {
		backgroundColor: '#c51160'
	},
	HomeButtonText: {
		color: '#fff',
		fontSize: 15,
		minWidth: 90,
		textAlign: 'center'
	},
	Category: {
		fontSize: 30,
		color: '#fff'
	},
	HomeRight: {
		position: 'relative'
	},
	notification_active: {
		position: 'absolute',
		right: 1,
		top: -9,
		width: 10
	},
	HomeCollectionBody: {
		// width: '100%',
	},
	Banner: {
		maxHeight: 180,
		height: '100%'
	},
	imageBanner: {
		overflow: 'hidden'
	},
	CollectionTitle: {
		fontSize: 30,
		paddingVertical: 10,
		marginTop: 5
	},
	Collection: {
		flexDirection: 'row',
		maxHeight: 300
	},
	CollectionLeft: {
		flex: 1,
		marginRight: 12
	},
	CollectionRight: {
		flex: 1,
		flexDirection: 'column'
	},
	CollectionTop: {
		flex: 2,
		marginBottom: 12
	},
	CollectionBottom: {
		flex: 1,
		flexDirection: 'row'
	},
	CollectionBottomLeft: {
		flex: 1,
		marginRight: 12
	},
	CollectionBottomRight: {
		flex: 1,
		position: 'relative'
	},
	CollectionMorePicture: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'linear-gradient(rgba(142, 125, 193, 0.6), transparent 0%)',
		borderRadius: 12
	},
	CollectionNumber: {
		color: '#fff',
		fontSize: 28,
		opacity: 1
	},
	collection_1: {},
	collection_2: {},
	collection_3: {},
	collection_4: {},
	HomeCollectionFooter: {
		position: 'relative'
	},
	FooterDot: {
		position: 'absolute',
		bottom: 3,
		backgroundColor: '#fff2e5',
		borderRadius: 50,
		width: 7,
		height: 7,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	Booking: {
		width: 70,
		height: 70,
		borderRadius: 50,
		backgroundColor: '#c51160',
		borderWidth: 6,
		borderColor: '#f3c5ca',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: -25
	},
	BookingText: {
		color: '#fff',
		fontSize: 15,
		flexWrap: 'nowrap',
		fontWeight: '600'
	},
	ic_home_footer: {},
	ic_nail_footer: {
		width: 25,
		height: 25
	},
	ic_blog_footer: {
		width: 25,
		height: 25
	},
	ic_person_footer: {
		width: 25,
		height: 25
	},
	CollectionModal: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(46, 27, 70, 0.6)',
		zIndex: 0
	},
	close: {
		width: 20,
		height: 20,
		position: 'absolute',
		top: 10,
		left: 10,
		right: 0,
		// right: 'auto',
		zIndex: 2
	},
	CollectionViewerImage: {
		width: '100%',
		height: '50%',
		position: 'absolute',
		top: 50,
		left: 0,
		right: 0,
		transform: [{ translateY: 100 }],
		zIndex: 2
	},
	// Demo: {},
	// Demo: {},
	// Splash
	background: {
		flex: 1,
		resizeMode: 'cover'
		// position: 'relative',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 90,
		height: 145
	},
	title: {
		fontWeight: 'bold',
		fontSize: 32,
		marginTop: 20
	},
	buttonCenter: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10
	},
	buttonBottom: {
		backgroundColor: '#c51160',
		padding: 7,
		paddingHorizontal: 20,
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonText: {
		marginRight: 10
	},
	arrowRight: {
		width: 20,
		height: 10
	},
	// LogIn
	LogInContent: {
		paddingHorizontal: 30
	},
	LogInTitle: {
		fontSize: 40,
		alignSelf: 'flex-start',
		marginLeft: -12
	},
	LogInBox: {
		borderWidth: 1,
		borderColor: '#fff',
		borderStyle: 'solid',
		backgroundColor: '#fff',
		paddingVertical: 20,
		paddingHorizontal: 10,
		position: 'relative',
		marginTop: 20,
		borderRadius: 10,
		marginLeft: 0
	},
	boxItem: {
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10
	},
	boxImage: {
		marginLeft: 10,
		width: 15,
		resizeMode: 'contain'
	},
	boxInput: {
		minWidth: '100%',
		paddingLeft: 10
	},
	boxNote: {
		color: '#b32668',
		marginTop: 15,
		marginLeft: 8
	},
	buttonBox: {
		position: 'absolute',
		right: 20,
		bottom: -32
	},
	buttonBottomBox: {
		paddingHorizontal: 35,
		paddingVertical: 17
	},
	button_content: {
		padding: 30
	},
	buttonSpaceBetween: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginVertical: 10
	},
	buttonImage: {
		width: 20,
		height: 30,
		resizeMode: 'contain'
	},
	buttonGoogle: {
		width: 40
	},
	textBlue: {
		color: '#134fa0',
		marginLeft: 20
	},
	textOrange: {
		color: '#ff552a',
		marginLeft: 20
	},
	LogInFooter: {
		flexDirection: 'column',
		paddingHorizontal: 20
	},
	LogInFooterNote: {
		marginTop: 10,
		marginBottom: 30,
		textAlign: 'center'
	},
	// Deal Style
	HomeDealHeader: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15
	},
	DealLeft: {
		position: 'absolute',
		left: -50,
		translateX: 50
	},
	ArrowLeft: {
		width: 35,
		height: 30,
		resizeMode: 'contain'
	},
	DealCenter: {},
	DealCenterText: {
		color: '#fff',
		fontSize: 30,
		fontWeight: '600'
	},
	DealRight: {},
	DealRight: {
		position: 'absolute',
		right: 50,
		translateX: 50
	},
	CloseLeft: {
		height: 20,
		width: 20,
		resizeMode: 'contain',
	},
	// services
	Background_service: {},
	Service_Content: {
		paddingVertical: 10,
		paddingHorizontal: 15
	}
	// end style
});
