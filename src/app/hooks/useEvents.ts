import { useQuery } from "@tanstack/react-query";
import { eventService } from "../services/event.service";


export const useEventList  = () => {
    return useQuery({
    queryKey: ['events'],
    queryFn: eventService.getEventList , 
    enabled: true, // attribute 
    refetchOnWindowFocus: false,
    // retry : 7 , 
    // retryDelay : (attemptNumber) => attemptNumber * 1000, 
  })
}