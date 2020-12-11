import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { Images } from '@images';
import { Style } from '@common';
import { StyleInternal } from './styles';

export default function SecondRoute() {
	const navigation = useNavigation();
	return (
		<View>
			<View style={[StyleInternal.SelectList]}>
				<View style={[StyleInternal.SelectTop]}>
					<Text style={[StyleInternal.SelectTopTime]}>Jan 11, 2019, 8:46 am</Text>
					<Text style={[StyleInternal.SelectTopPrice]}>350 .KR</Text>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_wash} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>Pedicure Luksus (350 .KR)</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_calender} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>Thursday, March 28 </Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_time} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>10:00 am</Text>
						<Text style={[StyleInternal.SelectText]}>35 min</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_women} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>Ms. Chang</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectBottom]}>
					<View style={[StyleInternal.SelectBottomLeft]}>
						<TouchableOpacity
							style={[StyleInternal.ButtonModify]}
							onPress={() => navigation.navigate('BookingDetailsPast')}
						>
							<Text style={[StyleInternal.ButtonModifyText]}>Re-book</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[StyleInternal.ButtonCancel]}>
							<Text style={[StyleInternal.ButtonCancelText]}>DELETE</Text>
						</TouchableOpacity>
					</View>
					<View style={[StyleInternal.SelectBottomRight]}>
						<TouchableOpacity style={[StyleInternal.ButtonUnconfirmed]}>
							<Text style={[StyleInternal.ButtonUnconfirmedText]}>Cancelled</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={[StyleInternal.SelectList]}>
				<View style={[StyleInternal.SelectTop]}>
					<Text style={[StyleInternal.SelectTopTime]}>Jan 09, 2019, 5:30 am</Text>
					<Text style={[StyleInternal.SelectTopPrice]}>400 .KR</Text>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_wash} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>Manicure Med Shellac (400 .KR)</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_calender} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>Wednesday, March 27</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_time} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>6:30 am</Text>
						<Text style={[StyleInternal.SelectText]}>40 min</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectItem]}>
					<View style={[StyleInternal.SelectIcon]}>
						<Image style={[Style.image, StyleInternal.SelectImage]} source={Images.ic_women} />
					</View>
					<View style={[StyleInternal.SelectContent]}>
						<Text style={[StyleInternal.SelectText]}>Ms. Jenifer</Text>
					</View>
				</View>
				<View style={[StyleInternal.SelectBottom]}>
					<View style={[StyleInternal.SelectBottomLeft]}>
						<TouchableOpacity
							style={[StyleInternal.ButtonModify]}
							onPress={() => navigation.navigate('BookingDetailsPast')}
						>
							<Text style={[StyleInternal.ButtonModifyText]}>Re-book</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[StyleInternal.ButtonCancel]}>
							<Text style={[StyleInternal.ButtonCancelText]}>DELETE</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<TouchableOpacity style={[StyleInternal.ButtonConfirm]}>
				<Text style={[StyleInternal.ButtonConfirmText]}>Reserve Appointment Now</Text>
			</TouchableOpacity>
		</View>
	);
}
