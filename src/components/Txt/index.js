import React, {useEffect} from 'react'
import PropTypes from "prop-types";
import { Text } from 'react-native'
import { Strings } from '../../tools/lang'
import { ArrayString } from '../../tools/ArrayStrings'
import Theme from './../../tools/Theme'
import Identity from './../../utils/Identity'
import nextId,{ useId } from "react-id-generator";

export default function Txt(props) { 

  const Key = nextId('test-id-');

  useEffect( ()=> {
   
    ArrayString(Key, props.Text, props.avoid)
  },[])

  const toCapitalize = (text) => {
    let tempText = ''
    text.split(',')[0].split(' ').forEach((item) => {
      tempText += ' ' + item.charAt(0).toUpperCase() + item.toLowerCase().slice(1)
    })
    return text.split(',').length > 1 ? tempText + ',' + text.split(',')[1] : tempText
  }

  return (
    <Text id={Key} style={Identity.Font[props.identity], {color: Theme[props.color]} }>
      {
        Strings === null ? props.isCapitalize ? toCapitalize(props.text)
        : this.props.text : Strings[Key]
      }
    </Text>
  )
}

Txt.propTypes = {
  text: PropTypes.string,       //text of the component.
  isCapitalize: PropTypes.bool, // if you wish capitalize the text.
  avoid: PropTypes.bool,        //permite repetirse esta key, yes or no.
  identity: PropTypes.string,   //style of text
  color: PropTypes.string       //color of text
};

Txt.defaultProps = {
  text: "- -",
  isCapitalize: true,
  avoid: false,
  identity: 'body1',
  color: 'PRIMARY_TEXT'
}