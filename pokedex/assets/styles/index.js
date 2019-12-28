import {StyleSheet, Dimensions} from 'react-native';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const WHITE = '#ffffff';
const BLACK = '#000000';
const GRAY = '#f5f5f5';

const HEADER_fONT = 'CircularStd-Bold';
const TEXT_FONT = 'CircularStd-Book';

const styles = StyleSheet.create({
  fullbackground: {
    flex: 1,
    backgroundColor: GRAY,
  },
  backgroundPokeBall: {
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT - 200,
  },
  homeView: {
    height: DIMENSION_HEIGHT - 175,
    backgroundColor: WHITE,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
    elevation: 0.5,
  },
  pokeballBG: {
    width: 235,
    height: 235,
    flex: 1,
    position: 'absolute',
    top: -50,
    left: DIMENSION_WIDTH - 160,
    tintColor: GRAY,
  },
  homeHeader: {
    fontFamily: HEADER_fONT,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: -15,
  },
  homeHeaderContainer: {
    marginTop: 100,
    marginHorizontal: 30,
    flexDirection: 'column',
  },
  searchWrapper: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 60,
    backgroundColor: GRAY,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  searchText: {
    flex: 1,
    fontFamily: TEXT_FONT,
    fontSize: 14,
    paddingLeft: 15,
    textTransform: 'capitalize',
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    flexWrap: 'wrap',
    marginTop: 37,
  },
  categoriePokeBall: {
    width: 20,
    height: 20,
    flex: 1,
  },
  categorie: {
    borderRadius: 12,
    width: DIMENSION_WIDTH / 2 - 37,
    height: 60,
    marginVertical: 6,
    overflow: 'hidden',
    shadowOpacity: 0.8,
    shadowColor: '#5dc3a8',
    shadowRadius: 10,
    shadowOffset: {height: 8, width: 0},
    elevation: 24,
  },
  BGCatLeft: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -60,
    left: -48,
    tintColor: GRAY + '33',
    zIndex: 0,
  },
  BGCatRight: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -10,
    left: DIMENSION_WIDTH / 2 - 37 - 65,
    tintColor: GRAY + '33',
    zIndex: 1,
  },
  categorieText: {
    color: WHITE,
    fontFamily: TEXT_FONT,
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  categorieTextContainer: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  stickyHome: {
    position: 'absolute',
    top: 0,
    width: DIMENSION_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff1500',
    height: 85,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    //zIndex: 10,
  },
  stickyHomeTitle: {
    fontFamily: TEXT_FONT,
    color: WHITE,
    fontWeight: 'bold',
    paddingTop: 15,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  newsImage: {
    width: 85,
    height: 50,
  },
  fullNewsTitleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  fullNewsTitle: {
    fontFamily: TEXT_FONT,
    fontWeight: 'bold',
    fontSize: 20,
    color: BLACK,
  },
  fullNewsSeeAll: {
    fontFamily: TEXT_FONT,
    fontWeight: '800',
    color: '#848fdf',
    textTransform: 'capitalize',
  },
  newsCompContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderBottomWidth: 0.4,
    borderBottomColor: '#d4d5d6',
  },
  newsCompTextContainer: {
    width: '60%',
  },
  newsCompText: {
    fontFamily: TEXT_FONT,
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  newsCompDate: {
    paddingTop: 3,
    fontFamily: TEXT_FONT,
    fontSize: 10,
    color: '#9e9e9e',
  },
  backgroundPokemons: {
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  MenuBurgerButton: {
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
    //marginHorizontal: 7,
    borderRadius: 30,
  },
  MenuBurgerButtonContainer: {
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  headerContainer: {
    //backgroundColor: 'transparent',
    flex: 1,
    width: DIMENSION_WIDTH,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    paddingVertical: 0,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: -50,
    // backgroundColor: 'blue',
    //marginTop: 30,
    //height: 40,
  },
  headerTitleContainer: {
    flex: 1,
    //width: DIMENSION_WIDTH,
    marginTop: 50,
    //backgroundColor: 'blue',
    marginLeft: -20,
  },
  headerTitle: {
    fontFamily: TEXT_FONT,
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  pokemonsContainer: {
    paddingTop: 180,
    paddingHorizontal: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pokeCard: {
    width: DIMENSION_WIDTH / 2 - 35,
    height: 105,
    backgroundColor: '#59e0c0',
    borderRadius: 15,
  },
  pokeCardBackground: {
    width: DIMENSION_WIDTH / 2 - 35,
    height: 105,
    flex: 1,
  },
  pokeCardBGIcon: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 40,
    left: DIMENSION_WIDTH / 2 - 37 - 74,
    tintColor: GRAY + '33',
    zIndex: 1,
  },
  pokeCardImage: {
    width: 63,
    height: 63,
    zIndex: 5,
  },
  pokeCardIDContainer: {
    flex: 1,
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  pokeCardID: {
    color: '#00000033',
    fontFamily: TEXT_FONT,
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
  namePokeCardContainer: {
    flex: 1,
    marginTop: -20,
    paddingLeft: 12,
  },
  namePokeCard: {
    color: WHITE,
    fontFamily: TEXT_FONT,
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  twoColPokeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriePokeCardContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoriePokeCard: {
    color: WHITE,
    fontFamily: TEXT_FONT,
    fontSize: 8,
    padding: 0,
    margin: 0,
  },
  twoColPokeCardFirst: {
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
  },
  pokeCardImageContainer: {
    paddingBottom: 7,
    paddingRight: 15,
  },
});

export default styles;
