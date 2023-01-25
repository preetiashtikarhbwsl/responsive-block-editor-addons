const attributes = {

  
    formId: {
      type: 'string',
      default: '-1',
    },
    formTitleTag: {
      type: "string",
      default: "h2",
    },
    formTitle: {
      source: "html",
      selector: "h1,h2,h3,h4,h5,h6",
        default:"Form Title",
    },
    formDescription: {
      source: "html",
      selector: "h4",
      default: "Form Description",
    },
    isHtml: {
      type: 'boolean',
      default:false,
    },
    formJson: {
      type: 'object',
      default: null,
    },
    showFormTitle: {
      type: "boolean",
      default: false,
    },
    showFormDescription: {
      type: "boolean",
      default: false,
    },
    showLabels: {
      type: "boolean",
      default: true,
    },
    showRequiredMark: {
      type: "boolean",
      default: true,
    },
    showErrorMsgs: {
      type: "boolean",
      default: "true",
    },
    showValidationMsgs: {
      type: "boolean",
      default: "true",
    },
    formAlignment: {
      type: "string",
      default: "left",
    },
    formAlignmentTablet: {
      type: "string",
      default: "left",
    },
    formAlignmentMobile: {
      type: "string",
      default: "left",
    },
    formWidth: {
      type: "number",
      default: 120,
    },
    formWidthTablet: {
      type: "number",
    },
    formWidthMobile: {
      type: "number",
    },
    topMargin: {
      type: "number",
      default: 0,
    },
    bottomMargin: {
      type: "number",
      default: 0,
    },
    leftMargin: {
      type: "number",
      default: 0,
    },
    rightMargin: {
      type: "number",
      default: 0,
    },
    topMarginTablet: {
      type: "number",
      default: 0,
    },
    bottomMarginTablet: {
      type: "number",
      default: 0,
    },
    leftMarginTablet: {
      type: "number",
      default: 0,
    },
    rightMarginTablet: {
      type: "number",
      default: 0,
    },
    topMarginMobile: {
      type: "number",
      default: 0,
    },
    bottomMarginMobile: {
      type: "number",
      default: 0,
    },
    leftMarginMobile: {
      type: "number",
      default: 0,
    },
    rightMarginMobile: {
      type: "number",
      default: 0,
    },
    topPadding: {
      type: "number",
      default: 0,
    },
    bottomPadding: {
      type: "number",
      default: 0,
    },
    leftPadding: {
      type: "number",
      default: 0,
    },
    rightPadding: {
      type: "number",
      default: 0,
    },
    topPaddingMobile: {
      type: "number",
      default: 0,
    },
    bottomPaddingMobile: {
      type: "number",
      default: 0,
    },
    leftPaddingMobile: {
      type: "number",
      default: 0,
    },
    rightPaddingMobile: {
      type: "number",
      default: 0,
    },
    topPaddingTablet: {
      type: "number",
      default: 0,
    },
    bottomPaddingTablet: {
      type: "number",
      default: 0,
    },
    leftPaddingTablet: {
      type: "number",
      default: 0,
    },
    rightPaddingTablet: {
      type: "number",
      default: 0,
    },
    formBorderColor: {
      type: "string",
    },
    formBorderRadius: {
      type: "number",
      default: 0
    },
    formBorderStyle: {
      type: "string",
      default: "none"
    },
    formBorderWidth: {
      type: "number",
      default: 0
    },
    boxShadowColor: {
      type: "string",
    },
    boxShadowHOffset: {
      type: "number",
      default: 0,
    },
    boxShadowVOffset: {
      type: "number",
      default: 0,
    },
    boxShadowBlur: {
      type: "number",
      default: 0,
    },
    boxShadowSpread: {
      type: "number",
      default: 0,
    },
    boxShadowPosition: {
      type: "string",
      default: "outset",
    },    
    hoverboxShadowColor: {
      type: "string",
    },
    hoverboxShadowHOffset: {
      type: "number",
      default: 0,
    },
    hoverboxShadowVOffset: {
      type: "number",
      default: 0,
    },
    hoverboxShadowBlur: {
      type: "number",
      default: 0,
    },
    hoverboxShadowSpread: {
      type: "number",
      default: 0,
    },
    hoverboxShadowPosition: {
      type: "string",
      default: "outset",
    },
    titleAlignment: {
      type: "string",
      default: "center",
    },
    titleAlignmentTablet: {
      type: "string",
      default: "center",
    },
    titleAlignmentMobile: {
      type: "string",
      default: "center",
    },
    formTitleFontFamily: {
      type: "string",
    },
    formTitleFontSize: {
      type: "number",
    },
    formTitleFontSizeMobile: {
      type: "number",
    },
    formTitleFontSizeTablet: {
      type: "number",
    },
    formTitleFontWeight: {
      type: "string",
      default: "600",
    },
    formTitleLineHeight: {
      type: "number",
      default: 1,
    },
    formTitleLetterSpacing: {
      type: "number",
      default: 0,
    },
    formTitleColor: {
      type: "string",
    },
    formDescriptionFontFamily: {
      type: "string",
    },
    formDescriptionFontSize: {
      type: "number",
    },
    formDescriptionFontSizeMobile: {
      type: "number",
    },
    formDescriptionFontSizeTablet: {
      type: "number",
    },
    formDescriptionFontWeight: {
      type: "string",
      default: "600",
    },
    formDescriptionLineHeight: {
      type: "number",
      default: 1,
    },
    formDescriptionLetterSpacing: {
      type: "number",
      default: 0,
    },
    formDescriptionColor: {
      type: "string",
    },
    //Input Box
    inputTextColor: {
      type: "string"
    },
    inputBackgroundColor: {
      type: "string",
      default: "#eceeef"
    },
    inputBorderStyle: {
      type: "string",
      default: "none",
    },
    inputBorderWidth: {
      type: "number",
      default: 1,
    },
    inputBorderRadius: {
      type: "number",
    },
    inputBorderColor: {
      type: "string",
    },
    inputBoxShadowColor: {
      type: "string",
    },
    inputBoxShadowHOffset: {
      type: "number",
      default: 0,
    },
    inputBoxShadowVOffset: {
      type: "number",
      default: 0,
    },
    inputBoxShadowBlur: {
      type: "number",
      default: 0,
    },
    inputBoxShadowSpread: {
      type: "number",
      default: 0,
    },
    inputBoxShadowPosition: {
      type: "string",
      default: "outset",
    }, 
    inputTopPadding: {
      type: "number",
      default: 5,
    },
    inputBottomPadding: {
      type: "number",
      default: 5,
    },
    inputLeftPadding: {
      type: "number",
      default: 5,
    },
    inputRightPadding: {
      type: "number",
      default: 5,
    },
    inputTopPaddingMobile: {
      type: "number",
      default: 5,
    },
    inputBottomPaddingMobile: {
      type: "number",
      default: 5,
    },
    inputLeftPaddingMobile: {
      type: "number",
      default: 5,
    },
    inputRightPaddingMobile: {
      type: "number",
      default: 5,
    },
    inputTopPaddingTablet: {
      type: "number",
      default: 5,
    },
    inputBottomPaddingTablet: {
      type: "number",
      default: 5,
    },
    inputLeftPaddingTablet: {
      type: "number",
      default: 5,
    },
    inputRightPaddingTablet: {
      type: "number",
      default: 5,
    },
    textIndent: {
      type: "number",
      // default: 0,
    },
    textIndentMobile: {
      type: "number",
      // default: 0,
    },
    textIndentTablet: {
      type: "number",
      // default: 0,
    },
    inputWidth: {
      type: "number",
      default: 100,
    },
    inputWidthMobile: {
      type: "number",
      default: 100,
    },
    inputWidthTablet: {
      type: "number",
      default: 100,
    },
    inputHeight: {
      type: "number",
      // default: 0,
    },
    inputHeightMobile: {
      type: "number",
      // default: 0,
    },
    inputHeightTablet: {
      type: "number",
      // default: 0,
    },
    textareaWidth: {
      type: "number",
      // default: 0,
    },
    textareaWidthMobile: {
      type: "number",
      // default: 0,
    },
    textareaWidthTablet: {
      type: "number",
      // default: 0,
    },
    textareaHeight: {
      type: "number",
      // default: 0,
    },
    textareaHeightMobile: {
      type: "number",
      // default: 0,
    },
    textareaHeightTablet: {
      type: "number",
      // default: 0,
    },
    //Input Typography
    inputFontFamily: {
      type: "string"
    },
    inputFontSize: {
      type: "number"
    },
    inputFontSizeMobile: {
      type: "number"
    },
    inputFontSizeTablet: {
      type: "number"
    },
    inputFontWeight: {
      type: "string",
      default: '400'
    },
    inputLineHeight: {
      type: "number",
      default: 1
    },
    inputLetterSpacing: {
      type: "number",
      default: 0
    },
    //Label Typography
    labelFontFamily: {
      type: "string"
    },
    labelFontSize: {
      type: "number"
    },
    labelFontSizeMobile: {
      type: "number"
    },
    labelFontSizeTablet: {
      type: "number"
    },
    labelFontWeight: {
      type: "string",
      default: '100'
    },
    labelLineHeight: {
      type: "number",
      default: 1
    },
    labelLetterSpacing: {
      type: "number",
      default: 1
    },
    labelSpacing: {
      type: "number",
      default: 5
    },
    labelSpacingMobile: {
      type: "number",
      default: 5
    },
    labelSpacingTablet: {
      type: "number",
      default: 5
    },
    labelColor: {
      type: "string",
    },
    showPlaceholder: {
      type: "boolean",
      default: "true",
    },
    // //Placeholder Typography
    // placeholderFontFamily: {
    //   type: "string"
    // },
    // placeholderFontSize: {
    //   type: "number"
    // },
    // placeholderFontSizeMobile: {
    //   type: "number"
    // },
    // placeholderFontSizeTablet: {
    //   type: "number"
    // },
    // placeholderFontWeight: {
    //   type: "string",
    //   default: '100'
    // },
    // placeholderLineHeight: {
    //   type: "number",
    //   default: 1
    // },
    // placeholderLetterSpacing: {
    //   type: "number",
    //   default: 1
    // },
    // placeholderColor: {
    //   type: "string",
    // },
    //
    enableCustomStyles: {
      type: "boolean",
      default: "true",
    },
    radioCheckboxSize: {
      type: "number",
      default: 20,
    },
    //Radio/Checkbox Typography
    radioCheckboxFontFamily: {
      type: "string"
    },
    radioCheckboxFontSize: {
      type: "number"
    },
    radioCheckboxFontSizeMobile: {
      type: "number"
    },
    radioCheckboxFontSizeTablet: {
      type: "number"
    },
    radioCheckboxFontWeight: {
      type: "string",
      default: '100'
    },
    radioCheckboxLineHeight: {
      type: "number",
      default: 1
    },
    radioCheckboxLetterSpacing: {
      type: "number",
      default: 1
    },
    radioCheckboxColor: {
      type: "string",
    },
    hoverRadioCheckboxColor: {
      type: "string",
      default: "#0066cc",
    },
    radioCheckboxBorderWidth: {
      type: "number",
    },
    radioCheckboxBorderColor: {
      type: "string",
    },
    radioButtonBorderRadius: {
      type: "number",
      default: 0
    },
    checkboxBorderRadius: {
      type: "number",
      default: 0
    },
    //Submit Button Typography
    submitButtonFontFamily: {
      type: "string"
    },
    submitButtonFontSize: {
      type: "number"
    },
    submitButtonFontSizeMobile: {
      type: "number"
    },
    submitButtonFontSizeTablet: {
      type: "number"
    },
    submitButtonFontWeight: {
      type: "string",
      default: '100'
    },
    submitButtonLineHeight: {
      type: "number",
      default: 1
    },
    submitButtonLetterSpacing: {
      type: "number",
      default: 1
    },
    submitButtonWidth: {
      type: "number",
    },
    submitButtonWidthMobile: {
      type: "number",
    },
    submitButtonWidthTablet: {
      type: "number",
    },
    submitButtonHeight: {
      type: "number",
      default:40
    },
    submitButtonHeightMobile: {
      type: "number",
    },
    submitButtonHeightTablet: {
      type: "number",
    },
    ctaColor: {
      type: "string",
      default: "#ffffff",
    },
    ctaBackColor: {
      type: "string",
      default: "#3f46ae",
    },
    ctaHoverColor: {
      type: "string",
      default: "#ffffff",
    },
    ctaHoverBackColor: {
      type: "string",
      default: "#3f46ae",
    },
    ctaBorderColor: {
      type: "string",
      default: "#333",
    },
    ctaBorderStyle: {
      type: "string",
      default: "none",
    },
    ctaBorderRadius: {
      type: "number",
      default: 0,
    },
    ctaBorderWidth: {
      type: "number",
      default: 2,
    },
    ctaHpadding: {
      type: "number",
      default: 30,
    },
    ctaVpadding: {
      type: "number",
      default: 15,
    },
    buttonbackgroundType: {
      type: "string",
      default: "color",
    },
    buttoncolorLocation1: {
      type: "number",
      default: 0,
    },
    buttoncolorLocation2: {
      type: "number",
      default: 100,
    },
    buttongradientDirection: {
      type: "number",
      default: 90,
    },
    buttonbackgroundColor1: {
      type: "string",
    },
    buttonbackgroundColor2: {
      type: "string",
      default: "#fff",
    },
    buttonHbackgroundType: {
      type: "string",
      default: "color",
    },
    buttonHcolorLocation1: {
      type: "number",
      default: 0,
    },
    buttonHcolorLocation2: {
      type: "number",
      default: 100,
    },
    buttonHgradientDirection: {
      type: "number",
      default: 90,
    },
    buttonHbackgroundColor1: {
      type: "string",
    },
    buttonHbackgroundColor2: {
      type: "string",
      default: "#fff",
    },
    ctaHoverBorderColor: {
      type: "string",
      defaulr: "#333",
    },
    submitButtonBoxShadowColor: {
      type: "string",
    },
    submitButtonBoxShadowHOffset: {
      type: "number",
      default: 0,
    },
    submitButtonBoxShadowVOffset: {
      type: "number",
      default: 0,
    },
    submitButtonBoxShadowBlur: {
      type: "number",
      default: 0,
    },
    submitButtonBoxShadowSpread: {
      type: "number",
      default: 0,
    },
    submitButtonBoxShadowPosition: {
      type: "string",
      default: "outset",
    },    
    submitButtonHoverBoxShadowColor: {
      type: "string",
    },
    submitButtonHoverBoxShadowHOffset: {
      type: "number",
      default: 0,
    },
    submitButtonHoverBoxShadowVOffset: {
      type: "number",
      default: 0,
    },
    submitButtonHoverBoxShadowBlur: {
      type: "number",
      default: 0,
    },
    submitButtonHoverBoxShadowSpread: {
      type: "number",
      default: 0,
    },
    submitButtonHoverBoxShadowPosition: {
      type: "string",
      default: "outset",
    },

  
  

    //After Submit Typography
    messageFontFamily: {
      type: "string"
    },
    messageFontSize: {
      type: "number"
    },
    messageFontSizeMobile: {
      type: "number"
    },
    messageFontSizeTablet: {
      type: "number"
    },
    messageFontWeight: {
      type: "string",
      default: '100'
    },
    messageLineHeight: {
      type: "number",
      default: 1
    },
    messageLetterSpacing: {
      type: "number",
      default: 1
    },
    successMsgColor: {
      type: "string"
    },
    errorMsgColor: {
      type: "string"
    },
    inlineMsgColor: {
      type: "string"
    },
    //Submit Button Typography
    afterSubmitFontFamily: {
      type: "string"
    },
    afterSubmitFontSize: {
      type: "number"
    },
    afterSubmitFontSizeMobile: {
      type: "number"
    },
    afterSubmitFontSizeTablet: {
      type: "number"
    },
    afterSubmitFontWeight: {
      type: "string",
      default: '100'
    },
    afterSubmitLineHeight: {
      type: "number",
      default: 1
    },
    afterSubmitLetterSpacing: {
      type: "number",
      default: 1
    },
    afterSubmitColor: {
      type: "string"
    },
    //after submit feedback spacing
    afterSubmitTopMargin: {
      type: "number",
      default: 0,
    },
    afterSubmitBottomMargin: {
      type: "number",
      default: 0,
    },
    afterSubmitLeftMargin: {
      type: "number",
      default: 0,
    },
    afterSubmitRightMargin: {
      type: "number",
      default: 0,
    },
    afterSubmitTopMarginTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitBottomMarginTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitLeftMarginTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitRightMarginTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitTopMarginMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitBottomMarginMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitLeftMarginMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitRightMarginMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitTopPadding: {
      type: "number",
      default: 0,
    },
    afterSubmitBottomPadding: {
      type: "number",
      default: 0,
    },
    afterSubmitLeftPadding: {
      type: "number",
      default: 0,
    },
    afterSubmitRightPadding: {
      type: "number",
      default: 0,
    },
    afterSubmitTopPaddingMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitBottomPaddingMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitLeftPaddingMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitRightPaddingMobile: {
      type: "number",
      default: 0,
    },
    afterSubmitTopPaddingTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitBottomPaddingTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitLeftPaddingTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitRightPaddingTablet: {
      type: "number",
      default: 0,
    },
    afterSubmitBorderColor: {
      type: "string",
    },
    afterSubmitBorderRadius: {
      type: "number",
      default: 0
    },
    afterSubmitBorderStyle: {
      type: "string",
      default: "none"
    },
    afterSubmitBorderWidth: {
      type: "number",
      default: 0
    },
    afterSubmitBoxShadowColor: {
      type: "string",
    },
    afterSubmitBoxShadowHOffset: {
      type: "number",
      default: 0,
    },
    afterSubmitBoxShadowVOffset: {
      type: "number",
      default: 0,
    },
    afterSubmitBoxShadowBlur: {
      type: "number",
      default: 0,
    },
    afterSubmitBoxShadowSpread: {
      type: "number",
      default: 0,
    },
    afterSubmitBoxShadowPosition: {
      type: "string",
      default: "outset",
    },    
    afterSubmitHoverboxShadowColor: {
      type: "string",
    },
    afterSubmitHoverboxShadowHOffset: {
      type: "number",
      default: 0,
    },
    afterSubmitHoverboxShadowVOffset: {
      type: "number",
      default: 0,
    },
    afterSubmitHoverboxShadowBlur: {
      type: "number",
      default: 0,
    },
    afterSubmitHoverboxShadowSpread: {
      type: "number",
      default: 0,
    },
    afterSubmitHoverboxShadowPosition: {
      type: "string",
      default: "outset",
    },














  // OLD
    headingTitle: {
      source: "html",
      selector: "h1,h2,h3,h4,h5,h6",
        default:"Write a Heading",
    },
    block_id: {
      type: "string",
    },
    headingId: {
      type: "string",
    },
    headingDesc: {
      source: "html",
      selector: "p",
      default: "Write some text",
    },
    seperatorStyle: {
      type: "string",
      default: "solid",
    },
    seperatorPosition: {
      type: "string",
      default: "belowTitle",
    },
    separatorHeight: {
      type: "number",
      default: 3,
    },
    separatorWidth: {
      type: "number",
      default: 20,
    },
    separatorWidthType: {
      type: "string",
      default: "%",
    },
    separatorColor: {
      type: "string",
    },
    headSpacing: {
      type: "number",
      default: 15,
    },
    subheadSpacing: {
      type: "number",
      default: 15,
    },
    separatorSpacing: {
      type: "number",
      default: 15,
    },
    headSpacingTablet: {
      type: "number",
      default: 15,
    },
    subheadSpacingTablet: {
      type: "number",
      default: 15,
    },
    separatorSpacingTablet: {
      type: "number",
      default: 15,
    },
    headSpacingMobile: {
      type: "number",
      default: 15,
    },
    subheadSpacingMobile: {
      type: "number",
      default: 15,
    },
    separatorSpacingMobile: {
      type: "number",
      default: 15,
    },
    headingTitleFontFamily: {
      type: "string",
    },
    headingTitleFontSize: {
      type: "number",
    },
    headingTitleFontSizeMobile: {
      type: "number",
    },
    headingTitleFontSizeTablet: {
      type: "number",
    },
    headingTitleFontWeight: {
      type: "string",
      default: "600",
    },
    headingTitleLineHeight: {
      type: "number",
      default: 1,
    },
    headingTitleLetterSpacing: {
      type: "number",
      default: 0,
    },
    headingTitleColor: {
      type: "string",
    },
    subHeadingTitleFontFamily: {
      type: "string",
    },
    subHeadingTitleFontSize: {
      type: "number",
    },
    subHeadingTitleFontSizeMobile: {
      type: "number",
    },
    subHeadingTitleFontSizeTablet: {
      type: "number",
    },
    subHeadingTitleFontWeight: {
      type: "string",
      default: "400",
    },
    subHeadingTitleLineHeight: {
      type: "number",
      default: 1,
    },
    subHeadingTitleLetterSpacing: {
      type: "number",
      default: 0,
    },
    subHeadingTitleColor: {
      type: "string",
    },
    
    level: {
      type: "number",
      default: 2,
    },
    headingAlignment: {
      type: "string",
      default: "center",
    },
    headingAlignmentTablet: {
      type: "string",
      default: "center",
    },
    headingAlignmentMobile: {
      type: "string",
      default: "center",
    },
    textDecoration: {
      type: "string",
      default: "none"
    },
    textDecorationSubHeading: {
      type: "string",
      default: "none"
    },
    //changed
    
    
    
    //Border
    blockBorderColor: {
      type: "string",
    },
    blockBorderRadius: {
      type: "number",
      default: 0
    },
    blockBorderStyle: {
      type: "string",
      default: "none"
    },
    blockBorderWidth: {
      type: "number",
      default: 0
    },
    //Padding
    // inputTopPadding: {
    //   type: "number",
    //   default: 5
    // },
    // inputRightPadding: {
    //   type: "number",
    //   default: 5
    // },
    // inputBottomPadding: {
    //   type: "number",
    //   default: 5
    // },
    // inputLeftPadding: {
    //   type: "number",
    //   default: 5
    // },
    // inputTopPaddingMobile: {
    //   type: "number",
    //   default: 15
    // },
    // inputRightPaddingMobile: {
    //   type: "number",
    //   default: 15
    // },
    // inputBottomPaddingMobile: {
    //   type: "number",
    //   default: 15
    // },
    // inputLeftPaddingMobile: {
    //   type: "number",
    //   default: 15
    // },
    // inputTopPaddingTablet: {
    //   type: "number",
    //   default: 15
    // },
    // inputRightPaddingTablet: {
    //   type: "number",
    //   default: 15
    // },
    // inputBottomPaddingTablet: {
    //   type: "number",
    //   default: 15
    // },
    // inputLeftPaddingTablet: {
    //   type: "number",
    //   default: 15
    // },
    
    imageWidth: {
      type: "number",
      default: 120,
    },
    imageWidthTablet: {
      type: "number",
    },
    imageWidthMobile: {
      type: "number",
    },

    //Background
    opacity: {
      type: "number",
      default: 20,
    },
    colorLocation1: {
      type: "number",
      default: 0,
    },
    colorLocation2: {
      type: "number",
      default: 100,
    },
    gradientDirection: {
      type: "number",
      default: 90,
    },
    backgroundImage: {
      type: "string",
    },
    backgroundPosition: {
      type: "string",
      default: "center-center",
    },
    backgroundPositionMobile: {
      type: "string",
      default: "center center",
    },
    backgroundPositionTablet: {
      type: "string",
      default: "center center",
    },
    backgroundSize: {
      type: "string",
      default: "cover",
    },
    backgroundSizeTablet: {
      type: "string",
      default: 'cover',
    },
    backgroundSizeMobile: {
      type: "string",
      default: 'cover'
    },
    backgroundRepeat: {
      type: "string",
      default: "no-repeat",
    },
    backgroundAttachment: {
      type: "string",
      default: "scroll",
    },
    backgroundImageColor: {
      type: "string",
    },
    overlayType: {
      type: "string",
      default: "color",
    },
    gradientOverlayColor1: {
      type: "string",
    },
    gradientOverlayColor2: {
      type: "string",
    },
    gradientOverlayType: {
      type: "string",
      default: "linear",
    },
    gradientOverlayLocation1: {
      type: "number",
      default: 0,
    },
    gradientOverlayLocation2: {
      type: "number",
      default: 100,
    },
    gradientOverlayAngle: {
      type: "number",
      default: 0,
    },
    gradientOverlayPosition: {
      type: "string",
      default: "center center",
    },
    backgroundVideo: {
      type: "object",
    },
    backgroundColor: {
      type: "string",
    },
    backgroundColor1: {
      type: "string",
    },
    backgroundColor2: {
      type: "string",
    },
    backgroundType: {
      type: "string",
      default: "none",
    },
    //padding and margin
    boxTopPadding: {
      type: "number",
      default: 10,
    },
    boxBottomPadding: {
      type: "number",
      default: 10,
    },
    boxLeftPadding: {
      type: "number",
      default: 10,
    },
    boxRightPadding: {
      type: "number",
      default: 10,
    },
    boxTopPaddingTablet: {
      type: "number",
    },
    boxBottomPaddingTablet: {
      type: "number",
    },
    boxLeftPaddingTablet: {
      type: "number",
    },
    boxRightPaddingTablet: {
      type: "number",
    },
    boxTopPaddingMobile: {
      type: "number",
    },
    boxBottomPaddingMobile: {
      type: "number",
    },
    boxLeftPaddingMobile: {
      type: "number",
    },
    boxRightPaddingMobile: {
      type: "number",
    },
    
    
    
    
    resIconSize: {
      type: "number",
      default: 40,
    },
  };
  
  export default attributes;
  