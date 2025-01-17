import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path, Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const pupilX = useSharedValue<number>(50);
  const pupilY = useSharedValue<number>(30);
  const eyeOpenHeight = useSharedValue<number>(50);
  const headRotation = useSharedValue<number>(0);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
    headRotation.value = withTiming(secureEntry ? -20 : 0, {duration: 500});
  };

  const handleEmailFocus = () => {
    const maxMovementX = 40;
    const newX = 30 + Math.min(email.length * 0.9, maxMovementX);
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

  const animatedHeadStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${headRotation.value}deg`}],
  }));

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
        <Svg width="200" height="70" viewBox="0 0 100 50">
          <AnimatedPath
            animatedProps={animatedEyeProps}
            fill="#fff"
            stroke="#000"
            strokeWidth="4"
          />
          <AnimatedCircle
            r="17"
            fill="black"
            animatedProps={animatedPupilProps}
          />
        </Svg>
      </S.Eye>

      <S.InputContainer>
        <S.StyledInput
          placeholder="Email"
          onFocus={handleEmailFocus}
          onChangeText={handleEmailChange}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.StyledInput
          placeholder="Senha"
          secureTextEntry={secureEntry}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />

        <S.ToggleButton onPress={toggleSecureEntry}>
          <Icon name={secureEntry ? 'eye-off' : 'eye'} size={24} color="#ccc" />
        </S.ToggleButton>
      </S.InputContainer>

      <S.MonoContainer>
        <S.Mono>
          <Animated.View style={[animatedHeadStyle]}>
            <S.MonoHead>
              <S.CubeFace />
              <S.Cubenape />
              <S.TriangleOne />
              <S.TriangleTwo />
              <S.MonoEye left />
              <S.MonoEye />
            </S.MonoHead>
          </Animated.View>

          <S.MonoBody>
            <S.MonoTorax>
              <S.TrapezoidTorax />
              <S.MonoArm />
            </S.MonoTorax>

            <S.TrapezoidLegs />
            <S.MonoLegs left />
            <S.MonoLegs />
          </S.MonoBody>
        </S.Mono>
      </S.MonoContainer>
    </S.Container>
  );
}
