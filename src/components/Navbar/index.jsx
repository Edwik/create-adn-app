import React from 'react'
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native'

import { Link } from '../../navigation/AppRouterSources'
import { isMobileDevice } from '../../tools/platform'
import Pages from '../../pages/exportPages'
import Icon from '../Icons'
import Txt from '../Txt'
import Theme from '../../tools/Theme'

export default function Navbar(props) {
  const navbarPages = Pages.filter(page => page.layout === '/main')

  const LinkComponent = (props) => {
    return Platform.OS === 'web'
      ? <Link
        {...props}
      >{props.children}</Link>
      : <Link
        {...props}
        component={TouchableOpacity}
      >{props.children}</Link>
  }

  const getItemColor = (currentPath) => {
    return currentPath
      ? isMobileDevice() ? Theme.ACTIVE_COLOR : Theme.TEXT_AND_ICONS
      : Theme.NORMAL_COLOR
  }

  return (
    <View
      style={styles.navbar}
    >
      {navbarPages.map((page, key) =>
        <View
          key={key}
          style={styles.navbarItemContainer}
        >
          <LinkComponent to={page.path} style={{ textDecorationLine: 'none'}}>
            <View style={styles.navbarItem}>
              <Icon
                style={styles.icon}
                name={page.name}
                height='20'
                width='20'
                fill={getItemColor(props.location.pathname.startsWith(page.path))}
              />
              <Txt
                Key={`navbar${page.name}`}
                text={page.name}
                style={[
                  styles.title,
                  {
                    color: getItemColor(props.location.pathname.startsWith(page.path))
                  }
                ]}
              />
            </View>
          </LinkComponent>
        </View>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    left: 0,
    flexDirection: isMobileDevice() ? 'row' : 'column',
    justifyContent: isMobileDevice() ? 'center' : 'flex-start',
    bottom: isMobileDevice() ? 0 : '',
    height: isMobileDevice() ? 'auto' : '100%',
    width: isMobileDevice() ? '100%' : 75,
    backgroundColor: isMobileDevice() ? Theme.GRAY : Theme.ACTIVE_COLOR,
    paddingTop: isMobileDevice() ? 0 : 75
  },
  navbarItemContainer: {
    flex: isMobileDevice() ? 1 : -1
  },
  navbarItem: {
    paddingVertical: isMobileDevice() ? 12 : 25,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: 'auto'
  },
  title: {
    fontSize: 10,
    textAlign: 'center'
  }
})
