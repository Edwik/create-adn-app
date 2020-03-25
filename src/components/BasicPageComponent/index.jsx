import React from 'react'
import PropTypes from "prop-types";
import { Image, Text, View } from 'react-native'

import Assets from './../../../assets/export'

export default function BasicPageComponent(props) {

  const HeaderComponent = () => {
    return(
      <View>
        <Image resizeMode='contain' source={Assets.logo} style={{ width: 150, height: 150 }} />
      </View>
    )
  }

  const ContainerComponent = (props) => {
    return(
      <View>

        <Text style={{ fontSize: 21, textAlign: 'center', fontFamily: 'roboto-bold', color: '#7E1499' }}>
          {props.title}
        </Text>

        <Text style={{ textAlign:'center', marginTop: 5, maxWidth: 300 }}>
            {props.description}
        </Text>

      </View>
    )
  }

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HeaderComponent/>
      <ContainerComponent title={props.title} description={props.description}/>
    </View>
  )
}

BasicPageComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

BasicPageComponent.defaultProps = {
  title: "Not Found",
  description: "The component is not has found. If you need help pleaase contact with support."
};