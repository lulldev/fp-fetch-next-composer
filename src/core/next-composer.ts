import { createNanoEvents } from 'nanoevents';
import _ from 'lodash';

export interface NextEvent {
  type: string;
  code: string;
  params?: { [key: string]: any };
}

enum NextActionTypes {
  REDIRECT = 'redirect',
  // TODO: other scenarios
}

export const nextEventEmitter = createNanoEvents();

nextEventEmitter.on(NextActionTypes.REDIRECT, (event: NextEvent) => {
  console.log('Fire Next event', event);
  setTimeout(() => {
    window.location.href = event.params?.url;
  }, 2000);
});
