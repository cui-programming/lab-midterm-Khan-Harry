import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';

/**
 * Custom/TeacherMessage
 * Displays a short message or instruction for students.
 */
export default function TeacherMessage() {
  return (
    <View style={styles.teacherMsgBox}>
      <Text style={styles.teacherMsgText}>
      </Text>
    </View>
  );
}
