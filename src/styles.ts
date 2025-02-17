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
  width: 100%;
  font-size: 16px;
  color: #fff;
`;

export const InputContainer = styled(Animated.View)`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px;
  z-index: 1;
`;

export const ToggleButton = styled.TouchableOpacity`
  padding: 5px;
  position: absolute;
  right: 5px;
  z-index: 1;
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

export const MonoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justfy-content: center;
  width: 100%;
  padding-left: 40px;
  padding-top: 20px;
`;

export const Mono = styled.View`
  display: flex;
  align-items: center;
  justfy-content: center;
`;

export const MonoHead = styled.View`
  width: 60px;
  height: 70px;
  position: relative;
  transform: rotate(0deg);
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
  bottom: 48.5px;
  left: -10.5px;
`;

export const MonoEye = styled.View<STYLEDPROPS>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #000;
  position: absolute;
  bottom: 23px;
  left: ${(props: any) => props.left ? 12 : 35}px;
`;

export const MonoBody = styled.View`
  width: 80px;
  height: 80px;
  position: relative;
`;

export const MonoTorax = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const TrapezoidTorax = styled.View`
  width: 53px;
  height: 0;
  border-left-width: 0px; 
  border-right-width: 15px; 
  border-top-width: 42px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff; 
  background-color: transparent;
  transform: rotate(180deg);
  margin-top: -8px;
  left: 1px;
`;

export const MonoArm = styled(Animated.View)<STYLEDPROPS>`
  width: 20px;
  height: 0;
  border-left-width: 0px; 
  border-right-width: 10px; 
  border-bottom-width: 42px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #fff;
  background-color: transparent;
  transform-origin: top left;
  margin-top: -8px;
  position: absolute;
  left: 45px;
`;

export const LightStyle = styled(Animated.View)`
  width: 30px;
  height: 0;
  border-left-width: 0px; 
  border-right-width: 10px; 
  border-bottom-width: 240px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #FFFF0080;
  background-color: transparent;
  transform: rotate(-112deg);
  bottom: -7px;
  position: absolute;
  left: 177px;
  opacity: 0;
  z-index: 0;
`;

export const TrapezoidLegs = styled.View`
  width: 60px;
  height: 0;
  border-left-width: 10px; 
  border-right-width: 10px; 
  border-top-width: 45px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #fff ; 
  background-color: transparent;
  transform: rotate(180deg);
  margin-top: -20px;
  left: 3px
`;

export const MonoLegs = styled.View<STYLEDPROPS>`
  width: 10px;
  height: 30px;
  border-radius: 3px;
  background-color: #fff;
  position: absolute;
  bottom: 2px;
  left: ${(props: any) => props.left ? 18 : 40}px;
`;

export const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justfy-content: space-between;
  width: 100%;
  position: relative;
`;

export const TVContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 40px;
  bottom: 5px;
`;

export const TVBody = styled.TouchableOpacity`
  height: 100px;
  width: 150px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;

export const TVScreen = styled.View`
  height: 90px;
  width: 100px;
  background-color: #000;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: AnnieUseYourTelescope-Regular;
  letter-spacing: 5px;
`;

export const TVPainel = styled.View`
  height: 90px;
  width: 30px;
  background-color: #aaa;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const TVAudioContainer = styled.View`
`;

export const TVAudio = styled.View`
  height: 3px;
  width: 25px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 3px;
`;

export const TVButtom = styled.View`
  height: 10px;
  width: 10px;
  background-color: #000;
  border-radius: 5px;
`;

