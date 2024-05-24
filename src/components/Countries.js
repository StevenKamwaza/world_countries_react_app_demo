import { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";

const Countries = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 6000));
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies');
        const rawData = await response.json();
        setData(rawData)
      } catch (err) {
        setError(err);
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData()
  })

  if (loading) {
    return (
      <div className=" py-6 text-center">
        Loading ...
      </div>
    )
  }
  if (data) {
    return (
      <div>
        <CountryDetails data={data} />
      </div>
    )
  }
}

export default Countries