import { useQuery } from "@tanstack/react-query";
import { faqService } from "../services/faq.service";


export const useFaqList  = () => {
    return useQuery({
    queryKey: ['events'],
    queryFn: faqService.getFaqList , 
    enabled: true, // attribute 
    refetchOnWindowFocus: false,
    // retry : 7 , 
    // retryDelay : (attemptNumber) => attemptNumber * 1000, 
  })
}