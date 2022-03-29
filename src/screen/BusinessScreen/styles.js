import { StyleSheet } from 'react-native'; 

export default StyleSheet.create({
  fullscreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: undefined,
    aspectRatio: 100 / 75,
    borderRadius: 5,
    marginLeft: 15,
    marginVertical: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 15
  },
  rating: {
    fontSize: 16,
    color: '#7f8c8d',
    marginLeft: 15
  },
  infoText: {
    fontSize: 16
  },
  categories: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginHorizontal: 15,
    marginTop: 20,
    textAlign: 'center'
  }
});