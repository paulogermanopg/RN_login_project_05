import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Eye = styled.View`
  margin-bottom: 20px;
`;

export const AnimatedPupil = styled(Animated.View)`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 10px;
`;

export const StyledInput = styled.TextInput`
  width: 80%;
  padding: 10px;
  margin-vertical: 10px;
  border: 1px solid gray;
`;
