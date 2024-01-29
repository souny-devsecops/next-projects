"use server"
import { RootResponse } from "../entities/product";

export interface ProductInterface {
    findAll(): Promise<RootResponse>;
}