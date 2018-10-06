import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

export const DECKS_STORAGE_KEY = 'MobileFlashCards:decks';
const NOTIFICATION_KEY = 'MobileFlashCards:notifications'

const initialState = {
    decks: {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
};

export function getDecks() {
        return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        if(!results) {
            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialState.decks)).then(() => {
                const temp =  AsyncStorage.getItem(DECKS_STORAGE_KEY);
                return temp.then(JSON.parse);
            });

        } else {
            return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
        }
    });

}

export function saveDeckTitle(title) {
     return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    })).then(() => {
         return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse)
     });
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        const newQuestions = JSON.parse(results)[title].questions.concat(card);
        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: {
                title,
                questions: newQuestions
            }
        }));
    });
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: "Don't forget to practice today",
        body: "Everyday practice is important to get better, do not forget to practice today!",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

// for notificaion settings the provided code UdaciFitness was used
export function setLocalNotification () {

    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(18);

                            tomorrow.setMinutes(54);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}


