// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Scanner from '../screens/scanner/Scanner';
// import Home from '../screens/home/Home';
// import HomeIcon from '../assets/icons/homeIcon.png'
// import QrIcon from '../assets/icons/qrIcon.png'
// import HistoryIcon from '../assets/icons/historyIcon.png'
// import ProfileIcon from '../assets/icons/profileIcon.png'
// import SettingIcon from '../assets/icons/settingIcon.png'
// import TestTables from '../screens/tables/TestTables';

// const Tab = createBottomTabNavigator();
// const CustomTabBarButton = ({ childen, onPress }) => (
//   <TouchableOpacity
//     style={{
//       top: -30,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//     onPress={onPress}
//   >
//     <View style={{
//       width: 80,
//       height: 80,
//       borderRadius: 60,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#FFFFFF',
//     }}>

//       <View style={{
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         backgroundColor: '#008807',
//       }}>
//         <Image
//           source={QrIcon}
//           resizeMode="contain"
//           style={{
//             width: 70,
//             height: 45,
//             marginHorizontal: 'center',
//             marginVertical: 10,
//             tintColor: '#FFFFFF'
//           }}
//         />
//         {childen}
//       </View>
//     </View>

//   </TouchableOpacity>
// )
// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           height: 70,
//           paddingHorizontal: 5,
//           backgroundColor: '#05770B',
//           borderRadius: 1,
//           position: 'absolute',
//           borderTopWidth: 2,
//         },
//       })}
//     >
//       {/* <Tab.Screen name='Welcome' component={Welcome} /> */}
//       <Tab.Screen
//         name='Home'
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
//               <Image
//                 source={HomeIcon}
//                 resizeMode="contain"
//                 style={{
//                   width: 40,
//                   height: 40,
//                   tintColor: focused ? '#748c94' : '#FFFFFF'
//                 }}
//               />
//               <Text style={{ color: focused ? '#748c94' : '#FFFFFF', fontSize: 15 }}>Home</Text>
//             </View>
//           ),
//         }} />
//       <Tab.Screen
//         name='History'
//         component={''}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
//               <Image
//                 source={HistoryIcon}
//                 resizeMode="contain"
//                 style={{
//                   width: 40,
//                   height: 40,
//                   tintColor: focused ? '#748c94' : '#FFFFFF'
//                 }}
//               />
//               <Text style={{ color: focused ? '#748c94' : '#FFFFFF', fontSize: 15 }}>History</Text>
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name='Scanner'
//         component={Scanner}
//         options={{
//           // headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             // <View>
//             // <Image
//             //   source={QrIcon}
//             //   resizeMode="contain"
//             //   style={{
//             //     width: 40,
//             //     height: 40,
//             //     tintColor: '#FFFFFF'
//             //   }}
//             // />
//             <Text style={{ color: focused ? '#748c94' : '#FFFFFF', fontSize: 15 }}>Scan</Text>
//             // </View>
//           ),
//           tabBarButton: (props) => (
//             <CustomTabBarButton {...props} />
//           )
//         }}
//       />

//       <Tab.Screen
//         name='Profile'
//         component={''}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
//               <Image
//                 source={ProfileIcon}
//                 resizeMode="contain"
//                 style={{
//                   width: 40,
//                   height: 40,
//                   tintColor: focused ? '#748c94' : '#FFFFFF'
//                 }}
//               />
//               <Text style={{ color: focused ? '#748c94' : '#FFFFFF', fontSize: 15 }}>Profile</Text>
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name='Setting'
//         component={''}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
//               <Image
//                 source={SettingIcon}
//                 resizeMode="contain"
//                 style={{
//                   width: 40,
//                   height: 40,
//                   tintColor: focused ? '#748c94' : '#FFFFFF'
//                 }}
//               />
//               <Text style={{ color: focused ? '#748c94' : '#FFFFFF', fontSize: 15 }}>Setting</Text>
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen name='TestTables' component={TestTables} options={{
//         tabBarIconStyle: { display: 'none' },
//         tabBarButton: () => null
//       }} />
//     </Tab.Navigator>

//   )
// }

// export default Tabs