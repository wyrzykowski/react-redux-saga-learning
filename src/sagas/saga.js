import { takeEvery, apply, putResolve, take, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';


function* scrollTo(payload) {
    yield console.log("Start Scrolling...");
    yield put({ type: 'Scroll' })
    yield console.log("End Scrolling to:", payload.currentPage);
}

function* getApiData(payload) {
    let weatherData;
    console.log('Loading...')
    yield axios.get('http://worldtimeapi.org/api/timezone/Europe/Warsaw', {
        params: {
            ID: 12345
        }
    })
        .then(function (response) {
            weatherData = response;

        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    //tu wywołuje akcje już zwykłą REDUXA, i przekazuje jej payload
    yield put({ type: 'GET_DATA_SUCCESS', data: weatherData })
    yield put({ type: 'START_SCROLL_TO', currentPage: payload.currentPage })
}


// Tutaj watcher obserwuje czy jest wywołana akcja w komponencie typu "AGE_UP "i wywoluje funkcje ageUpAsync 
export function* watchAgeUp() {
    yield takeLatest('GET_DATA', getApiData);
    yield takeLatest('START_SCROLL_TO', scrollTo);
}