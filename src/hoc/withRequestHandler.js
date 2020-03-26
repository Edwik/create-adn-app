import React, { useState, useEffect } from 'react'

const withRequestHandler = (WrappedComponent) => (
  props => {
    const [loading, setLoading] = useState(false)

    const initRequest = (requestFunction) => {
      return useEffect(() => {
        setLoading(true)
        requestFunction()
      }, [])
    }

    const responseHandler = (data ,onSuccessFunction, onFailFunction) => {
      return useEffect(() => {
        if(data && data.status === 200) {
          onSuccessRequest()
          onSuccessFunction()
        } else {
          onFailRequest()
          onFailFunction()
        }
        setLoading(false)
      }, [data])
    }

    const onSuccessRequest = () => {
      // Show success notification
    }

    const onFailRequest = () => {
      // Show error notification
      // Send error log
    }

    return (
      <WrappedComponent
        loading={loading}
        setLoading={setLoading}
        initRequest={initRequest}
        responseHandler={responseHandler}
        {...props}
      />
    )
  }
)

export default withRequestHandler
