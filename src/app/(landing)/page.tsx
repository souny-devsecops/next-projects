'use client'
import React, { useEffect, useState } from 'react';
import { RootResponse } from '@/core/domain/entities/product';

import { Button } from '@/components/ui/button';
import GetProductUseCase from '@/core/domain/usecases/products/get-product.use-case';
import { RootState, store, useAppDispatch } from '@/lib/store';
import { useSelector } from 'react-redux';
import { add, appSelector, remove } from '@/core/controllers/appSlice.controller';

export default function ProductList() {
    // redux
    const appReducer = useSelector(appSelector)
    const dispatch = useAppDispatch()
    const [products, setProducts] = useState<RootResponse | null>(null);
    // useEffect(() => {
    //     // Fetch product lists when the component mounts
    //     GetProductUseCase().then((value: RootResponse) => {
    //         setProducts(value);
    //     }).catch(error => {
    //         console.error('Error fetching products:', error);
    //     });
    // }, []);
    return (
        <div>
            <Button onClick={() => {
                console.log("Remove 1");
                dispatch(remove())
            }}>
                -
            </Button>
            <h1>
                Couter: {appReducer.counter1}
            </h1>
            <Button onClick={() => {
                console.log("Add 1");
                dispatch(add())
            }}>
                +
            </Button>
            <Button onClick={() => {
                GetProductUseCase().then((value: RootResponse) => {
                    if (!value.status) {
                        alert(value.message)
                    } else {
                        setProducts(value);
                        console.log("RootResponse: ", value.data);
                        console.log("status: ", value.status);
                        console.log("message: ", value.message);
                    }
                }).catch(error => {
                    console.error('client : Error fetching products:', error);
                });
            }}>
                Fetch API
            </Button>
            <h2>Product List</h2>
            {products ? (
                <ul>
                    {products.data.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}

            <Button onClick={() => {
                console.log("Heko");

            }}>
                onClick
            </Button>
        </div>
    );
}