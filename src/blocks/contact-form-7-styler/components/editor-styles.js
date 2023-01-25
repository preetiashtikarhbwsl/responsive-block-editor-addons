/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 import { hexToRgba } from "../../../utils";
 import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
 
 function EditorStyles(props) {
   const {
     formAlignment,
     formWidth,
     topPadding,
     bottomPadding,
     leftPadding,
     rightPadding,
     topPaddingTablet,
     bottomPaddingTablet,
     leftPaddingTablet,
     rightPaddingTablet,
     topPaddingMobile,
     bottomPaddingMobile,
     leftPaddingMobile,
     rightPaddingMobile,
     topMargin,
     bottomMargin,
     leftMargin,
     rightMargin,
     topMarginTablet,
     bottomMarginTablet,
     leftMarginTablet,
     rightMarginTablet,
     topMarginMobile,
     bottomMarginMobile,
     leftMarginMobile,
     rightMarginMobile,
     formBorderRadius,
     formBorderStyle,
     formBorderWidth,
     formBorderColor,
     boxShadowColor,
     boxShadowHOffset,
     boxShadowVOffset,
     boxShadowBlur,
     boxShadowSpread,
     boxShadowPosition,
     hoverboxShadowColor,
     hoverboxShadowHOffset,
     hoverboxShadowVOffset,
     hoverboxShadowBlur,
     hoverboxShadowSpread,
     hoverboxShadowPosition,
     backgroundColor,
     backgroundColorHover,
     backgroundColor1,
     backgroundColor2,
     colorLocation1,
     colorLocation2,
     gradientDirection,
     hoverbackgroundColor1,
     hoverbackgroundColor2,
     hovercolorLocation1,
     hovercolorLocation2,
     hovergradientDirection,
     backgroundType,
     backgroundImage,
     backgroundImagePosition,
     backgroundAttachment,
     backgroundImageRepeat,
     backgroundImageSize,
     overlayType,
     backgroundImageColor,
     gradientOverlayColor1,
     gradientOverlayLocation1,
     gradientOverlayColor2,
     gradientOverlayLocation2,
     gradientOverlayType,
     gradientOverlayAngle,
     gradientOverlayPosition,
     opacity,
     backgroundHoverImage,
     backgroundImageHoverPosition,
     backgroundImageHoverRepeat,
     backgroundImageHoverAttachment,
     backgroundImageHoverSize,
     titleAlignment,
     titleAlignmentMobile,
     titleAlignmentTablet,
     formTitleFontFamily,
     formTitleFontSize,
     formTitleFontSizeTablet,
     formTitleFontSizeMobile,
     formTitleFontWeight,
     formTitleLineHeight,
     formTitleLetterSpacing,
     formTitleColor,
     formDescriptionFontFamily,
     formDescriptionFontSize,
     formDescriptionFontSizeTablet,
     formDescriptionFontSizeMobile,
     formDescriptionFontWeight,
     formDescriptionLineHeight,
     formDescriptionLetterSpacing,
     formDescriptionColor,  
     inputTextColor,
     inputBackgroundColor,
     inputBorderRadius,
     inputBorderStyle,
     inputBorderWidth,
     inputBorderColor,
     inputTopPadding,
     inputBottomPadding,
     inputLeftPadding,
     inputRightPadding,
     inputTopPaddingTablet,
     inputBottomPaddingTablet,
     inputLeftPaddingTablet,
     inputRightPaddingTablet,
     inputTopPaddingMobile,
     inputBottomPaddingMobile,
     inputLeftPaddingMobile,
     inputRightPaddingMobile,
     inputWidth,
     inputHeight,
     textareaWidth,
     textareaHeight,
     textIndent,
     inputFontFamily,
     inputFontSize,
     inputFontSizeMobile,
     inputFontSizeTablet,
     inputFontWeight,
     inputLineHeight,
     inputLetterSpacing,
     labelFontFamily,
     labelFontSize,
     labelFontSizeMobile,
     labelFontSizeTablet,
     labelFontWeight,
     labelLineHeight,
     labelLetterSpacing,
     labelColor,
     labelSpacing,
     showPlaceholder,
     placeholderColor,
     radioCheckboxSize,
     radioCheckboxColor,
     hoverRadioCheckboxColor,
     radioCheckboxBorderWidth,
     radioCheckboxBorderColor,
     radioButtonBorderRadius,
     checkboxBorderRadius,
     submitButtonFontFamily,
     submitButtonFontSize,
     submitButtonFontSizeMobile,
     submitButtonFontSizeTablet,
     submitButtonFontWeight,
     submitButtonLineHeight,
     submitButtonLetterSpacing,
     ctaColor,
     ctaBackColor,
     ctaHoverColor,
     ctaHoverBackColor,
     ctaBorderColor,
     ctaBorderRadius,
     ctaBorderWidth,
     ctaBorderStyle,
     ctaHpadding,
     ctaVpadding,
     ctaHoverBorderColor,
     ctaHpaddingTablet,
     ctaHpaddingMobile,
     ctaVpaddingTablet,
     ctaVpaddingMobile,
     buttonbackgroundType,
     buttongradientDirection,
     buttoncolorLocation1,
     buttoncolorLocation2,
     buttonbackgroundColor1,
     buttonbackgroundColor2,
     buttonHbackgroundType,
     buttonHgradientDirection,
     buttonHcolorLocation1,
     buttonHcolorLocation2,
     buttonHbackgroundColor1,
     buttonHbackgroundColor2,
     ctaButtonAlignment,
     ctaButtonAlignmentMobile,
     ctaButtonAlignmentTablet,
     submitButtonWidth,
     submitButtonWidthMobile,
     submitButtonWidthTablet,
     submitButtonHeight,
     submitButtonHeightMobile,
     submitButtonHeightTablet,
     submitButtonHoverBoxShadowColor,
     submitButtonHoverBoxShadowHOffset,
     submitButtonHoverBoxShadowVOffset,
     submitButtonHoverBoxShadowBlur,
     submitButtonHoverBoxShadowSpread,
     submitButtonHoverBoxShadowPosition,
     submitButtonBoxShadowColor,
     submitButtonBoxShadowHOffset,
     submitButtonBoxShadowVOffset,
     submitButtonBoxShadowBlur,
     submitButtonBoxShadowSpread,
     submitButtonBoxShadowPosition,

     headingTitle,
     headingDesc,
     seperatorStyle,
     headSpacing,
     subheadSpacing,
     separatorSpacing,
     headSpacingTablet,
     subheadSpacingTablet,
     separatorSpacingTablet,
     headSpacingMobile,
     subheadSpacingMobile,
     separatorSpacingMobile,
     separatorHeight,
     separatorWidth,
     separatorWidthType,
     separatorColor,
     headingTitleFontFamily,
     headingTitleFontSize,
     headingTitleFontSizeTablet,
     headingTitleFontSizeMobile,
     headingTitleFontWeight,
     headingTitleLineHeight,
     headingTitleLetterSpacing,
     headingTitleColor,
     subHeadingTitleFontFamily,
     subHeadingTitleFontSize,
     subHeadingTitleFontSizeMobile,
     subHeadingTitleFontSizeTablet,
     subHeadingTitleFontWeight,
     subHeadingTitleLineHeight,
     subHeadingTitleLetterSpacing,
     subHeadingTitleColor,
     headingTag,
     level,
     headingAlignment,
     headingAlignmentTablet,
     headingAlignmentMobile,
     showHeading,
     showSubHeading,
     showSeparator,
     textDecoration,
     textDecorationSubHeading,
     block_id,
   } = props.attributes;



   var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  var submitButtonBoxShadowPositionCSS = submitButtonBoxShadowPosition;

  if ("outset" === submitButtonBoxShadowPosition) {
    submitButtonBoxShadowPositionCSS = "";
  }

  var submitButtonHoverBoxShadowPositionCSS = submitButtonHoverBoxShadowPosition;

  if ("outset" === submitButtonHoverBoxShadowPosition) {
    submitButtonHoverBoxShadowPositionCSS = "";
  }

  

  let updatedButtonBgHColor = "";
  let updatedButtonBgHImage = "";
  if (buttonHbackgroundType === "color") {
    updatedButtonBgHColor = ctaHoverBackColor;
  } else if (buttonHbackgroundType == "gradient") {
    updatedButtonBgHImage = `linear-gradient(${buttonHgradientDirection}deg, ${buttonHbackgroundColor1} ${buttonHcolorLocation1}%, ${buttonHbackgroundColor2} ${buttonHcolorLocation2}%)`;
  }

  let updatedButtonBackgroundColor = "";
  let updatedButtonBackgroundImage = "";
  if (buttonbackgroundType == "color") {
    updatedButtonBackgroundColor = ctaBackColor;
  } else if (buttonbackgroundType == "gradient") {
    updatedButtonBackgroundImage = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  }

  let imgopacity = opacity / 100;

  let updatedBackgroundImage = "";
  let backgroundImageEffect = "";
  let colorType = "";
  if (overlayType === "color") {
    let colorType = `${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )}`;

    if(backgroundImage) {
      updatedBackgroundImage = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;
    }
    backgroundImageEffect = "";
  }else {
    if (gradientOverlayType === "linear") {
      backgroundImageEffect = `linear-gradient(${gradientOverlayAngle}deg, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
    if (gradientOverlayType === "radial") {
      backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
  }

 
   var selectors = {
    //  "": {
    //    "text-align": formAlignment,
    //  },

    " .responsive-form-title-text": {
      "font-family": formTitleFontFamily,
      "font-size": generateCSSUnit(formTitleFontSize, "px"),
      "font-weight": formTitleFontWeight,
      "line-height": formTitleLineHeight,
      "letter-spacing": generateCSSUnit(formTitleLetterSpacing, "px"),
      color: formTitleColor,
      "text-align": titleAlignment,

      // "margin-bottom": generateCSSUnit(headSpacing, "px"),
    },

    " .responsive-form-desc-text": {
      "font-family": formDescriptionFontFamily,
      "font-size": generateCSSUnit(formDescriptionFontSize, "px"),
      "font-weight": formDescriptionFontWeight,
      "line-height": formDescriptionLineHeight,
      "letter-spacing": generateCSSUnit(formDescriptionLetterSpacing, "px"),
      color: formDescriptionColor,
      "text-align": titleAlignment,

      // "margin-bottom": generateCSSUnit(subheadSpacing, "px"),
    },
     
     " .form": {
      "text-align": formAlignment,
      "width":generateCSSUnit(formWidth, "%"),
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
      "margin-top": generateCSSUnit(topMargin, "px"),
      "margin-bottom":generateCSSUnit(bottomMargin, "px"),
      "margin-left": generateCSSUnit(leftMargin, "px"),
      "margin-right": generateCSSUnit(rightMargin, "px"),
      "border-width": generateCSSUnit(formBorderWidth, "px"),
      "border-color": formBorderColor,
      "border-style": formBorderStyle,
      "border-radius": generateCSSUnit(formBorderRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              `${hexToRgba(backgroundColor1 || "#fff", imgopacity || 0)}`,
              `${hexToRgba(backgroundColor2 || "#fff", imgopacity || 0)}`,
              gradientDirection,
              colorLocation1,
              colorLocation2
            )
          : undefined,
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
     }, 

     " .form:hover": {
      "box-shadow":
	  	hoverboxShadowColor !== ""
		  ? generateCSSUnit(hoverboxShadowHOffset, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowVOffset, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowBlur, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowSpread, "px") +
        	" " +
        	hoverboxShadowColor +
        	" " +
        	hoverboxShadowPositionCSS
		  : "",
      "background-color":
        backgroundType == "color" && ' ' !== backgroundColorHover
          ? `${hexToRgba(backgroundColorHover || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-position": backgroundImageHoverPosition,
      "background-attachment": backgroundImageHoverAttachment,
      "background-repeat": backgroundImageHoverRepeat,
      "background-size": backgroundImageHoverSize,
     }, 

     " .wpcf7 input:not([type=submit])": {      
      color: inputTextColor,
      'background-color': inputBackgroundColor,
      "border-width": generateCSSUnit(inputBorderWidth, "px"),
      "border-color": inputBorderColor,
      "border-style": inputBorderStyle,
      "border-radius": generateCSSUnit(inputBorderRadius, "px"),
      "padding-top": generateCSSUnit(inputTopPadding, "px"),
      "padding-bottom": generateCSSUnit(inputBottomPadding, "px"),
      "padding-left": generateCSSUnit(inputLeftPadding, "px"),
      "padding-right": generateCSSUnit(inputRightPadding, "px"),
      "text-indent": generateCSSUnit(textIndent, "px"),
      "font-family": inputFontFamily,
      "font-size": generateCSSUnit(inputFontSize, "px"),
      "font-weight": inputFontWeight,
      "line-height": inputLineHeight,
      "letter-spacing": generateCSSUnit(inputLetterSpacing, "px"),
      'margin-top': generateCSSUnit( labelSpacing, 'px' ),

      
    },

    ' .wpcf7 textarea': {
			color: inputTextColor,
      'background-color': inputBackgroundColor,
      "border-width": generateCSSUnit(inputBorderWidth, "px"),
      "border-color": inputBorderColor,
      "border-style": inputBorderStyle,
      "border-radius": generateCSSUnit(inputBorderRadius, "px"),
      "width": generateCSSUnit(textareaWidth, "%"),
      "height": generateCSSUnit(textareaHeight, "px"),
      "text-indent": generateCSSUnit(textIndent, "px"),
      "font-family": inputFontFamily,
      "font-size": generateCSSUnit(inputFontSize, "px"),
      "font-weight": inputFontWeight,
      "line-height": inputLineHeight,
      "letter-spacing": generateCSSUnit(inputLetterSpacing, "px"),
      'margin-top': generateCSSUnit( labelSpacing, 'px' ),
		},

    ' .wpcf7-form-control': {
      "width": generateCSSUnit(inputWidth, "%"),
      "height": generateCSSUnit(inputHeight, "px"),
		},

    ' .wpcf7-select': {
      color: inputTextColor,
      'background-color': inputBackgroundColor,
		},   

    ' .wpcf7 form.wpcf7-form:not(input)': {
			'color': labelColor,
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSize, "px"),
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
      "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
		},

    ' ::-webkit-input-placeholder': {
			'color': placeholderColor,
		},
    ' :-moz-placeholder ': {
			'color': placeholderColor,
		},
    ' ::-moz-placeholder': {
			'color': placeholderColor,
		},
    ' :-ms-input-placeholder': {
			'color': placeholderColor,
		},
		// ' textarea::placeholder': {
		// 	'color': labelColor,
		// },

    ' input[type="checkbox"]': {
			'color': hoverRadioCheckboxColor,
		},

    // Check box Radio.
    " .wpcf7 .wpcf7-checkbox input[type='checkbox']": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
      "border": 'solid',
      'width': generateCSSUnit(radioCheckboxSize, "px"),
      'height': generateCSSUnit(radioCheckboxSize, "px"),
      "border-width": generateCSSUnit(radioCheckboxBorderWidth, "px"),
      "border-color": radioCheckboxBorderColor,
      
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'border-color': hoverRadioCheckboxColor,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'display': 'inline-flex',
			'height': generateCSSUnit( radioCheckboxSize, 'px' ),
			'width': generateCSSUnit( radioCheckboxSize, 'px' ),
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'border-color': hoverRadioCheckboxColor,
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'height': generateCSSUnit( radioCheckboxSize, 'px' ),
			'width': generateCSSUnit( radioCheckboxSize, 'px' ),
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			// ...fieldBorderCSS
		},
    " .wpcf7 .wpcf7-radio input[type='radio']": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'border-color': hoverRadioCheckboxColor,
      'width': generateCSSUnit(radioCheckboxSize, "px"),
      'height': generateCSSUnit(radioCheckboxSize, "px"),
		},
    " .wpcf7 .wpcf7-radio input[type=radio]:checked::before": {
			'background-color': hoverRadioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'border-color': hoverRadioCheckboxColor,
      'width': 'calc( ' + radioCheckboxSize + 'px / 1.5 )',
      'height': 'calc( ' + radioCheckboxSize + 'px / 1.5 )',
		},
    " .wpcf7 .wpcf7-radio input[type='radio']:checked + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'font-size': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'border-color': placeholderColor,
		},
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": {
			'background-color': radioCheckboxColor,
			'color': hoverRadioCheckboxColor,
			'display': 'inline-flex',
			'border-radius': '100%',
			'height': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
			'width': 'calc( ' + radioCheckboxSize + 'px / 1.2 )',
		},

    

    //Submit button
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			"font-family": submitButtonFontFamily,
      "font-size": generateCSSUnit(submitButtonFontSize, "px"),
      "font-weight": submitButtonFontWeight,
      "line-height": submitButtonLineHeight,
      "letter-spacing": generateCSSUnit(submitButtonLetterSpacing, "px"),
      color: ctaColor + "!important",
      "background-color": updatedButtonBackgroundColor,
      "background-image": updatedButtonBackgroundImage,
      // "margin-left": "left" == blockAlign ? 0 : "",
      // "margin-right": "right" == blockAlign ? 0 : "",
      // "margin-bottom": generateCSSUnit(buttonSpace, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "border-color": ctaBorderColor,
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-style": ctaBorderStyle,
      "width":generateCSSUnit(submitButtonWidth, "px"),
      "Height":generateCSSUnit(submitButtonHeight, "px"),
      "box-shadow":
        generateCSSUnit(submitButtonBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(submitButtonBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(submitButtonBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(submitButtonBoxShadowSpread, "px") +
        " " +
        submitButtonBoxShadowColor +
        " " +
        submitButtonBoxShadowPositionCSS,
      
		},  
     
     
    ' .wpcf7 input.wpcf7-form-control.wpcf7-submit:hover': {
			color: ctaHoverColor + "!important",
      "background-color": updatedButtonBgHColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBgHImage,
      "border-color" : ctaHoverBorderColor,
      "box-shadow":
        generateCSSUnit(submitButtonHoverBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(submitButtonHoverBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(submitButtonHoverBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(submitButtonHoverBoxShadowSpread, "px") +
        " " +
        submitButtonHoverBoxShadowColor +
        " " +
        submitButtonHoverBoxShadowPositionCSS,
		},


    ' div > p': {
			"text-align": ctaButtonAlignment,
		},
    	





     ' .block-editor-block-list__block wp-block .responsive-contact-form-7-styler-container': {
     }
   };
 
   var mobile_selectors = {
     
   };
 
   var tablet_selectors = {
     
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-contact-form-7-styler.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 