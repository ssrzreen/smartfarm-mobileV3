import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const BottomTab = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const { activeIcon, inactiveIcon } = route.params
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'green'}}>
                            <Image source={activeIcon} style ={{height: 35, width: 35}} />
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {label}
                            </Text>
                        </View>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
export default BottomTab
