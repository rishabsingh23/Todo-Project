import httpApi from "./api";

export const getAllItems = async () => {
    try {
        const res = await httpApi.get(`todos`);

        return res.data;
    } catch (error) {
        return error;
    }
};

export const getItemById = async (params) => {
    try {
        const res = await httpApi.get(`todos/${params}`);
        console.log("edit data", res.data);
        return res;
    } catch (error) {
        return error;
    }
};
export const createItem = async (data) => {
    try {
        const res = await httpApi.post(`todos`, data);
        return res.data;
    } catch (error) {
        return error;
    }
};

export const updateItem = async (data) => {
    try {
        const res = await httpApi.put(`todos/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
};
export const deleteItem = async (id) => {
    // delete(params) {
    try {
        const res = await httpApi.delete(`todos/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
};
