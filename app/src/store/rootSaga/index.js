import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { GET_PROFILE, LOGIN, SET_PROFILE, TOKEN, SET_CARD, SET_PRODUCT } from '../../constant'
import { authService, cardService, productService, userService } from '../../services';

function* fetchLogin(action) {
    try {
        const token = yield call(authService.login,action.payload);
         localStorage.setItem(TOKEN,JSON.stringify(token.data))
         yield put({type: GET_PROFILE})
    }
    catch(e) {
        alert('err')
    }
}
function* getProfile(){
    try {
        const user = yield call(userService.getInfo);
        yield put({
            type: SET_PROFILE,
            payload: user.data
        })
    } catch(err) {

    }
}
function* getCard() {
    try{
        const token = JSON.parse(localStorage.getItem(TOKEN))
        if(token) {
            const card = yield call(cardService.getCard);
            yield put({
                type: SET_CARD,
                payload: card.data
            })
        }
    }catch(err) {
        console.log(err)
    }
}
function* getProduct() {
    try{
        const token = JSON.parse(localStorage.getItem(TOKEN))
        if(token) {
            const product = yield call(productService.getProduct);
            yield put({
                type: SET_PRODUCT,
                payload: product.data
            })
        }
    }catch(err) {
        console.log(err)
    }
}
function* mySaga() {
    yield takeLatest(LOGIN , fetchLogin);
    yield takeLatest(GET_PROFILE, getProfile)
    yield takeLatest(GET_PROFILE, getCard)
    yield takeLatest(GET_PROFILE, getProduct)
}


export default mySaga