import http from './http';

export const faqService = {
    getFaqList : async () => {
      const response = await http.get("/faq");
      return response.data;
    }
}