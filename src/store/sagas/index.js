import { all, takeLatest } from 'redux-saga/effects';
import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}

/**
 * takeLatest: Se o usuario clicar varias vezes e disparar varias vezes, ele pega apenas
 * a ultima requisição
 * takeEvery: Faz o inverso do latest
 */
