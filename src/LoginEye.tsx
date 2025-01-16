import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path, Circle} from 'react-native-svg';
import * as S from './styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const pupilX = useSharedValue(50);
  const pupilY = useSharedValue(30);
  const eyeOpenHeight = useSharedValue(50);

  const handleEmailFocus = () => {
    const maxMovementX = 40;
    const newX = 30 + Math.min(email.length * 1.5, maxMovementX);
    pupilX.value = withTiming(newX);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const maxMovementX = 40;
    const newX = 30 + Math.min(text.length * 0.9, maxMovementX);
    pupilX.value = withTiming(newX);

    const baseY = 30;
    const newY = baseY + (text.length % 2 === 0 ? 1 : -1);
    pupilY.value = withTiming(newY);
  };

  const handlePasswordFocus = () => {
    eyeOpenHeight.value = withTiming(0, {duration: 300});
  };

  const handlePasswordBlur = () => {
    eyeOpenHeight.value = withTiming(50, {duration: 300});
  };

  const animatedEyeProps = useAnimatedProps(() => ({
    d: `M5,25 Q50,${25 - eyeOpenHeight.value} 95,25 Q50,${
      25 + eyeOpenHeight.value
    } 5,25 Z`,
  }));

  const animatedPupilProps = useAnimatedProps(() => ({
    cx: pupilX.value,
    cy: pupilY.value,
  }));

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>LOGIN</S.Title>
        <S.Title bigger>NIGHTMARES</S.Title>
      </S.TitleContainer>

      <S.Eye>
        <Svg width="100" height="60" viewBox="0 0 100 50">
          <AnimatedPath
            animatedProps={animatedEyeProps}
            fill="#fff"
            stroke="#000"
            strokeWidth="4"
          />
          <AnimatedCircle
            r="15"
            fill="black"
            animatedProps={animatedPupilProps}
          />
        </Svg>
      </S.Eye>

      <S.StyledInput
        placeholder="Email"
        onFocus={handleEmailFocus}
        onChangeText={handleEmailChange}
      />

      <S.StyledInput
        placeholder="Senha"
        secureTextEntry
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
      />
    </S.Container>
  );
}
