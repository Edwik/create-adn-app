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
          onSuccessFunction()
        } else {
          onFailFunction()
        }
        setLoading(false)
      }, [data])
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
