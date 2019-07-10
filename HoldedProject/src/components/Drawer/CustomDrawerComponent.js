/**
 * Created by abisi on 2019-07-02
 */
import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {ScrollView,StyleSheet} from "react-native";


const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CustomDrawerContentComponent;