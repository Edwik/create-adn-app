import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SkeletonContent from 'react-native-skeleton-content'

import { isSmallDevice } from '../../../../tools/platform'
import QuickNumberCard from '../QuickNumberCard'

export default function QuickNumbers(props) {
  const {
    quickNumbers,
    loading
  } = props

  const skeleton = {
    firstContainer: {
      flex: 1,
      flexDirection: 'row'
    },
    secondContainer: {
      flex: 1,
      flexDirection: 'row'
    },
    firstCard: {
      flex: 1,
      height: 86,
      marginRight: isSmallDevice() ? 10 : 20
    },
    secondCard: {
      flex: 1,
      height: 86
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.column,
          styles.firstColumn
        ]}
      >
        <SkeletonContent
          containerStyle={skeleton.firstContainer}
          isLoading={loading}
          layout={[
            skeleton.firstCard,
            skeleton.secondCard
          ]}
        >
          <QuickNumberCard
            title='All available loads'
            number={quickNumbers.all_available_loads}
            color='ORANGE'
            style={[
              styles.cardContainer,
              styles.firstCard
            ]}
          />
          <QuickNumberCard
            title='My available offers'
            number={quickNumbers.my_available_offers}
            color='GREEN'
            style={styles.cardContainer}
          />
        </SkeletonContent>
      </View>
      <View style={styles.column}>
        <SkeletonContent
          containerStyle={skeleton.secondContainer}
          isLoading={loading}
          layout={[
            skeleton.firstCard,
            skeleton.secondCard
          ]}
        >
          <QuickNumberCard
            title='Order pickup'
            number={quickNumbers.order_pickup}
            color='BLUE'
            style={[
              styles.cardContainer,
              styles.firstCard
            ]}
          />
          <QuickNumberCard
            title='Order delivery'
            number={quickNumbers.order_delivery}
            color='PINK'
            style={styles.cardContainer}
          />
        </SkeletonContent>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'column'
  },
  firstColumn: {
    marginBottom: isSmallDevice() ? 10 : 20
  },
  column: {
    flexDirection: 'row'
  },
  firstCard: {
    marginRight: isSmallDevice() ? 10 : 20
  },
  cardContainer: {
    flex: 1
  }
})

QuickNumbers.propTypes = {
  quickNumbers: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

QuickNumbers.defaultProps = {
  quickNumbers: {},
  loading: false
}
