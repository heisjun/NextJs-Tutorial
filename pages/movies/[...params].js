import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "91e9e023b9699beb85d0ce022c2bbddd";

export default function MovieDetails() {
  const router = useRouter();
  const [title, id] = router.query.params;
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      setDetails(response.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!details ? (
        <div>loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "25%",
            marginRight: "25%",
          }}
        >
          <h1>{title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
          <h3>{details.overview}</h3>
        </div>
      )}
    </div>
  );
}
