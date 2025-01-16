import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

type STYLEDPROPS = {
  bigger?: boolean;
  left?: boolean;
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
  padding: 16px;
  margin-vertical: 10px;
  border: 1px solid gray;
  border-radius: 16px;
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

export const Mono = styled.View`
  display: flex;
  align-items: center;
  justfy-content: center;
`;

export const MonoHead = styled.View`
  width: 70px;
  height: 80px;
  position: relative;
`;

export const CubeFace = styled.View`
  width: 90%;
  height: 90%;
  position: absolute;
  background-color: #fff;
`;

export const Cubenape = styled.View`
  width: 75%;
  height: 75%;
  position: absolute;
  background-color: #fff;
  left: -13px;
  top: 5px;
`;

export const TriangleOne = styled.View`
  width: 0;
  height: 0;
  border-left-width: 5px;
  border-right-width: 15px;
  border-bottom-width: 20px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #fff;
  transform: rotate(20deg);
  position: absolute;
  bottom: 9.3px;
  left: -11px;
`;

export const TriangleTwo = styled.View`
  width: 0;
  height: 0;
  border-left-width: 5px;
  border-right-width: 15px;
  border-bottom-width: 20px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #fff;
  transform: rotate(160deg);
  position: absolute;
  bottom: 58.5px;
  left: -10.5px;
`;

export const MonoEye = styled.View<STYLEDPROPS>`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: #000;
  position: absolute;
  bottom: 23px;
  left: ${(props: any) => props.left ? 15 : 40}px;
`;

export const MonoBody = styled.View`
  width: 80px;
  height: 80px;
  position: relative;
`;

export const TrapezoidTorax = styled.View`
  width: 65px;
  height: 0;
  border-left-width: 12px; 
  border-right-width: 15px; 
  border-top-width: 50px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff; 
  background-color: transparent;
  transform: rotate(180deg);
  margin-top: -8px;
  left: 1px;
`;

export const TrapezoidLegs = styled.View`
  width: 70px;
  height: 0;
  border-left-width: 10px; 
  border-right-width: 13px; 
  border-top-width: 50px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff; 
  background-color: transparent;
  transform: rotate(180deg);
  margin-top: -20px;
  left: -2px
`;

export const MonoLegs = styled.View<STYLEDPROPS>`
  width: 13px;
  height: 30px;
  border-radius: 3px;
  background-color: #fff;
  position: absolute;
  bottom: -10px;
  left: ${(props: any) => props.left ? 15 : 40}px;
`;
