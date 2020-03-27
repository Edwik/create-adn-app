const Font = {
  h1: {
    fontFamily: 'poppins-bold',
    fontSize: 34,
    lineHeight: 48
  },
  h2: {
    fontFamily: 'poppins-bold',
    fontSize: 26,
    lineHeight: 48
  },
  h3: {
    fontFamily: 'poppins-bold',
    fontSize: 22,
    lineHeight: 48
  },
  h4: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
    lineHeight: 24
  },
  subtitle: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 22
  },
  subtitleBold: {
    fontFamily: 'roboto-bold',
    fontSize: 16,
    lineHeight: 30
  },
  body1: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 22
  },
  body1Bold: {
    fontFamily: 'roboto-bold',
    fontSize: 16,
    lineHeight: 30
  },
  body2: {
    fontFamily: 'roboto-medium',
    fontSize: 14,
    lineHeight: 20
  },
  body2Bold: {
    fontFamily: 'roboto-bold',
    fontSize: 14,
    lineHeight: 24
  }
}

const Borders = {
  Normal:{
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderStyle: 'solid',
    borderRadius: 4
  },
  Active:{
    borderWidth: 1,
    borderColor: '#0083CE',
    borderStyle: 'solid',
    borderRadius: 4
  },
  Complete:{
    borderWidth: 1,
    borderColor: '#273136',
    borderStyle: 'solid',
    borderRadius: 4
  },
  Error:{
    borderWidth: 1,
    borderColor: '#FA2E2E',
    borderStyle: 'solid',
    borderRadius: 4
  }
}

const Shadow = {
  Main:{
    shadowColor: '#070C10',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  }
}

export default {Font, Borders, Shadow}