// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import styles from '../styles/styles'

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// import { Colors } from 'react-native/Libraries/NewAppScreen';

// import {
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// export default Section;