"use server"
import productRepository from "@/core/data/repositories/product.repository";
import { RootResponse } from "../../entities/product";
import ProductRepository from "@/core/data/repositories/product.repository";


const GetProductUseCase = async (): Promise<RootResponse> => {
  console.log("GetProductUseCase");
  return await new ProductRepository().findAll();
};

export default GetProductUseCase;