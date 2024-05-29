



export interface ImobileProduct {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    isAvailable: boolean;
    rating: number;
    specification : Array<string>
    deliveryCost : number | string;
    Qty : string;
    offer : string;
}
