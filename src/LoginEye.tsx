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
  const armRotation = useSharedValue<number>(0);
  const lightOpacity = useSharedValue<number>(0);
  const colorInput = useSharedValue<string>('#ccc');
  const borderWidthInput = useSharedValue<number>(1);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
    //pupila
    if (secureEntry) {
      pupilY.value = withTiming(15, {duration: 300});
    } else {
      pupilY.value = withTiming(30, {duration: 300});
    }

    //mono
    headRotation.value = withTiming(secureEntry ? -20 : 0, {duration: 500});
    armRotation.value = withTiming(secureEntry ? -112 : 0, {duration: 500});
    lightOpacity.value = withTiming(secureEntry ? 1 : 0, {
      duration: secureEntry ? 1500 : 200,
    });

    //senha
    colorInput.value = withTiming(secureEntry ? '#FFFF0080' : '#ccc', {
      duration: secureEntry ? 1500 : 200,
    });
    borderWidthInput.value = withTiming(secureEntry ? 2 : 1, {
      duration: secureEntry ? 1500 : 200,
    });
  };

  const handleEmailFocus = () => {
    const maxMovementX = 40;
    const newX = 30 + Math.min(email.length * 0.9, maxMovementX);
    pupilX.value = withTiming(newX);
  };

  const handleEmailChange = (text: string) => {
    !secureEntry && toggleSecureEntry();
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

  const animatedArmStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${armRotation.value}deg`}],
  }));

  const animatedLightStyle = useAnimatedStyle(() => ({
    opacity: lightOpacity.value,
  }));

  const animatedInputStyle = useAnimatedStyle(() => ({
    borderWidth: borderWidthInput.value,
    borderColor: colorInput.value,
    borderStyle: 'solid',
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

      <S.InputContainer style={animatedInputStyle}>
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

      <S.BottomContainer>
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
                <S.MonoArm style={[animatedArmStyle]} />
                <S.LightStyle style={[animatedLightStyle]} />
              </S.MonoTorax>

              <S.TrapezoidLegs />
              <S.MonoLegs left />
              <S.MonoLegs />
            </S.MonoBody>
          </S.Mono>
        </S.MonoContainer>

        <S.TVContainer>
          <S.TVBody>
            <S.TVScreen>
              <S.ButtonText>
                Entrar
              </S.ButtonText>
            </S.TVScreen>
            <S.TVPainel>
              <S.TVButtom />
              <S.TVButtom />
              <S.TVAudioContainer>
                <S.TVAudio />
                <S.TVAudio />
                <S.TVAudio />
                <S.TVAudio />
                <S.TVAudio />
              </S.TVAudioContainer>
            </S.TVPainel>
          </S.TVBody>
        </S.TVContainer>
      </S.BottomContainer>
    </S.Container>
  );
}
