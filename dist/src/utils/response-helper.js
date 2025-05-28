export class ResponseHelper {
    static success(message) {
        return { success: true, message };
    }
    static data(data, message = 'success') {
        return { success: true, message, response_data: data };
    }
    static paginated(data, totalData, page, size, message = 'success') {
        return {
            success: true,
            message,
            response_data: data,
            paginated_data: {
                page,
                size,
                total_data: totalData,
                page_count: Math.ceil(totalData / size),
            },
        };
    }
    static error(message, status) {
        return { success: false, message };
    }
}
