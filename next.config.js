const API_KEY = "91e9e023b9699beb85d0ce022c2bbddd";

module.exports = {
  //source url로 접속시도 할 때 destination url로 리다이렉트
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "https://naver.com",
        permanent: false,
      },
    ];
  },
  //redirects와 비슷하지만 url이 바뀌지 않고 destination url로 리다이렉트됨.
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
