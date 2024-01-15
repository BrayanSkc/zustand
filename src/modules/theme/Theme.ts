/* eslint-disable react-hooks/exhaustive-deps */


export const colors = {
  primary: '#181818',
  secondary: '#2C2D32',
  accent: '#CEFF00',
  textPrimary: '#FFFFFF',
  textSecondary: '#C4C4C4',
  textTertiary: '#B5B4B4',
  backgroundDisable: '#929292',
  backgroundDisableShimmer: '#555557',
  borderColor: 'rgba(224, 224, 224, 0.3)',
  modalContent: 'rgba(60, 60, 67, 0.6)',
  backgroundColor: '#181818',
  backgroundTabColor: '#2C2D32',
  backgroundHeaderColor: '#181818',
  backgroundInactive: '#2E2E31',
  blueLight: '#0079FF',
  white: '#FFFFFF',
  black: '#000000',
  purple: '#B050C5',
  gray: '#F9F9F9',
  tabUnfocus: '#C3C2C8',
  positiveColor: '#CEFF00',
  negativeColor: '#E74F5A',
  codeError: '#E6454D',
  success: '#55FFD0',
  cardBackground: '#393A3D',
  boxMessage: '#545454',
  gridColor: '#444',
};



  export const mainThemeApp =  {
      colors: {
        primary: colors.primary,
        background: colors.backgroundColor,
        card: colors.secondary,
        text: colors.textPrimary,
        border: colors.backgroundHeaderColor,
        notification: colors.primary,
      },
      solidButton: {
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: colors.accent,
      },
      solidTextButton: {
        color: colors.primary,
        fontWeight:'700',
        fontSize: 16,
        alignSelf: 'center',
        fontFamily: 'Inter-SemiBold',
      },
      solidDisableButton: {
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: colors.backgroundDisable,
      },
      solidDisableTextButton: {
        color: colors.textSecondary,
        fontWeight:'700',
        alignSelf: 'center',
        fontFamily: 'Inter-SemiBold',
      },
      outLineButton: {
        borderColor: colors.accent,
        borderRadius: 6,
        height: 56,
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      outLineTextButton: {
        alignSelf: 'center',
        fontWeight:'700',
        color: colors.textPrimary,
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
      },
      outLineDisableButton: {
        borderColor: colors.backgroundDisable,
        borderRadius: 6,
        height: 56,
        borderWidth: 2,
        justifyContent: 'center',
      },
      transparentDisableButton:{

        backgroundColor: colors.primary,


      }, 
      transparentDisableTextButton:{
        backgroundColor: colors.primary,


      },

      outLineDisableTextButton: {
        alignSelf: 'center',
        fontWeight:'700',
        color: colors.textSecondary,
        fontFamily: 'Inter-SemiBold',
      },
      transparentTextButton: {
        color: colors.black,
        fontFamily: 'Inter-Light',
      },
      underlinedButton: {
        height: 56,
        justifyContent: 'center',
      },
      underlinedTextButton: {
        alignSelf: 'center',
        fontWeight: '400',
        color: colors.textPrimary,
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        textDecorationLine: 'underline',
      },
      underlinedDisableTextButton: {
        alignSelf: 'center',
        fontWeight: '400',
        color: colors.secondary,
        fontFamily: 'Inter-Regular',
        fontSize: 14,
      },
      textTitle1: {
        color: colors.textPrimary,
        fontWeight:  'bold',
        fontSize: 24,
        fontFamily: 'Inter-Bold',
      },
      textTitle2: {
        color: colors.textPrimary,
        fontSize: 20,
        fontWeight:'700',
        fontFamily: 'Inter-Bold',
      },
      textTitle3: {
        color: colors.textPrimary,
        fontWeight:  'bold',
        fontSize: 20,
        fontFamily: 'Inter-Bold',
      },
      textTitleModal: {
        color: colors.primary,
        fontWeight:'700',
        fontSize: 20,
        fontFamily: 'Inter-Bold',
      },
      textBodyM: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Inter-Regular',
      },
      textBodyB: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight:  'bold',
        fontFamily: 'Inter-Bold',
      },
      textCaptionR: {
        color: colors.textPrimary,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
      },
      textCaptionB: {
        color: colors.textPrimary,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Inter-ExtraBold',
      },
      textLabel: {
        color: colors.textPrimary,
        fontSize: 12,
        fontWeight: "400",
        fontFamily: 'Inter-Light',
      },
      cardView: {
        backgroundColor: colors.backgroundTabColor,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 20,
        elevation: 4,
        zIndex: 0,
      },
      alertSuccess: {
        backgroundColor: colors.success,
      },
      alertInformation: {
        backgroundColor: colors.blueLight,
      },
      alertPurple: {
        backgroundColor: colors.purple,
      },
      alertError: {
        backgroundColor: colors.codeError,
      },
      radioButtonIcon: {
        backgroundColor: colors.primary,
        width: '70%',
        height: '70%',
        borderRadius: 50,
        alignSelf: 'center',
      },

      checkBoxImageIcon: {
        width: '90%',
        height: '90%',
        tintColor: colors.primary,
        resizeMode: 'contain',
      },
      radioButtonChecked: {
        padding: 4,
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: colors.accent,
        borderColor: colors.accent,
      },
      bottomSheet: {
        backgroundColor: colors.secondary,
        borderRadius: 12,
        draggerBarColor: colors.accent,
        draggerBarRadius: 2,
        draggerBarHeight: 4,
        draggerBarWidth: 75,
      },
      textInputPrimary: {
        color: colors.codeError,
        flex: 1,
      },
      dropdownContainer: {
        borderColor: colors.accent,
        borderWidth: 1,
        backgroundColor: colors.backgroundColor,
        borderRadius: 4,
        width: '100%',
        alignSelf: 'center',
      },
      dropdownContainerDisabled: {
        backgroundColor: colors.backgroundDisable,
        borderWidth: 0,
      },
      dropdownItemList: {
        backgroundColor: colors.primary,
        borderLeftColor: colors.accent,
        borderRightColor: colors.accent,
        borderBottomColor: colors.accent,
        borderWidth: 1,
        borderTopWidth: 0,
      },
      dropdownLabelStyle: {
        color: colors.textPrimary,
      },
      dropdownLabelItem: {
        color: colors.textPrimary,
      },
      dropdownIconColor: {
        color: colors.accent,
      },
      toggleButtonContainer: {
        borderColor: colors.backgroundInactive,
        marginVertical: '6%',
        borderWidth: 2,
        backgroundColor: colors.backgroundInactive,
      },
      toggleButtonActive: {
        backgroundColor: colors.accent,
        borderRadius: 25,
      },
      toggleButtonInactive: {
        backgroundColor: colors.backgroundInactive,
      },
      toggleButtonTextActive: {
        color: colors.primary,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 14,
        fontSize: 12,
      },
      toggleButtonTextInactive: {
        color: colors.textSecondary,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 14,
        fontSize: 12,
      },
      transparentButton: {
        paddingHorizontal: 4,
        borderRadius: 6,
        height: 58,
        borderWidth: 0,
        justifyContent: 'center',
      },

      transparentTextButtonModal: {
        color: colors.primary,
        fontFamily: 'Inter-Bold',
        fontWeight:'700',
        fontSize: 16,
        letterSpacing: 0.75,
      },
      switchStyle: {
        trackColor: 'rgba(68, 208, 129, 0.26)',
        trackDisableColor: '#C2C1C7',
        thumbColor: colors.accent,
      },
      progressBar: {
        color: colors.accent,
        strokeWidth: colors.white,
      },
    };

