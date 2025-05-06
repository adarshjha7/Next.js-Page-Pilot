
# Next.js Page-Pilot 

**Next.js Page-Pilot** is a high-performance, scalable web application built using **Next.js 15** that demonstrates Static Site Generation (SSG), Server-Side Rendering (SSR), and Rate Limiting for API endpoints. Deployed seamlessly using **Vercel**.

## 🔗 Live Demo

👉 [https://next-js-page-pilot.vercel.app](https://next-js-page-pilot.vercel.app)

##  Features

-  **100,000+ static pages** generated using `getStaticPaths` and `getStaticProps`.
-  **Server-Side Rendering (SSR)** using `getServerSideProps` with dynamic mock data.
-  **Rate Limiting** middleware (100 req/min) implemented using LRU cache for API protection.
-  Deployed to production on [Vercel](https://next-js-page-pilot.vercel.app).


## 📦 Tech Stack

* **Framework:** Next.js 15
* **Deployment:** Vercel (serverless functions)
* **Rate Limiting:** LRU-based token throttling
* **Styling:** Minimal CSS



## 🧪 How to Use

### Check SSG

Visit `/ssg/1`, `/ssg/99999` → loads instantly.

### Check SSR

Visit `/ssr/12345` → refresh page multiple times to see dynamic data change.

### Check Rate Limit

Hit `/api/data/12345` repeatedly via Postman. After 100 requests/min → you’ll get `429 Too Many Requests`.

##  Local Setup

```bash
git clone https://github.com/yourusername/next-js-page-pilot.git
cd next-js-page-pilot
npm install
npm run dev
```

![Screenshot (39)](https://github.com/user-attachments/assets/03482e0a-7eb6-4567-921e-16d0fa3c6523)
