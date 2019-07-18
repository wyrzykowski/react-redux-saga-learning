import { takeEvery, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';


function* ageUpAsync() {
    let weatherData;
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
    yield put({ type: 'AGE_UP_ASYNC', value: 1, data: weatherData })
}


// Tutaj watcher obserwuje czy jest wywołana akcja w komponencie typu "AGE_UP "i wywoluje funkcje ageUpAsync 
export function* watchAgeUp() {
    yield takeEvery('AGE_UP', ageUpAsync);
}