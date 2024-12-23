import { IGetBlogsParams } from "@/interfaces";
import { instance as axiosClient } from "@/configs";

export const blogApi = {
    getAll: async (params : IGetBlogsParams) => {
        const { page, limit, sortStyle, authors, keyword, createDateRange } = params;
        const authorParams = authors.map(author => `authors=${author}`).join('&');
        const createDateRangeParams = createDateRange.map(date => `createDateRange=${date}`).join('&');
        const url = `/blogs?keyword=${keyword}&sortStyle=${sortStyle}&page=${page}&limit=${limit}&${authorParams}&${createDateRangeParams}`;
        return axiosClient.get(url);
        // return axiosClient.get('/blogs', {params});
    },
    getAuthors: async () => {
        return axiosClient.get('/blogs/authors');
    },
}