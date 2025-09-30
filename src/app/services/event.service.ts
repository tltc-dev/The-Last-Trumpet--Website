import { AppEvent } from '@/lib/types';
import http from './http';

export const eventService = {
    getEventList : async ():Promise<AppEvent[]> => {
      const response = await http.get("/events");
      return response.data;
    }
}