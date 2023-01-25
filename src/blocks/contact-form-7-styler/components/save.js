/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 
 /**
  * WordPress dependencies
  */
 const { Component, Fragment } = wp.element;
 const { RichText } = wp.editor;
 
 export default class Save extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
     const {
       headingTitle,
       headingId,
       headingDesc,
       seperatorStyle,
       seperatorPosition,
       headingTag,
       showHeading,
       showSubHeading,
       showSeparator,
       formJson,
       block_id,
       anchor,
     } = this.props.attributes;
 
     return [
       <div
         id={anchor}
         className={classnames(
           this.props.className,
           "responsive-block-editor-addons-block-contact-form-7-styler",
           `block-${block_id}`
         )}
       >
         <div dangerouslySetInnerHTML={ { __html: formJson } } />
       </div>,
     ];
   }
 }
 