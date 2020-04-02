import React, {useEffect} from 'react'
import PropTypes from "prop-types";
import { Text } from 'react-native'
import { Strings } from './../../tools/Lang'
import { ArrayString } from '../../tools/ArrayStrings'
import Theme from './../../tools/Theme'
import Identity from './../../utils/Identity'

export default function Txt(props) { 

  useEffect( ()=> {
   
    ArrayString(props.Key, props.text, props.avoid)
  },[])

  const toCapitalize = (text) => {
    let tempText = ''
    text.split(',')[0].split(' ').forEach((item) => {
      tempText += ' ' + item.charAt(0).toUpperCase() + item.toLowerCase().slice(1)
    })
    return text.split(',').length > 1 ? tempText + ',' + text.split(',')[1] : tempText
  }

  return (
    <Text
      id={props.Key}
      style={[
        Identity.Font[props.identity],
        {
          color: Theme[props.color]
        },
        props.style
      ]}
    >
      {
        Strings === null ? props.isCapitalize ? toCapitalize(props.text)
        : props.text : Strings[props.Key]
      }
    </Text>
  )
}

Txt.propTypes = {
  Key: PropTypes.string,              //Key
  text: PropTypes.string.isRequired,  //text of the component.
  isCapitalize: PropTypes.bool,       //if you wish capitalize the text.
  avoid: PropTypes.bool,              //permite repetirse esta Key, yes or no.
  identity: PropTypes.string,         //style of text
  color: PropTypes.string,            //color of text
  onPress: PropTypes.func             // Function to execute when click the text
};

Txt.defaultProps = {
  text: "- -",
  isCapitalize: true,
  avoid: false,
  identity: 'body1',
  color: 'PRIMARY_TEXT',
  onPress: () => {}
}