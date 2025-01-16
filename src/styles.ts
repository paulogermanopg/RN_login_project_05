import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

type STYLEDPROPS = {
  bigger?: boolean;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
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

export const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<STYLEDPROPS>`
  font-size: ${(props: any) => props.bigger ? 50 : 20}px;
  color: #fff;
  font-family: AnnieUseYourTelescope-Regular;
  letter-spacing: 2px;
  margin-bottom: ${(props: any) => props.bigger ? 20 : -15}px;
`;
