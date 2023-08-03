import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function QRCodeScreen() {
  return (
    <View style={styles.screen}>
        <Text>QR Code scanner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default QRCodeScreen