import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path, Circle} from 'react-native-svg';
import * as S from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const pupilX = useSharedValue(50);
  const pupilY = useSharedValue(30);

  const handleEmailFocus = () => {
    pupilX.value = withTiming(30);
  };

  const handleEmailChange = text => {
    setEmail(text);
    const maxMovementX = 40;
    const newX = 30 + Math.min(text.length * 1.5, maxMovementX);
    pupilX.value = withTiming(newX);

    const baseY = 30;
    const newY = baseY + (text.length % 2 === 0 ? 1 : -1);
    pupilY.value = withTiming(newY);
  };

  // Propriedades animadas da pupila
  const animatedPupilProps = useAnimatedProps(() => ({
    cx: pupilX.value,
    cy: pupilY.value,
  }));

  return (
    <S.Container>
      <S.Eye>
        <Svg width="100" height="50" viewBox="0 0 100 50">
          <Path
            d="M5,25 Q50,-10 95,25 Q50,60 5,25 Z"
            fill="#fff"
            stroke="#000"
            strokeWidth="4"
          />
          <AnimatedCircle
            r="10"
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

      <S.StyledInput placeholder="Senha" secureTextEntry />
    </S.Container>
  );
}
