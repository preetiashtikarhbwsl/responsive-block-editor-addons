/**
 * Box-Shadow reusable component.
 *
 */
import BoxShadowControl from "../../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../../utils/components/box-shadow-helper";


const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ButtonBorderControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaBorderStyle,
              ctaBorderWidth,
              ctaBorderRadius,
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
              submitButtonBoxShadowPosition
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Border Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
              <SelectControl
                  label={__("Border Style", "responsive-block-editor-addons")}
                  value={ctaBorderStyle}
                  onChange={(value) => setAttributes({ ctaBorderStyle: value })}
                  options={[
                      {
                          value: "none",
                          label: __("None", "responsive-block-editor-addons"),
                      },
                      {
                          value: "solid",
                          label: __("Solid", "responsive-block-editor-addons"),
                      },
                      {
                          value: "dotted",
                          label: __("Dotted", "responsive-block-editor-addons"),
                      },
                      {
                          value: "dashed",
                          label: __("Dashed", "responsive-block-editor-addons"),
                      },
                      {
                          value: "double",
                          label: __("Double", "responsive-block-editor-addons"),
                      },
                      {
                          value: "groove",
                          label: __("Groove", "responsive-block-editor-addons"),
                      },
                      {
                          value: "inset",
                          label: __("Inset", "responsive-block-editor-addons"),
                      },
                      {
                          value: "outset",
                          label: __("Outset", "responsive-block-editor-addons"),
                      },
                      {
                          value: "ridge",
                          label: __("Ridge", "responsive-block-editor-addons"),
                      },
                  ]}
              />
              {"none" != ctaBorderStyle && (
                  <Fragment>
                      <RangeControl
                          label={__("Border Width", "responsive-block-editor-addons")}
                          value={ctaBorderWidth}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderWidth: value !== undefined ? value : 2,
                              })
                          }
                          min={0}
                          max={50}
                          allowReset
                      />

                      <RangeControl
                          label={__("Border Radius", "responsive-block-editor-addons")}
                          value={ctaBorderRadius}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderRadius: value !== undefined ? value : 0,
                              })
                          }
                          min={0}
                          max={100}
                          allowReset
                      />
                      <BoxShadowControl
                          setAttributes={setAttributes}
                          label={__("Box Shadow", "responsive-block-editor-addons")}
                          submitButtonBoxShadowColor={{ value: submitButtonBoxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
                          submitButtonBoxShadowHOffset={{
                              value: submitButtonBoxShadowHOffset,
                              label: __("Horizontal", "responsive-block-editor-addons"),
                          }}
                          submitButtonBoxShadowVOffset={{
                              value: submitButtonBoxShadowVOffset,
                              label: __("Vertical", "responsive-block-editor-addons"),
                          }}
                          submitButtonBoxShadowBlur={{
                              value: submitButtonBoxShadowBlur,
                              label: __("Blur", "responsive-block-editor-addons"),
                          }}
                          submitButtonBoxShadowSpread={{
                              value: submitButtonBoxShadowSpread,
                              label: __("Spread", "responsive-block-editor-addons"),
                          }}
                          submitButtonBoxShadowPosition={{
                              value: submitButtonBoxShadowPosition,
                              label: __("Position", "responsive-block-editor-addons"),
                          }}
                      />
                      <BoxShadowControlHelper
                          setAttributes={setAttributes}
                          submitButtonHoverBoxShadowColor={{ value: submitButtonHoverBoxShadowColor }}
                          submitButtonHoverBoxShadowHOffset={{ value: submitButtonHoverBoxShadowHOffset }}
                          submitButtonHoverBoxShadowVOffset={{ value: submitButtonHoverBoxShadowVOffset }}
                          submitButtonHoverBoxShadowBlur={{ value: submitButtonHoverBoxShadowBlur }}
                          submitButtonHoverBoxShadowSpread={{ value: submitButtonHoverBoxShadowSpread }}
                          submitButtonHoverBoxShadowPosition={{ value: submitButtonHoverBoxShadowPosition }}
                          label={__("Hover Box Shadow", "responsive-block-editor-addons")}
                          attrNameTemplate="submitButtonHover%s"
                      />
                  </Fragment>
              )}
          </PanelBody>
      );

    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonBorderControl;
