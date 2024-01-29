"use server";
import { RootResponse } from "../../domain/entities/product";
import { ProductInterface } from "../../domain/interfaces/product.interface";
import AxiosInstance from "../../data/api_client";
import { AxiosError } from "axios";

class ProductRepository implements ProductInterface {
  async findAll(): Promise<RootResponse> {
    try {
      const res = await AxiosInstance.get('/data-demo');
      const data: RootResponse = res.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data)
      console.error("Server : Error fetching products:", error);
      const errorData: RootResponse = {
        status: false,
        data: [],
        message: `${err.response?.data}`
      };
      return errorData;
    }
  }
}
export default ProductRepository;