import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";

export default function StockDetail(){

    const APIKEY = "65c8594968d3c37b42fee0fa0ee44fe6";
    let { nameOfStock } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    async function getInfoAboutStock(){
        const response = await axios.get("https://api.marketstack.com/v1/eod/latest", {
            params: {
                access_key: APIKEY,
                symbols: nameOfStock
            }
        });
        console.log(response);
    }

    useEffect(()=>{
        getInfoAboutStock()
    }, []);

    return (
        <main>
            StockDetail
        </main>
    )
}