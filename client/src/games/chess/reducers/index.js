import {
	INCREMENT,
} from '../actions';

// Reducer 
export function counter1(state1, action1) {
	switch(action1.type) {
		case INCREMENT:
			return {
				count: state1.count1 + 1
			}
        default:
            return state1;
	}
}

export function counter2(state2, action2) {
	switch(action2.type) {
		case INCREMENT:
			return {
				count2: state2.count2 + 1
			}
        default:
            return state2;
	}
}
